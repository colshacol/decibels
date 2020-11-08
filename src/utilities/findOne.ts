export const findOne = (values: any[], none: any = '') => (target: any[]) => {
  for (const value of values) {
    console.log(value, target.includes(value), values, target)
    if (target.includes(value)) return value
  }
  return none
}
