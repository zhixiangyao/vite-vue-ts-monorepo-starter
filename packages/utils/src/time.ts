import dayjs from 'dayjs'

export enum FormatOptions {
  DD = 'DD',
  YYYY_MM_DD = 'YYYY-MM-DD',
  YYYY_MM_DD_HH_mm = 'YYYY-MM-DD HH:mm',
  YYYY_MM_DD_HH_mm_ss = 'YYYY-MM-DD HH:mm:ss',
}

export function formatTime(date: string | number | dayjs.Dayjs | Date, f = FormatOptions.YYYY_MM_DD) {
  return dayjs(date).format(f)
}

export function getToday() {
  return formatTime(dayjs(), FormatOptions.YYYY_MM_DD)
}

export function getYesterday() {
  return formatTime(dayjs().subtract(1, 'day'), FormatOptions.YYYY_MM_DD)
}
