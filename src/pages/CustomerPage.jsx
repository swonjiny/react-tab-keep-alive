import { useState } from 'react';

export default function CustomerPage() {
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        phone: '',
        address: '',
        type: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="form-container">
            <h2>고객 정보</h2>
            <form>
                <div>
                    <label>고객명:</label>
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>이메일:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>전화번호:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>주소:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>고객유형:</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="">선택하세요</option>
                        <option value="individual">개인</option>
                        <option value="corporate">기업</option>
                    </select>
                </div>
            </form>
        </div>
    );
}
