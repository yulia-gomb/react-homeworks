import './MenuPage.css';
import MenuItem from "../../components/menuItem/MenuItem";
import Button from "../../components/button/Button";
import Tooltip from "../../components/tooltip/Tooltip";
import { useEffect } from "react";
import { fetchMenuItems, setSelectedCategory, incrementVisibleItemsCount } from "../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useTheme } from "../../utils/themeContext";


const MenuPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { menuItems, loading, error, selectedCategory, visibleItemsCount } = useSelector((state: RootState) => state.menu);

    const { theme } = useTheme();
    const menuClass = theme === 'dark' ? 'menu dark-theme' : 'menu';

    useEffect(() => {
        dispatch(fetchMenuItems());
    }, [dispatch]);

    const categories = Array.from(new Set(menuItems.map(item => item.category)));

    const handleCategoryClick = (category: string) => {
        dispatch(setSelectedCategory(category));
    };

    const handleSeeMoreClick = () => {
        dispatch(incrementVisibleItemsCount());
    };

    const filteredItems = menuItems.filter(item => item.category === selectedCategory);
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
            />
        ));
    };

    return (
        <div className={menuClass}>
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
                        variant={selectedCategory === category ? 'primary' : 'secondary'}
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
