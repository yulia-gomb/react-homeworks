import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/store';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </StrictMode>
);
