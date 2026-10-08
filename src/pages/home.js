import pizzaImage from "../pages/ServicesImage(pizza).jpg";
import BBQchicken from "../pages/BBQchickenpizza.jpg";
import Meatzza from "../pages/Meatzaapizza.jpg";
export default function home(){
    console.log("This is Aaron");

    const content = document.querySelector("#content");
    content.replaceChildren();

    const title = document.createElement("h1");
    title.textContent = "Welcome to Kwezi's Pizza";

    const services = document.createElement("div");
    const serviceDesc = document.createElement("p");
    const serviceImg = document.createElement("img");
    serviceImg.classList.add("service-image");
    serviceImg.src = pizzaImage;
    serviceImg.alt = "Freshly baked pizza";
    serviceDesc.textContent = "At our pizza place, every slice starts with freshly made dough, rich tomato sauce, and bubbling mozzarella. From classic Margherita to fully loaded favorites, our pizzas are baked until golden and served hot. Bring your friends, grab a slice, and make yourself at home.";

    const recommended = document.createElement("div");
    recommended.classList.add("recommended");
    const option1 = document.createElement("div");
    const option1Img = document.createElement("img");
    option1Img.classList.add("recommended-image");
    option1Img.src = BBQchicken;
    option1Img.alt = "Fresh BBQ chicken Pizza";
    const option1Desc = document.createElement("div");
    const option1detail = document.createElement("p");
    option1detail.textContent = "BBQ chicken pizza";
    const option1price = document.createElement("p");
    option1price.textContent = "$14.99";
    option1Desc.append(option1detail,option1price);
    option1.append(option1Img,option1Desc);

    const option2 = document.createElement("div");
    const option2Img = document.createElement("img");
    option2Img.classList.add("recommended-image");
    option2Img.src = Meatzza;
    option2Img.alt = "Fresh Meatzza Pizza";
    const option2Desc = document.createElement("div");
    const option2detail = document.createElement("p");
    option2detail.textContent = " Meatzza pizza";
    const option2price = document.createElement("p");
    option2price.textContent = "$17.99";
    option2Desc.append(option2detail,option2price);
    option2.append(option2Img,option2Desc);

    recommended.append(option1,option2);
    services.append(serviceImg);
    services.append(serviceDesc);
    content.append(title);
    content.append(services);
    content.append(recommended);
}