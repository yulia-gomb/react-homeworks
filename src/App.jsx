import './App.css';
import Header from "./components/header/Header.jsx";
import Content from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: {},
        };
    }

    handleAddToCart = (itemId, quantity) => {
        this.setState(prevState => {
            const cartItems = { ...prevState.cartItems };
            cartItems[itemId] = (cartItems[itemId] || 0) + quantity;
            console.log(cartItems);
            return { cartItems };
        });
    };

    getCartCount = () => {
        const { cartItems } = this.state;
        return Object.values(cartItems).reduce((total, count) => total + count, 0);
    };

    render() {
        const { cartItems } = this.state;
        const cartCount = this.getCartCount();

        return (
            <div>
                <Header cartCount={cartCount} />
                <Content onAddToCart={this.handleAddToCart} />
                <Footer />
            </div>
        );
    }
}

export default App;
