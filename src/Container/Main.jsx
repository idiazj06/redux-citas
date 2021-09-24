import React from 'react'
import AgregarCita from '../Components/AgregarCita'
import ListarCita from '../Components/ListarCita'
import {store} from '../Store/store'
import {Provider} from 'react-redux'




export default function Main() {
    return (
        <Provider store={store}>
            <div className="container text-center">
                <header><h1>EPS Sura</h1></header>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <AgregarCita/>
                    </div>
                    <div className="col-md-6">
                        <ListarCita/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}
