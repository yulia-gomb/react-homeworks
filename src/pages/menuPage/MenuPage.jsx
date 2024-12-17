import './MenuPage.css';
import MenuItem from "../../components/menuItem/MenuItem.tsx";
import Button from "../../components/button/Button.tsx";
import Tooltip from "../../components/tooltip/Tooltip.tsx";
import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../utils/useFetch.ts";

const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";

const MenuPage = ({ onAddToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [visibleItemsCount, setVisibleItemsCount] = useState(6);

    const fetchOptions = useMemo(() => ({
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }), []);

    const { data: menuItems, loading, error } = useFetch(API_URL, fetchOptions);

    const categories = menuItems ? Array.from(new Set(menuItems.map(item => item.category))) : [];

    useEffect(() => {
        if (menuItems && menuItems.length > 0 && !selectedCategory) {
            setSelectedCategory(categories[0]);
        }
    }, [menuItems, categories, selectedCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setVisibleItemsCount(6);
    };

    const handleSeeMoreClick = () => {
        setVisibleItemsCount(prevCount => prevCount + 6);
    };

    const filteredItems = menuItems ? menuItems.filter(item => item.category === selectedCategory) : [];
    const itemsToShow = filteredItems.slice(0, visibleItemsCount);
    const isSeeMoreVisible = filteredItems.length > visibleItemsCount;

    const renderMenuItems = () => {
        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Error: {error}</p>;
        }

        if (itemsToShow.length === 0) {
            return <p>No items available for this category.</p>;
        }

        return itemsToShow.map(item => (
            <MenuItem
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
            />
        ));
    };

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
                {renderMenuItems()}
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
