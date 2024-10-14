function formatDate (date) {
  const [datePart, timePart] = date.split('-')
  const [day, month, year] = datePart.split('.')
  const [hours, minutes] = timePart.split(':')

  return `${year}${month}${day}T${hours}${minutes}00`
}

function getTimezone () {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

module.exports = { formatDate, getTimezone }
