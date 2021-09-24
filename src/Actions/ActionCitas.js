import { types } from '../Type/types'

export const AddCitas = (citas) => {
    return {
        type: types.agregar,
        payload: citas
    }
}

export const Borrar = (id) => {
    return {
        type: types.borrar,
        payload: id
    }
}