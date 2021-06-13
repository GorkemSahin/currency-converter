export const truncate = (num: number, fixed: number) => {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
  const result = num.toString().match(re)?.[0]
  return result ? parseFloat(result) : num
}
