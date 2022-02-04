import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Tests en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const userTest = { uid: 'ABC123', username: 'El_Papi1502' }
    const userReponse = getUser()

    expect(userReponse).toEqual(userTest)
  })
  test('getUserActivo debe de retornar un objeto', () => {
    const userTest = { uid: 'ABC567', username: 'Fernando' }
    const userReponse = getUsuarioActivo('Fernando')

    expect(userReponse).toEqual(userTest)
  })
})
