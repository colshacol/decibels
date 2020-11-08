import * as help from '../helpers'

it('getFlexHorizontalKey works', () => {
  expect(help.getFlexHorizontalKey(['column'])).toBe('align-items')
  expect(help.getFlexHorizontalKey(['columnReverse'])).toBe('align-items')
  expect(help.getFlexHorizontalKey(['row'])).toBe('justify-content')
  expect(help.getFlexHorizontalKey(['rowReverse'])).toBe('justify-content')
})

it('getFlexVerticalKey works', () => {
  expect(help.getFlexVerticalKey(['row'])).toBe('align-items')
  expect(help.getFlexVerticalKey(['rowReverse'])).toBe('align-items')
  expect(help.getFlexVerticalKey(['column'])).toBe('justify-content')
  expect(help.getFlexVerticalKey(['columnReverse'])).toBe('justify-content')
})

it('getFlexDirection works', () => {
  expect(help.getFlexDirection(['row'])).toBe('row')
  expect(help.getFlexDirection(['rowReverse'])).toBe('row-reverse')
  expect(help.getFlexDirection(['column'])).toBe('column')
  expect(help.getFlexDirection(['columnReverse'])).toBe('column-reverse')
})

it('getFlexHorizontal works', () => {
  expect(help.getFlexHorizontal(['xCenter'])).toBe('center')
  expect(help.getFlexHorizontal(['xBetween'])).toBe('space-between')
  expect(help.getFlexHorizontal(['xAround'])).toBe('space-around')
  expect(help.getFlexHorizontal(['xEvenly'])).toBe('space-evenly')
  expect(help.getFlexHorizontal(['xStart'])).toBe('flex-start')
  expect(help.getFlexHorizontal(['xEnd'])).toBe('flex-end')
})
