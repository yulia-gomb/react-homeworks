import './Footer.css';
import logoImage from '../../assets/icons/Logo.png';
import instLogo from '../../assets/icons/inst.png';
import twitterLogo from '../../assets/icons/twitter.png';
import youtubeLogo from '../../assets/icons/yt.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={logoImage} alt="Logo" className="footer-logo" />
                    <p>Takeaway & Delivery template for small - medium businesses.</p>
                </div>
                <div className="footer-right">
                    <div className="footer-column">
                        <h4>COMPANY</h4>
                        <ul>
                            <li>Home</li>
                            <li>Order</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>TEMPLATE</h4>
                        <ul>
                            <li>Style Guide</li>
                            <li>Changelog</li>
                            <li>Licence</li>
                            <li>Webflow University</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>FLOWBASE</h4>
                        <ul>
                            <li>More Cloneables</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Built by <a href="#!">Flowbase</a> · Powered by <a href="#!">Webflow</a></p>
                <div className="footer-social">
                    <a href="#!"><img src={instLogo} alt="Instagram" className="social-logo"/></a>
                    <a href="#!"><img src={twitterLogo} alt="Twitter" className="social-logo"/></a>
                    <a href="#!"><img src={youtubeLogo} alt="Youtube" className="social-logo"/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer
