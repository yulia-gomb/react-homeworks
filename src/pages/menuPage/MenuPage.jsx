import './MenuPage.css';
import { useState } from "react";
import MenuItem from "../../components/menuItem/MenuItem.jsx";
import Button from "../../components/button/Button.jsx";
import Tooltip from "../../components/tooltip/Tooltip.jsx";


const menuItems = [
    {
        id: 0,
        name: "Burger Dreams",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 9.20,
        image: "src/assets/images/burger-1.png",
    },
    {
        id: 1,
        name: "Burger Waldo",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 10.00,
        image: "src/assets/images/burger-2.png",
    },
    {
        id: 2,
        name: "Burger Cali",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 8.00,
        image: "src/assets/images/burger-3.png",
    },
    {
        id: 3,
        name: "Burger Bacon Buddy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 9.99,
        image: "src/assets/images/burger-4.png",
    },
    {
        id: 4,
        name: "Burger Spicy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 9.20,
        image: "src/assets/images/burger-5.png",
    },
    {
        id: 5,
        name: "Burger Classic",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 8.20,
        image: "src/assets/images/burger-6.png",
    },
];

const MenuPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Desert');

    return (
        <div className="menu">
            <h1>Browse our menu</h1>
            <p>Use our menu to place an order online, or <Tooltip text="phone" tooltipText="+1-234-567-8901" /> our store to place a pickup order. Fast and fresh food.</p>
            <div className="categories">
                <Button label="Desert" onClick={() => setSelectedCategory('Desert')} variant="primary" />
                <Button label="Dinner" onClick={() => setSelectedCategory('Dinner')} variant="secondary" />
                <Button label="Breakfast" onClick={() => setSelectedCategory('Breakfast')} variant="secondary" />
            </div>
            <div className="menu-items">
                {menuItems.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
            <Button label="See more" onClick={() => console.log('See more clicked')} variant="primary" />
        </div>
    );
};


export default MenuPage
