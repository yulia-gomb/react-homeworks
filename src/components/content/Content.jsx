import './Content.css'

function Content() {

    const goods = [
        {
            id: 0,
            name: "Laptop",
            brand: "Dell",
            price: 799,
            features: ["16GB RAM", "512GB SSD", "Intel i7"],
            inStock: true
        },
        {
            id: 1,
            name: "Smartphone",
            brand: "Apple",
            price: 999,
            features: ["128GB Storage", "A14 Chip", "5G Enabled"],
            inStock: false
        },
        {
            id: 2,
            name: "Headphones",
            brand: "Sony",
            price: 199,
            features: ["Noise Cancelling", "Wireless", "20-hour battery life"],
            inStock: true
        },
    ];


    return (
        <div className="item-list">
            <h1>Items List</h1>
            <ul>
                {goods.map((item) => (
                    <li key={item.id} className="item">
                        <h2>{item.name}</h2>
                        <p><strong>Brand:</strong> {item.brand}</p>
                        <p><strong>Price:</strong> ${item.price}</p>
                        <p><strong>Features:</strong></p>
                        <ol>
                            {item.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>{feature}</li>
                            ))}
                        </ol>
                        <p className={item.inStock ? 'in-stock' : 'out-of-stock'}>
                            <strong>In Stock:</strong> {item.inStock ? 'Yes' : 'No'}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content




