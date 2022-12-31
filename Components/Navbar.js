import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {


  const ref = useRef()

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  return (
    <div className="bg-white px-3 w-full shadow-md fixed top-0 z-10">
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href='/tshirt' className="mr-5 hover:text-gray-900">T-shirts</Link>
            <Link href='/hoodies' className="mr-5 hover:text-gray-900">Hoodies</Link>
            <Link href='/mugs' className="mr-5 hover:text-gray-900">Mugs</Link>
            <Link href='/caps' className="mr-5 hover:text-gray-900">Caps</Link>
          </nav>
          <div onClick={toggleCart} className="cursor-pointer">
            <AiOutlineShoppingCart className="text-3xl" />
          </div>

          <div ref={ref} className={`absolute w-80 h-[100vh] transform top-0 right-0 p-10 transition-transform bg-indigo-100 sidecart ${Object.keys(cart).length !== 0 ? 'translate-x-0' :'translate-x-full'}`}>
            <h2 className="pb-6 text-xl font-semibold">
              Shopping Cart
            </h2>
            <span onClick={toggleCart} className="absolute cursor-pointer top-2 right-2"><AiFillCloseCircle /></span>
            <ol className="list-decimal">
            {
                Object.keys(cart).length === 0 && <span>Cart is Empty.</span>
            }
              {
                Object.keys(cart).map((k)=>{return <li key={k}>
                    <div className="flex gap-6">
                      <span>{cart[k].name}</span>
                      <div className="flex gap-1 items-center">
                      <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="cursor-pointer" /><span className="">{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="cursor-pointer" />
                      </div>
                    </div>
                  </li>
                })
              }
            </ol>
            <span className='my-8 inline-block'>Subtotal: ${subTotal}</span>

            <div className="flex">
              <Link href={'/checkout'}><button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Checkout</button></Link>
              <button onClick={clearCart} className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Clear Cart</button>
            </div>
          </div>


        </div>
      </header>
    </div>
  );
};

export default Navbar;
