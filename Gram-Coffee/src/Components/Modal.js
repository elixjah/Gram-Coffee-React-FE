import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-200 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold"> Register </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-10 w-10 text-xl">
                      x 
                    </span>
                  </button>
                </div>
                <div className="bg-white-100 shadow-md rounded pt-10 pb-10 px-10">
                  <form className="bg-yellow-600 shadow-md rounded px-10 pt-10 pb-10 text-left">
                    <label className="block text-white text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input placeholder="First Name" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input placeholder="Last Name" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white text-sm font-bold mb-1">
                      Email
                    </label>
                    <input type="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white text-sm font-bold mb-1">
                      Password
                    </label>
                    <input type="password" placeholder="Password"className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white text-sm font-bold mb-1">
                      Confirm Password
                    </label>
                    <input type="password" placeholder="Re-type Password" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white text-sm font-bold mb-1">
                      Address
                    </label>
                    <input placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white text-sm font-bold mb-1">
                      Contact number
                    </label>
                    <input type="tel" placeholder="Contact Number" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-black bg-white active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
 