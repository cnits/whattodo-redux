WhatToDo - Project

Step by step:
1. Install "nodejs": https://nodejs.org/en/
    Check it in Command-Line: node -v and npm -v
2. Create project "whattodo-redux" with commands: 
    cd ../whattodo-redux 
    npm init -y
3. Install "webpack":
    npm install --save-dev webpack webpack-dev-server html-webpack-plugin
    Then, we need to add it into package.jsson:
        ...
        "scripts": {
            "start": "webpack-dev-server --progress --colors --hot --config ./webpack.config.js",
            "build": "webpack --progress --colors --config ./webpack.config.js"
        },
        ...
4. Create id="app" which is the root that React Component will render
5. Build project:
    npm run build
6. Start project:
    npm start
7. Install "Hot Reloading": Apply changes in source code to web browser immediately.
    npm install --save-dev react-hot-loader
    module.exports = {
        entry: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        ...
        devServer: {
            ...
            hot: true
        }
    };
8. Optional. Install Bable: Its mission is to compile ES6 to ES5 which is supported on almost of browser
    npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-1 babel-preset-stage-2

    - File .babelrc
        {
            "presets": [
                "es2015",
                "react",
                "stage-1",
                "stage-2"
            ]
        }
    - module.exports = {
        ...
        module: {
            loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
            }]
        },
        ...
    };
9. Install React:
    npm install --save react react-dom