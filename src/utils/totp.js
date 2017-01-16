(function () {
    'use strict';
    var jsSHA = require("jsSHA");
    function dec2hex(s) { return (s < 15.5 ? '0' : '') + Math.round(s).toString(16); }
    function hex2dec(s) { return parseInt(s, 16); }

    function base32tohex(base32) {
        var base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        var bits = "";
        var hex = "";

        for (var i = 0; i < base32.length; i++) {
            var val = base32chars.indexOf(base32.charAt(i).toUpperCase());
            bits += leftpad(val.toString(2), 5, '0');
        }

        for (var i = 0; i + 4 <= bits.length; i += 4) {
            var chunk = bits.substr(i, 4);
            hex = hex + parseInt(chunk, 2).toString(16);
        }
        return hex;

    }

    function leftpad(str, len, pad) {
        if (len + 1 >= str.length) {
            str = Array(len + 1 - str.length).join(pad) + str;
        }
        return str;
    }

    function generateOPT(seedcode, option) {
        var _sha = { SHA_1: "SHA-1", SHA_224: "SHA-224", SHA3_224: "SHA3-224", SHA_256: "SHA-256", SHA3_256: "SHA3-256", SHA_384: "SHA-384", SHA3_384: "SHA3-384", SHA_512: "SHA-512", SHA3_512: "SHA3-512" };
        var opt = option || {};
        if (!opt.timestep) {
            opt.timestep = 30;
        }
        if (!opt.sha) {
            opt.sha = _sha.SHA_1;
        }

        var key = base32tohex(seedcode);
        var T0_epoch = Math.round(new Date().getTime() / 1000.0);
        var T_time = leftpad(dec2hex(Math.floor(T0_epoch / opt.timestep)), 16, '0');

        var shaObj = new jsSHA(opt.sha, "HEX");
        shaObj.setHMACKey(key, "HEX");
        shaObj.update(T_time);
        var hmac = shaObj.getHMAC("HEX");

        var offset = hex2dec(hmac.substring(hmac.length - 1));

        var otp = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec('7fffffff')) + '';
        return (otp).substr(otp.length - 6, 6);
    }

    module.exports.totp = { generateOPT: generateOPT };
})();

function timer() {
    var epoch = Math.round(new Date().getTime() / 1000.0);
    var countDown = 30 - (epoch % 30);
    if (epoch % 30 == 0) updateOtp();
    $('#updatingIn').text(countDown);

}

$(function () {
    updateOtp();

    $('#update').click(function (event) {
        updateOtp();
        event.preventDefault();
    });

    $('#secret').keyup(function () {
        updateOtp();
    });

    setInterval(timer, 1000);
});