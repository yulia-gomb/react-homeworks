import './Footer.css';
import logoImage from '../../assets/icons/Logo.png';
import instLogo from '../../assets/icons/inst.png';
import twitterLogo from '../../assets/icons/twitter.png';
import youtubeLogo from '../../assets/icons/yt.png';


const Footer = () => {
    const footerLinks = {
        company: ["Home", "Order", "FAQ", "Contact"],
        template: ["Style Guide", "Changelog", "Licence", "Webflow University"],
        flowbase: ["More Cloneables"]
    };

        const LINK_URL = "https://www.google.com/";

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
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a href={LINK_URL} target="_blank" rel="noopener noreferrer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>TEMPLATE</h4>
                            <ul>
                                {footerLinks.template.map((link) => (
                                    <li key={link}>
                                        <a href={LINK_URL} target="_blank" rel="noopener noreferrer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>FLOWBASE</h4>
                            <ul>
                                {footerLinks.flowbase.map((link) => (
                                    <li key={link}>
                                        <a href={LINK_URL} target="_blank" rel="noopener noreferrer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Built by <a href={LINK_URL} target="_blank" rel="noopener noreferrer">Flowbase</a> · Powered by <a
                        href={LINK_URL} target="_blank" rel="noopener noreferrer">Webflow</a></p>
                    <div className="footer-social">
                        <a href={LINK_URL} target="_blank" rel="noopener noreferrer">
                            <img src={instLogo} alt="Instagram" className="social-logo" />
                        </a>
                        <a href={LINK_URL} target="_blank" rel="noopener noreferrer">
                            <img src={twitterLogo} alt="Twitter" className="social-logo" />
                        </a>
                        <a href={LINK_URL} target="_blank" rel="noopener noreferrer">
                            <img src={youtubeLogo} alt="Youtube" className="social-logo" />
                        </a>
                    </div>
                </div>
            </footer>
        );

}

export default Footer
