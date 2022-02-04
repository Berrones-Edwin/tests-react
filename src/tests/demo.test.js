describe('Prueba en archivo demo.test.js', () => {
  test('Deben de ser iguales los string', () => {
    let holaMundo = 'hola mundo'
    let holaMundo1 = 'hola mundo'

    expect(holaMundo).toBe(holaMundo1)
  })
})
