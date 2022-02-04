import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe de retornar Hola Fernando!', () => {
    const name = 'Fenando'

    const response = getSaludo(name)

    expect(response).toBe('Hola ' + name + '!')
})
test('getSaludo debe de retornar Hola Carlos',()=>{
    const response = getSaludo();
    
    expect(response).toBe('Hola Carlos!')
  })
})
