import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartReg } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSol } from "@fortawesome/free-solid-svg-icons";
import Gundam1 from "/img/Gundam1.jpg";
import Gundam2 from "/img/Gundam2.jpg";
import Gundam3 from "/img/Gundam3.jpg";
import "./App.css";

function App() {
  const [quant, setQuant] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const addedWishlist = () => {
    setWishlist(!wishlist);
  };

  const handleIncrement = () => {
    setQuant((prevQuant) => prevQuant + 1);
  };

  const handleDecrement = () => {
    setQuant((prevQuant) => Math.max(prevQuant - 1, 1));
  };

  const Product = ({ title, ogprice, newprice, discount, serial, rating }) => {
    const productImages = [Gundam1, Gundam2, Gundam3];

    return (
      <main className="flex w-11/12 m-auto">
        <div className="flex">
          <div className="flex gap-4 items-top">
            <div className="flex flex-col gap-4">
              <img
                src={productImages[0]}
                onClick={(e) => setCurrentImg(0)}
                className="min-w-24 max-w-24 cursor-pointer"
              ></img>
              <img
                src={productImages[1]}
                onClick={(e) => setCurrentImg(1)}
                className="min-w-24 max-w-24 cursor-pointer"
              ></img>
              <img
                src={productImages[2]}
                onClick={(e) => setCurrentImg(2)}
                className="min-w-24 max-w-24 cursor-pointer"
              ></img>
            </div>
          </div>
          <img src={productImages[currentImg]} className="min-w-[400px]"></img>
        </div>

        <div id="textarea" className="text-left mx-5">
          <h1 id="product-title" className="text-xl">
            {title}
          </h1>

          <div id="price" className="flex items-center space-x-2">
            <h2 id="og-price" className="line-through text-slate-500">
              ${ogprice}
            </h2>
            <h2 id="new-price" className="text-lg">
              ${newprice}
            </h2>
            <h3 id="discount" className="text-xs text-red-500 font-bold">
              {discount}% OFF
            </h3>
          </div>

          <p id="serial" className="text-slate-500 text-xs">
            Sku: {serial}
          </p>

          <button
            id="wishlist"
            onClick={addedWishlist}
            className="text-xs hover:text-slate-800"
          >
            {wishlist ? (
              <FontAwesomeIcon icon={faHeartSol} />
            ) : (
              <FontAwesomeIcon icon={faHeartReg} />
            )}
            {wishlist ? " ADDED TO WISHLIST" : " ADD TO WISHLIST"}
          </button>

          <p className="text-xs text-slate-500 py-1">Quantity</p>

          <div className="flex items-center py-1">
            <button
              onClick={handleDecrement}
              className="px-4 py-1 border rounded-l-2xl"
            >
              −
            </button>
            <p className="px-4 py-1 border">{quant}</p>
            <button
              onClick={handleIncrement}
              className="px-4 py-1 border rounded-r-2xl"
            >
              +
            </button>
          </div>

          <button
            id="add-cart"
            className="px-8 py-2 my-3 border border-transparent bg-sky-500 hover:bg-sky-600 rounded-2xl text-xs text-white"
          >
            ADD TO CART
          </button>
        </div>
      </main>
    );
  };

  return (
    <Product
      title="HGUC 1-144 #191 RX-78-2 Gundam"
      ogprice="16.99"
      newprice="12.99"
      discount="24"
      serial="5057403"
    />
  );
}
export default App;
