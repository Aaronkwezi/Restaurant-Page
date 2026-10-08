export default function about(){
    console.log("This is Kwezi");

    const content = document.querySelector("#content");
    content.replaceChildren();

    const contact = document.createElement("div");
    const contacttitle = document.createElement("h3");
    contacttitle.textContent = "Contact Info";
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent="Phone: 888-431-1245"
    const email = document.createElement("p");
    contact.append(contacttitle,phoneNumber,email);
    email.textContent = "Email: kwezispizza@gmail.com";
    const deliveryInfo = document.createElement("div");
    const deliverytitle = document.createElement("h3");
    deliverytitle.textContent = "Delivery Info";
    const deliveryAddress = document.createElement("p");
    deliveryAddress.textContent = "Address: 123drive, Big City, BigState, 12345";
    deliveryInfo.append(deliverytitle,deliveryAddress);
    content.append(contact,deliveryInfo);


}