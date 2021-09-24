import { combineReducers, createStore, subscribe } from "redux";
import CitasReducer from '../Reducers/CitasReducer'
import {obtenerStateStorage, guardarStateStorage} from '../LocalStorage'

const reducer = combineReducers({
    citas: CitasReducer
})

const storageState = obtenerStateStorage()


export const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
    guardarStateStorage({
      citas: store.getState().citas
    })
  })

