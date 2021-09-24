import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Borrar} from '../Actions/ActionCitas'


export default function ListarCita() {


    const { citas } = useSelector(state => state.citas)
    const dispatch = useDispatch()

    const handleDelete = (id) =>{
        dispatch(Borrar(id))
    }

    console.log(citas)

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Agenda</h2>
                <div className="lista-citas">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Sintomas</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                citas.map(cita => (
                                    <tr key={cita.id}>
                                        <td>{cita.id}</td>
                                        <td>{cita.nombre || 'undefined'}</td>
                                        <td>{cita.fecha}</td>
                                        <td>{cita.hora}</td>
                                        <td>{cita.sintomas || 'undefined'}</td>
                                        <td><button 
                                        className="btn btn-danger"
                                        onClick={()=>handleDelete(cita.id)}
                                        >
                                            Borrar
                                        </button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}
