// src/pages/EmployeePage/EmployeeList.jsx
import styles from './EmployeeList.module.css';

export default function EmployeeList({ employees }) {
    return (
        <div className={styles.listContainer}>
            <h3>직원 목록</h3>
            <table className={styles.employeeTable}>
                <thead>
                <tr>
                    <th>이름</th>
                    <th>부서</th>
                    <th>직급</th>
                    <th>급여</th>
                    <th>입사일</th>
                </tr>
                </thead>
                <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.employeeName}</td>
                        <td>{employee.department}</td>
                        <td>{employee.position}</td>
                        <td>{employee.salary.toLocaleString()}원</td>
                        <td>{employee.startDate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
