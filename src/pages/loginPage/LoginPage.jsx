import './LoginPage.css';
import Button from "../../components/button/Button.jsx";



const LoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted");
    };

    const handleCancel = () => {
        console.log("Login canceled");
    };

    return (
        <div className="login-container">
            <h1 className="title">Log in</h1>
            <div className="form-wrapper">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="username" className="label">User name</label>
                        <input
                            type="text"
                            id="username"
                            className="input"
                            placeholder="UserName"
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="input"
                            placeholder="************"
                            required
                        />
                    </div>
                    <div className="button-row">
                        <Button label="Submit" onClick={handleSubmit} variant="primary" />
                        <Button label="Cancel" onClick={handleCancel} variant="secondary" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
