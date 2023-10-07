import { Table, Button  } from "reactstrap"

const TablaEmployee = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarEmployee }) => {

    

    const enviarDatos = (employee) => {
        setEditar(employee)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Documento</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Direccion</th>
                    <th>Genero</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="8">Sin registros</td>
                        </tr>
                    ) : (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.documento}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellidos}</td>
                                    <td>{item.telefono}</td>
                                    <td>{item.email}</td>
                                    <td>{item.direccion}</td>
                                    <td>{item.genero}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2"
                                            onClick={() => enviarDatos(item) }
                                        >Editar</Button>
                                        <Button color="danger" size="sm"
                                            onClick={() => eliminarEmployee(item.employeeId) }
                                        >Eliminar</Button>
                                    </td>
                                </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablaEmployee;