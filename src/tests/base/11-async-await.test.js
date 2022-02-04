import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await'

describe('tests in file 11 async await',()=>{
    test('should return a string - url',async()=>{
        const url = await getImagen()

        expect(typeof url).toBe('string')
    })
})