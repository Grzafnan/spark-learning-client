import React, { useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { toast } from 'react-toastify';
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user, updateProfileName } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");


  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const updateUser = () => {
    updateProfileName(name, photo)
      .then((result) => {
        // Profile updated!
        toast.success("Update successful");
        setIsOpen(false);
      })
      .catch((error) => {
        // An error occurred
        console.error(error.message);
        // ...
      })
  }


  return (
    <div className=" my-10">
      <div className="  w-3/4  mx-auto">
        <div className="w-full md:w-3/5 lg:w-2/5 p-4 sm:p-6 lg:ml-4 lg:p-8 bg-white shadow-md">
          <div className="flex justify-between">
            <span className="text-xl font-semibold block">User Profile</span>

            <>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={openModal}
                  className=" bg-blue-500 px-4 py-2 text-sm  text-white  focus-visible:ring-2  focus-visible:ring-opacity-75 text-md font-bold  rounded-full  hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>

              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Profile Update
                          </Dialog.Title>
                          <div className="mt-2">
                            <div className="col-span-full sm:col-span-3">
                              <label htmlFor="name" className="text-md">
                                Change Name
                              </label>
                              <input
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="w-full  rounded-md  focus:ring-blue-600 py-2 border border-blue-600 mt-1 mb-2 pl-2  text-gray-900"
                              />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                              <label htmlFor="photoURL" className="text-md">
                                Update PhotoURL
                              </label>
                              <input
                                onChange={(e) => setPhoto(e.target.value)}
                                name="PhotoURL"
                                type="text"
                                placeholder="photoURL"
                                className="w-full  rounded-md  focus:ring-blue-600 py-2 border border-blue-600 mt-1 mb-2 pl-2  text-gray-900"
                              />
                            </div>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={updateUser}
                            >
                              Update
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </>
          </div>

          <span className="text-gray-600">
            This information is secret so be careful
          </span>
          <div className="w-full p-8 mx-2 flex justify-center">
            <img
              id="showImage"
              className="max-w-xs rounded-[50%] w-32 items-center border"
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://i.ibb.co/4frmjYF/240-F-287771298-jiu7ut-EUPIhd42en-PJeu-Wi-UR07-DGWx-M5-Cropped.png"
              }
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 lg:w-2/5 bg-white lg:ml-4 shadow-md">
          <div className="rounded  shadow p-6">
            <div className="pb-6">
              <label
                htmlFor="id"
                className="font-semibold text-gray-700 block pb-1"
              >
                id
              </label>
              <div className="flex">
                <p
                  id="username"
                  className="border-1  rounded-r px-4 py-2 w-full"
                >
                  {user?.uid}
                </p>
              </div>
            </div>
            <div className="pb-6">
              <label
                htmlFor="name"
                className="font-semibold text-gray-700 block pb-1"
              >
                Name
              </label>
              <div className="flex">
                <p
                  id="username"
                  className="border-1  rounded-r px-4 py-2 w-full"
                >
                  {user?.displayName}
                </p>
              </div>
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1"
              >
                Email
              </label>
              <p
                readOnly
                id="email"
                className="border-1  rounded-r px-4 py-2 w-full"
              >
                {user?.email}
              </p>
              <span className="text-gray-600 pt-4 block opacity-70">
                Personal login information of your account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;