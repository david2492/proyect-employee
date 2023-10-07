
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaEmployee from "./componentes/TablaEmployee";
import { useEffect, useState } from "react"
import ModalEmployee from "./componentes/ModalEmployee";
import SearchBar from "./componentes/SearchBar";
import NavbarComponent from "./componentes/Navbar";
import EmployeeAside from "./componentes/aside";
import Footer from "./componentes/Footer";
import AboutPage from "./componentes/AboutPage";
import ServicesSection from "./componentes/ServicesSection";





const App = () => {

    const [employees, setEmployees] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] =useState(null)

    const mostrarEmployees = async () => {
        const response = await fetch("api/employee/Lista");
        if (response.ok) {
            const data = await response.json();
            setEmployees(data)
        } else {
            console.log("Error en los employees")
        }
    }

    useEffect(() => {
        mostrarEmployees()
    }, [])

    const guardarEmployee = async (employee) => {
        const response = await fetch("api/employee/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(employee)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarEmployees();
        }
    }

    const editarEmployee = async (employee) => {
        const response = await fetch("api/employee/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(employee)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarEmployees();
        }
    }

    const eliminarEmployee = async (id) => {
        
        var respuesta = window.confirm("desea Eliminar usuario?")

        if (!respuesta) {
            return;
        }

        

        const response = await fetch("api/employee/eliminar/" + id, {
            method:'DELETE',
        })

        if (response.ok) {
            mostrarEmployees();
        }
    }

    const buscarEmployees = async (searchTerm) => {
        
        const results = employees.filter((employee) =>
            employee.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setEmployees(results);
    };

    return (
        <Container fluid >
            <div>
                <NavbarComponent />
            </div>
            <div>
                <EmployeeAside />
            </div>
            <div className="containerStyle">
                <AboutPage />
            </div>
            <div className="servicesStyle">
                <ServicesSection />
            </div>
            
            <div style={{ backgroundColor: 'white', width: '100%' }}>
            
                <Row className="justify-content-center align-items-center">
                    <Col sm="9" expand="md" className="mt-4 my-3">
                        <Card>
                            <CardHeader>
                                <h5>Lista de Empleados</h5>
                            </CardHeader>



                            <CardBody>
                                <SearchBar onSearch={buscarEmployees} />
                                <hr></hr>
                                <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Usuario</Button>
                                <hr></hr>
                                <TablaEmployee
                                    data={employees}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarEmployee={eliminarEmployee}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div>
                    <Footer />
                </div>
            </div>
            
            
            <ModalEmployee
                mostrarModal={mostrarModal}

                setMostrarModal={setMostrarModal}
                guardarEmployee={guardarEmployee}

                editar={editar}
                setEditar={setEditar}
                editarEmployee={editarEmployee}
            />
        </Container>
    )
}

export default App;
