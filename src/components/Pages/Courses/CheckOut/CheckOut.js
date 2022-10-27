import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckOut = () => {
  const course = useLoaderData();
  const { title, price, level, image_url, rating } = course;

  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const cardNumber = form.cardNo.value;
    const cardDate = form.cardDate.value;
    const cardCVC = form.cardCVC.value;

    form.reset();
    navigate('/')
    toast.success('Course purchase successfully completed', { autoClose: 500 })
  }



  return (
    <div className="flex justify-center items-center  dark:text-white dark:bg-[#2e2e2e]">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <Link to='/courses' title='Courses'>
              <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm leading-none">Back</p>
              </button>
            </Link>
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Checkout</p>

          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center  dark:text-white dark:bg-[#2e2e2e] bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
              <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-xl md:text-2xl leading-normal text-gray-800">{title}</p>
                <p className="text-base font-semibold leading-none text-gray-600">${price}</p>
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <img src={image_url} alt="headphones" />
              </div>
            </div>

            <form onSubmit={handelSubmit} className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">

              <div className="flex flex-row justify-center items-center mt-6">
                <hr className="border w-full" />
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">Pay with card</p>
                <hr className="border w-full" />
              </div>

              <div className="mt-8">
                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name='email' placeholder="Email" required />
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
              <div className="mt-2 flex-col">
                <div>
                  <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" name='cardNo' type="text" placeholder="0000 1234 6549 15151" required />
                </div>
                <div className="flex-row flex">
                  <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name='cardDate' placeholder="MM/YY" />
                  <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" name='cardCVC' type="text" placeholder="CVC" />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
              <div className="mt-2 flex-col">
                <div>
                  <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name='name' placeholder="Name on card" />
                </div>
              </div>
              <button type='submit' className="mt-8 border border-transparent hover:border-gray-300 bg-blue-600 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                <div>
                  <p className="text-base leading-4">Pay ${price}</p>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;