const QRCode = require('qrcode')

function generateVCalendar ({ title, description, startDate, endDate, timezone, location, url }) {
  return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
DTSTART;TZID=${timezone}:${startDate}
DTEND;TZID=${timezone}:${endDate}
LOCATION:${location}
URL:${url}
END:VEVENT
END:VCALENDAR`
}

function generateVCard ({ firstName, lastName, fullName, company, title, phone, email, link }) {
  return `
BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${fullName}
ORG:${company}
TITLE:${title}
TEL:${phone}
EMAIL:${email}
URL:${link}
END:VCARD
`
}

function generatePhoneCall (phone) {
  return `tel:${phone}`
}

function generateSms ({ phone, message }) {
  return `sms:${phone}&body=${encodeURIComponent(message)}`
}

function generateWifi ({ ssid, password, encryption, hidden }) {
  return `WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden ? 'true' : ''};;`
}

function drawSVG (code, type = 'svg') {
  return QRCode.toString(code, { type })
}

const QrCodeService = {
  generateVCalendar,
  generateVCard,
  generatePhoneCall,
  generateSms,
  generateWifi,
  drawSVG
}

module.exports = QrCodeService
