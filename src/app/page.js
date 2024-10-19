import Image from "next/image";
import cookieImage from "./assets/cookie.png";
import products from "./products.js";
import ItemList from "./components/ItemList";

export default function Home() {
  // console.log(products[0]);
  return (
    <div className="text-center">
      <h1> Cookies and Beyond </h1>
      <p> Where cookie maniacs gather</p>
      <Image src={cookieImage} className="w-full" />
      <ItemList products={products} name="hello" />
    </div>
  );
}
