import { shallow } from 'enzyme'
import React from 'react'
import CounterApp from '../CounterApp'

describe('Test in <CounterApp /> component', () => {
  let wrapper = shallow(<CounterApp />)
  beforeEach(() => {
    wrapper = shallow(<CounterApp />)
  })
  test('should show component in screen', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should show value 100 in component', () => {
    const value = 100
    const wrapper = shallow(<CounterApp value={value} />)
    const counterWrapper = wrapper.find('h2').text().trim()

    expect(counterWrapper).toBe('100')
  })

  test('should increment value when click in button add', () => {
    wrapper.find('button').at(0).simulate('click')
    const counterWrapper = wrapper.find('h2').text().trim()

    expect(counterWrapper).toBe('11')
  })
  test('should decrement value when click in button -', () => {
    wrapper.find('button').at(2).simulate('click')

    const counterWrapper = wrapper.find('h2').text().trim()

    expect(counterWrapper).toBe('9')
  })

  test('should show value initial to click button reset', () => {
    const value = 155
    const wrapper = shallow(<CounterApp value={value} />)
    const counterWrapper = wrapper.find('h2').text().trim()

    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')

    expect(counterWrapper).toBe('155')
  })

})
