
## Description and project setup
Wifi QR code generator.

What does it do?
It allows you to generate a QR code with your wifi credentials.
The QR code can be scanned someone who wants to join the network. After, it will be automatically joined to your network. No password sharing.

To start the project:

```
$ yarn install
$ yarn start
```

Make a post request to `http://localhost:3000/wifi` with `{"ssid": "", "password": ""}`, and you will receive an SVG with your QR code. You can save it, print it... And if you own an AirBnb and your wifi password is 20 characters of gibberish, handwritten on a table, please put a qr code there instead. 

## Generate QR code video
[![Watch the video](https://i.vimeocdn.com/video/1936664696-d3dc5b10a4e82a56e767a0e8c7779b264cf22f2627787e37e2e2c8a7b8122b15-d_295x166?r=pad)](https://player.vimeo.com/video/1018463575)

## Scan QR code and join the network video
[![Watch the video](https://i.vimeocdn.com/video/1936664735-6448be7fdb46bff56fcd5a027938b4f06e5a313ee7249ce75de5ba9b53d27504-d_295x166?r=pad)](https://player.vimeo.com/video/1018463595)