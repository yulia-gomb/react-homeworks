import './MenuPage.css';
import MenuItem from "../../components/menuItem/MenuItem.jsx";
import Button from "../../components/button/Button.jsx";
import Tooltip from "../../components/tooltip/Tooltip.jsx";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";


const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";

const MenuPage = ({ onAddToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleItemsCount, setVisibleItemsCount] = useState(6);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                const data = await response.json();

                const uniqueCategories = Array.from(new Set(data.map(item => item.category)));

                setMenuItems(data);
                setCategories(uniqueCategories);
                setSelectedCategory(uniqueCategories[0]);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setVisibleItemsCount(6);
    };

    const handleSeeMoreClick = () => {
        setVisibleItemsCount(prevCount => prevCount + 6);
    };

    const filteredItems = menuItems.filter(item => item.category === selectedCategory);
    const itemsToShow = filteredItems.slice(0, visibleItemsCount);
    const isSeeMoreVisible = filteredItems.length > visibleItemsCount;

    return (
        <div className="menu">
            <h1>Browse our menu</h1>
            <p>
                Use our menu to place an order online, or <Tooltip text="phone" tooltipText="+1-234-567-8901" /> our
                store to place a pickup order. Fast and fresh food.
            </p>
            <div className="categories">
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        label={category}
                        onClick={() => handleCategoryClick(category)}
                        variant={selectedCategory === category ? "primary" : "secondary"}
                    />
                ))}
            </div>
            <div className="menu-items">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    itemsToShow.map(item => (
                        <MenuItem
                            key={item.id}
                            item={item}
                            onAddToCart={onAddToCart}
                        />
                    ))
                )}
            </div>
            {isSeeMoreVisible && (
                <Button label="See more" onClick={handleSeeMoreClick} variant="primary" />
            )}
        </div>
    );
};

MenuPage.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
};

export default MenuPage;
