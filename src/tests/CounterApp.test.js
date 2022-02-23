import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import CounterApp from '../CounterApp'
import { fireEvent } from '@testing-library/dom'

describe('Test in <CounterApp /> component', () => {
  // let wrapper = render(<CounterApp />)
  beforeEach(() => {
    const value = 100
    render(<CounterApp value={value} />)
  })

  test('should show component in screen', () => {
    screen.getByText('CounterApp')
  })

  test('should show value 100 in component', () => {
    screen.getByText('CounterApp')
    screen.getByText('100')
  })

  test('should increment value when click in button add', () => {
    const btn = screen.getByText('+1')
    fireEvent.click(btn)
    screen.getByText('101')
  })
  test('should decrement value when click in button -', () => {
    fireEvent.click(screen.getByText('-1'))
    screen.getByText('99')
  })

  test('should show value initial to click button reset', () => {
    const btnAdd = screen.getByText('+1')
    const btnRest = screen.getByText('-1')

    fireEvent.click(btnAdd)
    fireEvent.click(btnAdd)
    fireEvent.click(btnRest)
    fireEvent.click(btnRest)
    fireEvent.click(screen.getByText('Reset'))
    screen.getByText('100')
  })
})
