import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const comments = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userComment, setUserComment] = useState("");

  const notifySuccess = () =>
    toast.success("Message bien envoyé merci pour votre retour", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const postForm = async (e) => {
    try {
      e.preventDefault();
      await axios.post(
        `http://localhost:3000/api/comments`,
        {
          firstName: userFirstName,
          lastName: userLastName,
          email: userEmail,
          phoneNumber: userPhone,
          subject: userSubject,
          comment: userComment,
        },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      setUserFirstName("");
      setUserLastName("");
      setUserEmail("");
      setUserPhone("");
      setUserSubject("");
      setUserComment("");
      notifySuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-10 text-shadow-md">
      <h1 className="sticky mx-8 mb-20 text-3xl text-center border-b-2 mt-60 backdrop-blur-sm text-large s">
        Contact
      </h1>
      <form
        onSubmit={(e) => {
          postForm(e);
        }}
        className="w-8/12 m-auto text-center"
      >
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={userFirstName}
              onChange={(e) => {
                setUserFirstName(e.target.value);
              }}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <p className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </p>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={userLastName}
              onChange={(e) => {
                setUserLastName(e.target.value);
              }}
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <p className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={userPhone}
              onChange={(e) => {
                setUserPhone(e.target.value);
              }}
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <p className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone number
            </p>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              type="text"
              name="floating_email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <p className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </p>
          </div>
        </div>

        <div className="justify-center m-auto mb-4 text-center border border-gray-200 rounded-lg center bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="m-6">
            <input
              value={userSubject}
              onChange={(e) => {
                setUserSubject(e.target.value);
              }}
              type="text"
              id="subject"
              className="bg-gray-50 border justify-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full m-auto p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your subject line"
              required=""
            />
          </div>
          <div className="m-6 bg-white rounded-t-lg dark:bg-gray-800">
            <textarea
              onChange={(e) => {
                setUserComment(e.target.value);
              }}
              value={userComment}
              id="comment"
              rows="6"
              className="w-full p-2.5 text-sm text-gray-900 bg-white border-0 rounded-lg resize-none dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-800 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      <div className="flex p-5 ml-auto text-xs text-gray-500 row dark:text-gray-400">
        Thanks for your feedback, you can also
        <h1
          href="mailto:stefan.kolpaoff@gmail.com"
          className="pl-1 text-blue-600 cursor-pointer dark:text-blue-500 hover:underline"
        >
          Email direclty right here
        </h1>
        .
      </div>
    </div>
  );
};

export default comments;
