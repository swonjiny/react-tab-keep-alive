// src/pages/EmployeePage/index.jsx
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeStats from './EmployeeStats';
import styles from './EmployeePage.module.css';
import {useState} from "react";

export default function EmployeePage() {
    const [employees, setEmployees] = useState([]);

    const handleAddEmployee = (newEmployee) => {
        setEmployees(prev => [...prev, { ...newEmployee, id: Date.now() }]);
    };

    return (
        <div className={styles.employeePage}>
            <h2>직원 관리</h2>
            <div className={styles.container}>
                <div className={styles.formSection}>
                    <EmployeeForm onSubmit={handleAddEmployee} />
                </div>
                <div className={styles.contentSection}>
                    <EmployeeStats employees={employees} />
                    <EmployeeList employees={employees} />
                </div>
            </div>
        </div>
    );
}
