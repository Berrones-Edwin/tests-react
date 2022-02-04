import "@testing-library/jest-dom";
import { useContext } from '../../base/06-deses-obj';

describe('Test en 06-deses-obj',()=>{
    test('La funcion useContext debe de retornar un obj', () => {
      const objTest = {
        nombreClave: 'Fernando',
        anios: 30,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
      }

      const objResponse = useContext({
          clave:'Fernando',
          edad:30
      })

      expect(objResponse).toEqual(objTest)
    });
    
})