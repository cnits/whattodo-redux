const https = require('https'),
    URL = require('url'),
    fs = require('fs'),
    path = require('path');

// start our downloads
console.log("---- Start downloading ----");

const dir_path = '../../../../../../Desktop/iESLPod'
const uriContainer = buildURIs('m_PE05');

downloads(uriContainer.m_PE05.uri_set, uriContainer.m_PE05.folder, true);


// Or grab the urls from CLI
const urls = process.argv.slice(2);
// we use this function to download one at a time so we don't overload the server
function download() {
    const url = urls.shift();

    if (url == null) {
        console.log("All done.");
        process.exit(0);
    }

    const parsedUrl = URL.parse(url);
    const url_options = {
        hostname: parsedUrl.hostname,
        path: parsedUrl.path,
        method: "GET"
    };

    const file_name = getFilename(url);
    const ws = fs.createWriteStream(path.join(__dirname, "your-dir", file_name));
    ws.on('finish', () => {
        console.log(file_name);
        download();
    });

    https.request(url_options, res => res.pipe(ws)).end();
}

function downloads(uriArr, folder, exit_process = false) {
    const url = uriArr.shift();
    if (url == null) {
        console.log("All done.");

        exit_process && process.exit(0);
    }

    const parsedUrl = URL.parse(url);
    const url_options = {
        hostname: parsedUrl.hostname,
        path: parsedUrl.path,
        method: "GET"
    };

    if (!fs.existsSync(path.join(__dirname, `${dir_path}/${folder}`)))
        fs.mkdirSync(path.join(__dirname, `${dir_path}/${folder}`));

    const file_name = getFilename(url);

    console.log(url + "\n");
    const ws = fs.createWriteStream(path.join(__dirname, `${dir_path}/${folder}`, file_name));
    ws.on('finish', () => {
        downloads(uriArr, folder, exit_process);
    });

    https.request(url_options, res => res.pipe(ws)).end();
}


/**
 * http://www.ieslpod.com/m_CE/001_060/032_iESLPod.com.mp3
 * http://www.ieslpod.com/m_DE/0001_0100/0047_iESLPod.com.mp3
 * 
 * http://www.ieslpod.com/m_PE[01-06]/08_iESLPod.com.mp3
 */
function buildURIs(catalog = null) {
    const container = {
        m_CE: {
            name: 'm_CE',
            len: 3,
            folder: 'Cultural English',
            sub_catalog: true,
            uri_set: [],
            size: 60,
            total: 603
        },
        m_DE: {
            name: 'm_DE',
            len: 4,
            folder: 'Daily English',
            sub_catalog: true,
            uri_set: [],
            size: 100,
            total: 1305
        },
        m_PE01: {
            name: 'm_PE01',
            len: 2,
            folder: 'Practical English/A Day in the Life of Jeff',
            sub_catalog: false,
            uri_set: [],
            size: 10,
            total: 10
        },
        m_PE02: {
            name: 'm_PE02',
            len: 2,
            folder: 'Practical English/A Day in the Life of Lucy',
            sub_catalog: false,
            uri_set: [],
            size: 10,
            total: 10
        },
        m_PE03: {
            name: 'm_PE03',
            len: 2,
            folder: 'Practical English/English for Business Meetings',
            sub_catalog: false,
            uri_set: [],
            size: 10,
            total: 10
        },
        m_PE04: {
            name: 'm_PE04',
            len: 1,
            folder: 'Practical English/Interview_Questions_Answered',
            sub_catalog: false,
            uri_set: [],
            size: 6,
            total: 6
        },
        m_PE05: {
            name: 'm_PE05',
            len: 2,
            folder: 'Practical English/Using English at work',
            sub_catalog: false,
            uri_set: [],
            size: 10,
            total: 10
        },
        m_PE06: {
            name: 'm_PE06',
            len: 3,
            folder: 'Practical English/Introduction to the United States',
            sub_catalog: false,
            uri_set: [],
            size: 100,
            total: 100
        }
    }

    for (const catalog_code in container) {
        if (catalog) {
            container[catalog].uri_set = generateURI(container[catalog].name, container[catalog].len, container[catalog].size, container[catalog].total, container[catalog].sub_catalog);
            break;
        } else {
            container[catalog_code].uri_set = generateURI(container[catalog_code].name, container[catalog_code].len, container[catalog_code].size, container[catalog_code].total, container[catalog_code].sub_catalog);
        }
    }

    // container.m_CE.uri_set = generateURI(container.m_CE.name, container.m_CE.len, container.m_CE.size, container.m_CE.total);
    // container.m_DE.uri_set = generateURI(container.m_DE.name, container.m_DE.len, container.m_DE.size, container.m_DE.total);

    return container;
}

function generateURI(catalog_code, len_of_name, page_size, total_item, sub_catalog = true) {
    const suffix = '_iESLPod.com.mp3';
    const host = 'http://www.ieslpod.com';
    const URIs = [];

    const total_page = Math.ceil(total_item / page_size);

    for (let page = 1; page <= total_page; page++) {
        const page_index = (page_size * (page - 1)) + 1;
        let page_limit = page_size * page;

        if ((page + 1) === total_page && (total_item - page_limit) < page_size) {
            page_limit += (total_item - page_limit);
        }

        const folder = `${getFilePrefix(page_index, len_of_name)}_${getFilePrefix(page_limit, len_of_name)}`;
        for (let index = page_index; index <= page_limit; index++) {
            const prefix = getFilePrefix(index, len_of_name);
            if (sub_catalog) {
                URIs.push(`${host}/${catalog_code}/${folder}/${prefix}${suffix}`);
            } else {
                URIs.push(`${host}/${catalog_code}/${prefix}${suffix}`);
            }
        }

        if (page_limit === total_item) {
            break;
        }
    }

    return URIs;
}

function getFilePrefix(name, len) {
    return String(name).padStart(len, '0');
}

function getFilename(uri) {
    const position = String(uri).lastIndexOf('/') + 1;
    return String(uri).substr(position);
}