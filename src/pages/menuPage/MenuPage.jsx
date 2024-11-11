import './MenuPage.css';
import MenuItem from "../../components/menuItem/MenuItem.jsx";
import Button from "../../components/button/Button.jsx";
import Tooltip from "../../components/tooltip/Tooltip.jsx";
import { Component } from "react";

const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";

class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null,
            menuItems: [],
            categories: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        this.fetchMenuItems();
    }

    fetchMenuItems = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();

            const categories = Array.from(new Set(data.map(item => item.category)));

            this.setState({
                menuItems: data,
                categories: categories,
                selectedCategory: categories[0],
                loading: false
            });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };

    handleCategoryClick = (category) => {
        this.setState({ selectedCategory: category });
    };

    handleSeeMoreClick = () => {
        console.log('See more clicked');
    };

    render() {
        const { selectedCategory, menuItems, categories, loading, error } = this.state;

        return (
            <div className="menu">
                <h1>Browse our menu</h1>
                <p>
                    Use our menu to place an order online, or <Tooltip text="phone" tooltipText="+1-234-567-8901"/> our
                    store to place a pickup order. Fast and fresh food.
                </p>
                <div className="categories">
                    {categories.map((category, index) => (
                        <Button
                            key={index}
                            label={category}
                            onClick={() => this.handleCategoryClick(category)}
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
                        menuItems
                            .filter(item => item.category === selectedCategory)
                            .map(item => (
                                <MenuItem key={item.id} item={item} />
                            ))
                    )}
                </div>
                <Button label="See more" onClick={this.handleSeeMoreClick} variant="primary"/>
            </div>
        );
    }
}


export default MenuPage
