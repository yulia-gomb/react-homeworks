import './MenuPage.css';
import { useState } from "react";
import MenuItem from "../../components/menuItem/MenuItem.jsx";


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
            <p>Use our menu to place an order online, or phone our store to place a pickup order. Fast and fresh food.</p>
            <div className="categories">
                <button onClick={() => setSelectedCategory('Desert')}>Desert</button>
                <button onClick={() => setSelectedCategory('Dinner')}>Dinner</button>
                <button onClick={() => setSelectedCategory('Breakfast')}>Breakfast</button>
            </div>
            <div className="menu-items">
                {menuItems.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};


export default MenuPage
