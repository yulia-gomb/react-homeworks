import './LoginPage.css';
import Button from "../../components/button/Button";
import React, { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setErrors, resetForm, loginSuccess } from "../../store/loginSlice";
import { RootState } from "../../store/store";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const formData = useSelector((state: RootState) => state.login.formData);
    const errors = useSelector((state: RootState) => state.login.errors);
    const redirectTo = location.state?.from?.pathname || "/menu";

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        dispatch(setFormData({ name, value }));
    };

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();

        const newErrors = {
            username: formData.username.trim() ? '' : 'User name is required.',
            password: formData.password.trim() ? '' : 'Password is required.',
        };

        if (newErrors.username || newErrors.password) {
            dispatch(setErrors(newErrors));
        } else {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userExists = users.some((user: { username: string }) => user.username === formData.username);

            if (!userExists) {
                const newUser = { ...formData };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                console.log('New user added:', newUser);
            } else {
                console.log('User already exists');
            }

            dispatch(loginSuccess(formData.username));
            navigate(redirectTo, { replace: true });
        }
    };

    const handleCancel = (): void => {
        dispatch(resetForm());
    };

    return (
        <div className="login-container">
            <h1 className="title">Log in</h1>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
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
                    <span className="error-text">{errors.username}</span>

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
                    <span className="error-text">{errors.password}</span>

                    <div className="form-actions">
                        <Button label="Submit" onClick={handleSubmit} variant="primary"/>
                        <Button label="Cancel" onClick={handleCancel} variant="secondary"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
