// src/pages/EmployeePage/EmployeeForm.jsx
import { useState } from 'react';
import styles from './EmployeeForm.module.css';

export default function EmployeeForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        employeeName: '',
        department: '',
        position: '',
        salary: '',
        startDate: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            employeeName: '',
            department: '',
            position: '',
            salary: '',
            startDate: ''
        });
    };

    return (
        <div className={styles.formContainer}>
            <h3>직원 정보 입력</h3>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>이름:</label>
                    <input
                        type="text"
                        name="employeeName"
                        value={formData.employeeName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>부서:</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>직급:</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>급여:</label>
                    <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>입사일:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    직원 추가
                </button>
            </form>
        </div>
    );
}
