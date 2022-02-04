import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import React from 'react'
import PrimeraApp from '../PrimeraApp'

describe('Prueba in <PrimeraApp/>', () => {
  test('Debe de mostrar saludo', () => {
    const saludo = 'Hola, soy Goku'
    const wrapper = shallow(<PrimeraApp saludo={saludo} />)

    expect(wrapper).toMatchSnapshot()
  })
  test('Debe de mostrar subtitulo', () => {
    const saludo = 'Hola, soy Goku'
    const subtitulo = 'Soy un subtitulo'
    const wrapper = shallow(
      <PrimeraApp subtitulo={subtitulo} saludo={saludo} />
    )

    const textParagraph = wrapper.find('p').text()

    expect(textParagraph).toBe(subtitulo)



  })
})
