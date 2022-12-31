import Link from 'next/link'
import React from 'react'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const Checkout = ({cart,subTotal,addToCart,removeFromCart}) => {
  return (
    <div className='mx-auto px-8 container mt-[100px]'>
      <h1 className='text-center  font-bold text-2xl'>Checkout</h1>
      <h2 className='text-md mt-5 font-semibold'>1.Delivary details</h2>
      <div className='mx-auto flex'>
        <div className='w-1/2 px-2 mt-4'>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='w-1/2 px-2 mt-4'>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className=' px-2 mt-4'>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Address</label>
          <textarea name="address" id="address" cols="30" rows="2" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>
      <div className='mx-auto flex'>
        <div className='w-1/2 px-2 mt-4'>
          <div class="relative mb-4">
            <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='w-1/2 px-2 mt-4'>
          <div class="relative mb-4">
            <label for="city" class="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h2 className='text-md mt-5 font-semibold'>2. Review Cart Item and Pay</h2>
      <div className="p-10  bg-indigo-100  sidecart">
        
        <ol className="list-decimal">
          {
            Object.keys(cart).length === 0 && <span>Cart is Empty.</span>
          }
          {
            Object.keys(cart).map((k) => {
              return <li key={k}>
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
        
      </div>
      <div className="m-4">
        <Link href={'/'}><button className="flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Pay ${subTotal}</button></Link>
      </div>
    </div>
  )
}

export default Checkout