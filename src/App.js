import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  var arr= []
  const [cart, setcart] = useState([]);
  const [view, setview] = useState(0);
  function addToCart(id) {
    const arr = [];
    // arr.push(id)
    cart.map((item) => {
      arr.push(item);
    });
    arr.push(id);
    setcart(arr);
    console.log("id", cart);
  }

  function deleteCart() {
    setcart([]);
  }

  const images = [
    {
      id: 1,
      name: "flower",
      imageSource:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
      imagePrice: 100,
      selected: false,
    },
    {
      id: 2,
      name: "flower",
      imageSource:
        "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg",
      imagePrice: 100,
      selected: false,
    },
    {
      id: 3,
      name: "flower",
      imageSource:
        "https://share-cdn-prod.azureedge.net/wp-content/uploads/2015/02/UPMC_Flowers_BT_C1.png.webp",
      imagePrice: 100,
      selected: false,
    },
    {
      id: 4,
      name: "flower",
      imageSource:
        "https://post.healthline.com/wp-content/uploads/2020/08/edible-flowers-1200x628-facebook-1200x628.jpg",
      imagePrice: 100,
      selected: false,
    },
    {
      id: 5,
      name: "flower",
      imageSource:
        "https://eletiofe.com/wp-content/uploads/2023/02/352191-4-best-online-flower-delivery-services-2023-sustainable-and-dried-flowers.jpg",
      imagePrice: 100,
      selected: false,
    },
  ];
  return (
    <div className=" w-screen bg-black">
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
         
          <span className="ml-3 text-xl"><span className='text-green-500'> P</span>F</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white">Home</a>
          <a className="mr-5 hover:text-white" onClick={() => setview(0)}>
            Pictures
          </a>
          <a className="mr-5 hover:text-white" onClick={() => setview(1)}>
            Cart
          </a>
          <a className="mr-5 hover:text-white">About Us</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none  hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
    <div className="p-10 flex flex-col justify-center ">
      <h1 className="text-4xl text-white text-center">
        Welcome to <span className="font-semibold text-green-600">Photo</span>{" "}
        Flower{" "}
      </h1>
      <button className="bg-green-400 w-[50%]  mx-auto mt-5 hover:bg-green-700 text-white font-bold sm:py-1 sm:px-4 lg:py-2 lg:px-2 border border-green-700 rounded sm:w-[50%] lg:w-[20%]" onClick={()=>setview(0)}>
        Pictures
      </button>
      {view == 0 && (
        <div>
          <section className="text-gray-600 body-font grid grid-cols-4 mt-28">
            {images.map((item) => (
              <div className="container mx-auto">
                <div className="flex flex-wrap ">
                  <div className="p-4 ">
                    <div className="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src={item.imageSource}
                      />
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-white">
                          {item.name}
                        </h2>

                        <p className="mb-4">₹{item.imagePrice}</p>
                        {!item.selected && (
                          <button
                            className=" w-[100%]  mx-auto mt-2 hover:bg-sky-700 text-white font-bold sm:py-1 sm:px-4 lg:py-2 lg:px-2 border-2  border-sky-700 rounded sm:w-[50%] lg:w-[70%]"
                            onClick={() => {
                              addToCart(item);
                            }}
                          >
                            Add To Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}

      {/* cart */}

      {view == 1 && (
        <div className="min-h-screen">
          <h1 className="text-4xl text-white text-center mt-28">Your Cart</h1>
          {console.log("arr", cart)}
          {cart.length == 0 && (
            <div className="text-xl text-white text-center mt-28">
              {console.log(arr)}
              Your Cart is empty please select items to proceed
            </div>
          )}
          {cart.length != 0 && (
            <div>
              <section className="text-gray-600 body-font grid grid-cols-4 mt-28">
              {cart.map((item) => (
                <div className="container mx-auto">
                  <div className="flex flex-wrap ">
                    <div className="p-4 ">
                      <div className="h-full flex flex-col items-center text-center">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                          src={item.imageSource}
                        />
                        <div className="w-full">
                          <h2 className="title-font font-medium text-lg text-white">
                            {item.name}
                          </h2>

                          <p className="mb-4">₹{item.imagePrice}</p>
                          {!item.selected && (
                            <button
                              className=" w-[100%]  mx-auto mt-2 hover:bg-sky-700 text-white font-bold sm:py-1 sm:px-4 lg:py-2 lg:px-2 border-2  border-sky-700 rounded sm:w-[50%] lg:w-[70%]"
                              onClick={() => {
                                addToCart(item);
                              }}
                            >
                              Add To Cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            <button className="bg-green-400 w-[50%]  mx-auto mt-5 hover:bg-green-700 text-white font-bold sm:py-1 sm:px-4 lg:py-2 lg:px-2 border border-green-700 rounded sm:w-[50%] lg:w-[20%]" onClick={()=>{deleteCart()}}>
        Pay
      </button>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
  );
}

export default App;
