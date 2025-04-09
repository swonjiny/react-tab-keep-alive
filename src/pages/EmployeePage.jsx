import { useState } from 'react';

export default function EmployeePage() {
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

    return (
        <div className="form-container">
            <h2>직원 정보</h2>
            <form>
                <div>
                    <label>이름:</label>
                    <input
                        type="text"
                        name="employeeName"
                        value={formData.employeeName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>부서:</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>직급:</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>급여:</label>
                    <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>입사일:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
}
