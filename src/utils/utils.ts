export function FormatDate(dateToFormat: string) {
  const date = GetDate(dateToFormat)

  if (date.length > 0) {
    const dateToFormatInReturn = new Date(date)

    const day = dateToFormatInReturn.getDate()
    const month = dateToFormatInReturn.getMonth() + 1
    const year = dateToFormatInReturn.getFullYear()

    return `${day}.${month}.${year}`
  }

  return ''
}

function GetDate(date: string) {
  if (date == null || date === '') {
    return ''
  }

  const split = date.split('T')

  if (split.length > 0) {
    return split[0]
  }

  return ''
}
