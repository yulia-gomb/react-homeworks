import './LoginPage.css';
import Button from "../../components/button/Button.jsx";
import { useState } from "react";


const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (value.trim() !== '') {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.username.trim()) {
            newErrors.username = 'User name is required.';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('Form submitted:', formData);
        }
    };

    const handleCancel = () => {
        setFormData({ username: '', password: '' });
        setErrors({ username: '', password: '' });
    };

    return (
        <div className="login-container">
            <h1 className="title">Log in</h1>
            <div className="form-wrapper">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-field">
                        <label htmlFor="username" className="label">User name</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="input"
                            placeholder="UserName"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="error-container">
                        <span className={`error-text ${errors.username ? '' : 'hidden'}`}>
                            {errors.username || 'Placeholder'}
                        </span>
                    </div>

                    <div className="form-field">
                        <label htmlFor="password" className="label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="input"
                            placeholder="************"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="error-container">
                        <span className={`error-text ${errors.password ? '' : 'hidden'}`}>
                            {errors.password || 'Placeholder'}
                        </span>
                    </div>

                    <div className="form-actions">
                        <Button label="Submit" onClick={handleSubmit} variant="primary" />
                        <Button label="Cancel" onClick={handleCancel} variant="secondary" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
