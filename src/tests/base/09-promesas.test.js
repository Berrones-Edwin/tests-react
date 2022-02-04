import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'

describe('Test in file 09 promesas', () => {
  test('getHeroeByIdAsync should return a heroe async', (done) => {
    const id = 1

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0])
      done()
    })
  })

  test('getHeroeByIdAsync should return a error message if heroe exists async', (done) => {
    const id = 12

    getHeroeByIdAsync(id).catch((message) => {
      expect(message).toBe('No se pudo encontrar el héroe')
      done()
    })
  })
  
 
})
