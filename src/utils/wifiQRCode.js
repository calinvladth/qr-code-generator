const QRCode = require('qrcode');

async function wifiQRCode({ ssid, password, encryption, hidden }, res) {
    try {
        const code = `WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden ? 'true' : ''};;`;
        const qr = await QRCode.toString(code, { type: 'svg' });
        return qr
    } catch (err) {
        return
    }
}
 

module.exports = {wifiQRCode}