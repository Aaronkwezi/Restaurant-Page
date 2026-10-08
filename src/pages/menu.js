import BBQchicken from "../pages/BBQchickenpizza.jpg";
import Meatzza from "../pages/Meatzaapizza.jpg";
import Pepperoni from "../pages/Pepperoni.jpg";
import SpicyChicken from "../pages/SpicyChicken.jpg";
import Veggie from "../pages/Veggie.jpg";
import Margherita from "../pages/Margherita.jpg";
import Hawaiian from "../pages/Hawaiian.jpg";
import FourCheese from "../pages/FourCheese.jpg";
export default function menu() {
    console.log("This is Menu");

    const content = document.querySelector("#content");
    content.replaceChildren();

    const pizzas = [
        {
            name: "Barbeque Chicken pizza",
            Toppings: "Chicken, onions, cheese, BBQ sauce",
            Price: "$14.99",
            image: BBQchicken,
        },
        {
            name: "Margherita",
            Toppings: "Classic tomato sauce, fresh mozzarella, and basil",
            Price: "$13.49",
            image: Margherita,
        },
        {
            name: "Pepperoni",
            Toppings: "Tomato sauce, melted mozzarella, and crispy pepperoni",
            Price: "$15.25",
            image: Pepperoni,
        },
        {
            name: "Veggie Supreme",
            Toppings: "Bell peppers, mushrooms, red onions, and olives over mozzarella and tomato sauce",
            Price: "$16.75",
            image: Veggie,
        },
        {
            name: "Hawaiian",
            Toppings: "Ham, sweet pineapple, and mozzarella on a tomato sauce base",
            Price: "$15.95",
            image: Hawaiian,
        },
        {
            name: "Four Cheese",
            Toppings: "Mozzarella, cheddar, Parmesan, and Gorgonzola",
            Price: "$17.50",
            image: FourCheese,
        },
        {
            name: "Spicy Chicken",
            Toppings: "Chicken, jalapeños, red onions, and mozzarella with hot sauce",
            Price: "$16.25",
            image: SpicyChicken,
        },
        {
            name:"Meatzza pizza",
            Toppings: "Beef, Pepperoni, chicken, bacon, mozzarella",
            Price: "$17.99",
            image: Meatzza,
        }
    ];

    const title = document.createElement("h1");
    title.textContent = "Our Menu";

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu");

    pizzas.forEach((pizza) => {
        const item = document.createElement("div");
        item.classList.add("item");
        const itemImage = document.createElement("img");
        itemImage.src = pizza.image;
        itemImage.alt = `${pizza.name} pizza`;
        itemImage.classList.add("image");

        const itemInfo = document.createElement("div");
        const itemName = document.createElement("h3");
        itemName.textContent = pizza.name;

        const itemToppings = document.createElement("p");
        itemToppings.textContent = pizza.Toppings;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Price: ${pizza.Price}`;

        itemInfo.append(itemName, itemToppings, itemPrice);
        item.append(itemImage, itemInfo);
        menuGrid.append(item);
    });

    content.append(title, menuGrid);
}