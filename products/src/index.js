import faker from "faker";

const element = document.querySelector("#dev-products");

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  const newElement = document.createElement("div");
  newElement.append(name);
  element.appendChild(newElement);
}
