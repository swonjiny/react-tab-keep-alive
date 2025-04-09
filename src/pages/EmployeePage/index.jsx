// src/pages/EmployeePage/index.jsx
import { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeStats from './EmployeeStats';
import Scene3D from '../../components/3D/Scene3D';
import styles from './EmployeePage.module.css';

export default function EmployeePage() {
    const [employees, setEmployees] = useState([]);

    const handleAddEmployee = (newEmployee) => {
        setEmployees(prev => [...prev, { ...newEmployee, id: Date.now() }]);
    };

    return (
        <div className={styles.employeePage}>
            <h2>직원 관리</h2>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <EmployeeForm onSubmit={handleAddEmployee} />
                    <div className={styles.scene3dWrapper}>
                        <Scene3D />
                    </div>
                </div>
                <div className={styles.contentSection}>
                    <EmployeeStats employees={employees} />
                    <EmployeeList employees={employees} />
                </div>
            </div>
        </div>
    );
}
