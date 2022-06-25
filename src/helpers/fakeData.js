const products = [
  {
    id: 1,
    title: "Cheese Pizza",
    price: "8",
    imgURL:
      "https://res.cloudinary.com/dmdb70sed/image/upload/v1655431548/pizzas/pizza1_xdtz7r.jpg",
  },
  {
    id: 2,
    title: "Mozarella Pizza",
    price: "9",
    imgURL:
      "https://res.cloudinary.com/dmdb70sed/image/upload/v1655431549/pizzas/pizza2_v7cxwn.jpg",
  },
  {
    id: 3,
    title: "Eggified Pizza",
    price: "10",
    imgURL:
      "https://res.cloudinary.com/dmdb70sed/image/upload/v1655431550/pizzas/pizza2_y0xohk.jpg",
  },
  {
    id: 4,
    title: "Extra Cheese Pizza",
    price: "11",
    imgURL:
      "https://res.cloudinary.com/dmdb70sed/image/upload/v1655431556/pizzas/pizza4_vk91za.jpg",
  },
];
export function getAllProducts() {
  return products;
}
export default products;
