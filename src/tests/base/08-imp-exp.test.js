import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Test in file 08-imp-exp', () => {
  test('Debe de retornar un heroe por id', () => {
    const id = 4

    const response = getHeroeById(id)

    const responseTest = heroes.find((_heroe) => _heroe.id === id)

    expect(response).toEqual(responseTest)
  })
  test('Debe de retornar undefined', () => {
    const id = 45

    const response = getHeroeById(id)

    expect(response).toBe(undefined)
  })
  test('Debe de retornar heroes Marvel', () => {
    const owner = 'Marvel'

    const response = getHeroesByOwner(owner)

    const responseTest = heroes.filter((_heroe)=>_heroe.owner === owner)

    expect(response).toEqual(responseTest)
  })
  test('Debe de retornar heroes DC', () => {
    const owner = 'DC'

    const response = getHeroesByOwner(owner)

    const responseTest = heroes.filter((_heroe)=>_heroe.owner === owner)

    expect(response).toEqual(responseTest)
  })
  test('Debe de retornar heroes con longitud 2 ', () => {
    const owner = 'Marvel'

    const response = getHeroesByOwner(owner)

    const responseTest = heroes.filter((_heroe)=>_heroe.owner === owner)

    expect(response.length).toBe(responseTest.length)
  })
  test('Debe de retornar objeto vacio si el owner no existe  ', () => {
    const owner = 'Marvellll'

    const response = getHeroesByOwner(owner)
    // console.log(response)

    const responseTest = heroes.filter((_heroe)=>_heroe.owner === owner)

    expect(response.length).toBe(responseTest.length)
  })
})
