import React from 'react';
import { Button } from 'reactstrap';

const EmployeeAside = () => {
    return (
        <aside className="employee-aside color-change-2x" style={{  padding: '20px', textAlign: 'center' }}>
            <div className="container-aside" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ fontSize: '36px', color: '#fff', marginBottom: '20px' }}>Bienvenido a la Empresa Empleados </h1>
                <h2 style={{ fontSize: '24px', color: '#fff', marginBottom: '20px' }}>Start Contributing</h2>
                <Button color="danger">Probar ahora</Button>
            </div>

        </aside>
    );
};

export default EmployeeAside;