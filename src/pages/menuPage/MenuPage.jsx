import './MenuPage.css'

function MenuPage() {

    const goods = [
        {
            id: 0,
            name: "Burger Dreams",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 9.20,
            image: "",
        },
        {
            id: 1,
            name: "Burger Waldo",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 10.00,
            image: "",
        },
        {
            id: 2,
            name: "Burger Cali",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 8.00,
            image: "",
        },
        {
            id: 3,
            name: "Burger Bacon Buddy",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 9.99,
            image: "",
        },
        {
            id: 4,
            name: "Burger Spicy",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 9.20,
            image: "",
        },
        {
            id: 5,
            name: "Burger Classic",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 8.20,
            image: "",
        },

    ];

    return (
        <div className="item-list">
            <h1>Items List</h1>
            <ul>
                {goods.map((item) => (
                    <li key={item.id} className="item">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>$ {item.price} USD</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuPage
