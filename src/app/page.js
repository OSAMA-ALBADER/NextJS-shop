import Image from "next/image";
import cookieImage from "./assets/cookie.png";

export default function Home() {
  return (
    <div className="text-center">
      <h1> Cookies and Beyond </h1>
      <p> Where cookie maniacs gather</p>
      <Image src={cookieImage} className="w-full" />
    </div>
  );
}
