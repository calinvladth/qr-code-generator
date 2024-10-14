
## Description and project setup
QR code generator.

What does it do?
It allows you to generate a QR code for the following:
* [phone](https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/client/result/TelResultParser.java)
* [sms](https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/client/result/SMSParsedResult.java)
* [link](https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/QRCodeWriter.java)
* [vcard](https://www.rfc-editor.org/rfc/rfc6350.html#page-53) 
* [vcalendar](https://www.rfc-editor.org/rfc/rfc5545#page-146)
* [wifi](https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/client/result/WifiResultParser.java)

To start the project:

```
$ yarn install
$ yarn start
```

You can import the [postman collection](./postman_collection.json) found in this repository and you should be set.


Some example video on generating a WIFI QR Code:

## Generate QR code video
[![Watch the video](https://i.vimeocdn.com/video/1936664696-d3dc5b10a4e82a56e767a0e8c7779b264cf22f2627787e37e2e2c8a7b8122b15-d_295x166?r=pad)](https://player.vimeo.com/video/1018463575)

## Scan QR code and join the network video
[![Watch the video](https://i.vimeocdn.com/video/1936664735-6448be7fdb46bff56fcd5a027938b4f06e5a313ee7249ce75de5ba9b53d27504-d_295x166?r=pad)](https://player.vimeo.com/video/1018463595)