import './NotFoundPage.css';
import { Link } from "react-router-dom";


const NotFoundPage = () => {

    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Page not found.</p>
            <Link to="/" className="home-link">Go back to Home</Link>
        </div>
    );
};

export default NotFoundPage;
