import './MenuPage.css';
import MenuItem from "../../components/menuItem/MenuItem";
import Button from "../../components/button/Button";
import Tooltip from "../../components/tooltip/Tooltip";
import { useEffect, useMemo, useState } from "react";
import useFetch from "../../utils/useFetch";

const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";

interface MenuItemType {
    id: string;
    meal: string;
    category: string;
    img: string;
    price: number;
    instructions: string;
}

type MenuPageProps = {
    onAddToCart: (itemId: string, quantity: number) => void;
};


const MenuPage = ({ onAddToCart }: MenuPageProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [visibleItemsCount, setVisibleItemsCount] = useState<number>(6);

    const fetchOptions = useMemo(() => ({
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }), []);

    const { data: menuItems, loading, error } = useFetch<MenuItemType[]>(API_URL, fetchOptions);

    const categories: string[] = useMemo(() => {
        return menuItems ? Array.from(new Set(menuItems.map(item => item.category))) : [];
    }, [menuItems]);

    useEffect(() => {
        if (menuItems && menuItems.length > 0 && !selectedCategory) {
            setSelectedCategory(categories[0]);
        }
    }, [menuItems, categories, selectedCategory]);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setVisibleItemsCount(6);
    };

    const handleSeeMoreClick = () => {
        setVisibleItemsCount(prevCount => prevCount + 6);
    };

    const filteredItems = menuItems?.filter(item => item.category === selectedCategory) || [];
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


export default MenuPage;
