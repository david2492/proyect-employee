import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"


const modeloEmployee = {
    employeeID: 0,
    documento: "",
    dombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    direccion: "",
    genero:""
}

const ModalEmployee = ({ mostrarModal, setMostrarModal, guardarEmployee, editar, setEditar, editarEmployee  }) => {

    const [employee, setEmployee] = useState(modeloEmployee);

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setEmployee(
            {
                ...employee,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {
        if (employee.employeeID == 0) {
            guardarEmployee(employee)
        } else {
            editarEmployee(employee)
        }
        setEmployee(modeloEmployee)
    }

    useEffect(() => {
        if (editar != null) {
            setEmployee(editar)
        } else {
            setEmployee(modeloEmployee)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {employee.employeeID == 0 ? "Nuevo Usuario" : "Editar Contacto"}
            
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Documento</Label>
                        <Input name="documento" onChange={(e) => actualizarDato(e)} value={employee.documento}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={employee.nombre}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellidos</Label>
                        <Input name="apellidos" onChange={(e) => actualizarDato(e)} value={employee.apellidos} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizarDato(e)} value={employee.telefono} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input name="email" onChange={(e) => actualizarDato(e)} value={employee.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Direccion</Label>
                        <Input name="direccion" onChange={(e) => actualizarDato(e)} value={employee.direccion} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Genero</Label>
                        <Input name="genero" onChange={(e) => actualizarDato(e)} value={employee.genero} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos }>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal }>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalEmployee;