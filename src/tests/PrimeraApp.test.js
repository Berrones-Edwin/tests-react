import '@testing-library/jest-dom'
import React from 'react'
import PrimeraApp from '../PrimeraApp'
import { render } from '@testing-library/react'

describe('Prueba in <PrimeraApp/>', () => {
  test('Debe de mostrar saludo', () => {
    const saludo = 'Hola, soy Goku'
    const wrapper = render(<PrimeraApp saludo={saludo} />)
    wrapper.getByText(saludo+'!!!')
  })
  test('Debe de mostrar subtitulo', () => {
    const saludo = 'Hola, soy Goku'
    const subtitulo = 'Soy un subtitulo'
    const wrapper = render(<PrimeraApp saludo={saludo}  subtitulo={subtitulo}/>)

    wrapper.getByText(saludo+'!!!')
    wrapper.getByText(subtitulo)
  })
})
