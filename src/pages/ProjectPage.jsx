import { useState } from 'react';

export default function ProjectPage() {
    const [formData, setFormData] = useState({
        projectName: '',
        startDate: '',
        endDate: '',
        budget: '',
        status: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="form-container">
            <h2>프로젝트 정보</h2>
            <form>
                <div>
                    <label>프로젝트명:</label>
                    <input
                        type="text"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>시작일:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>종료일:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>예산:</label>
                    <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>상태:</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="">선택하세요</option>
                        <option value="planning">기획중</option>
                        <option value="progress">진행중</option>
                        <option value="completed">완료</option>
                    </select>
                </div>
            </form>
        </div>
    );
}
