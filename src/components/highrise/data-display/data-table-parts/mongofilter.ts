import { HLAdvanceFilterData } from '@gohighlevel/highrise'

const evaluateRule = (row: Record<string, any>, rule: any): boolean => {
  if (!rule.field || !rule.operator) return true

  const rowValue = row[rule.field]
  const filterValue = rule.value

  switch (rule.operator) {
    // String operators
    case 'equal':
      return (
        String(rowValue).toLowerCase() === String(filterValue).toLowerCase()
      )
    case 'not_equal':
      return (
        String(rowValue).toLowerCase() !== String(filterValue).toLowerCase()
      )
    case 'contains':
      return String(rowValue)
        .toLowerCase()
        .includes(String(filterValue).toLowerCase())
    case 'not_contains':
      return !String(rowValue)
        .toLowerCase()
        .includes(String(filterValue).toLowerCase())
    case 'begins_with':
      return String(rowValue)
        .toLowerCase()
        .startsWith(String(filterValue).toLowerCase())
    case 'ends_with':
      return String(rowValue)
        .toLowerCase()
        .endsWith(String(filterValue).toLowerCase())

    // Number/Comparison operators
    case 'greater':
      return Number(rowValue) > Number(filterValue)
    case 'greater_or_equal':
      return Number(rowValue) >= Number(filterValue)
    case 'less':
      return Number(rowValue) < Number(filterValue)
    case 'less_or_equal':
      return Number(rowValue) <= Number(filterValue)
    case 'between':
      if (Array.isArray(filterValue) && filterValue.length === 2) {
        const [min, max] = filterValue.map(Number).sort((a, b) => a - b)
        return Number(rowValue) >= min && Number(rowValue) <= max
      }
      return true
    case 'not_between':
      if (Array.isArray(filterValue) && filterValue.length === 2) {
        const [min, max] = filterValue.map(Number).sort((a, b) => a - b)
        return Number(rowValue) < min || Number(rowValue) > max
      }
      return true

    // // Date operators
    // case 'before':
    //   return new Date(rowValue) < new Date(filterValue)
    // case 'after':
    //   return new Date(rowValue) > new Date(filterValue)
    // case 'on':
    //   return new Date(rowValue).toDateString() === new Date(filterValue).toDateString()

    // Array/Select operators
    case 'in':
      return Array.isArray(filterValue)
        ? filterValue.includes(rowValue)
        : rowValue === filterValue
    case 'not_in':
      return Array.isArray(filterValue)
        ? !filterValue.includes(rowValue)
        : rowValue !== filterValue

    // // Boolean operators
    // case 'is True':
    //   return rowValue === true
    // case 'is False':
    //   return rowValue === false

    case 'is_empty':
    case 'is_null':
      return rowValue === null || rowValue === undefined || rowValue === ''
    case 'is_not_empty':
    case 'is_not_null':
      return rowValue !== null && rowValue !== undefined && rowValue !== ''

    default:
      return true
  }
}

const evaluateGroup = (
  row: Record<string, any>,
  group: { condition: string; rules: any[] }
): boolean => {
  if (!group.rules || group.rules.length === 0) return true

  const results = group.rules.map(rule => evaluateRule(row, rule))

  return group.condition === 'AND'
    ? results.every(Boolean)
    : results.some(Boolean)
}

export const mongoFilter = (
  filterData: HLAdvanceFilterData,
  rows: any[]
): any[] => {
  const hasValidRules = filterData.rules.some(group =>
    group.rules.some(rule => rule.field && rule.operator)
  )

  if (!hasValidRules) return rows

  return rows.filter(row => {
    const groupResults = filterData.rules.map(group =>
      evaluateGroup(row, group)
    )
    return filterData.condition === 'AND'
      ? groupResults.every(Boolean)
      : groupResults.some(Boolean)
  })
}
