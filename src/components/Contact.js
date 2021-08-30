
import React from "react";
import emailjs from 'emailjs-com';
import emailkey from "../emailkey";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  

    function handleSubmit(e) {
    e.preventDefault();
    const data = { "form-name": "contact", name, email, message }

    emailjs.send(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, data, emailkey.USER_ID)
    .then(() => {
       alert('Email sent successfully!');
    }, () => {
       alert('Faild to send email ...');
    });
    document.getElementById("myForm").reset();
  }

 

  return (
    <section id="contact" className="container mx-auto">
      <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">Contact Me</h2>
      <div className="container">
        <form
          id = "myForm"
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
          <br></br>
        </form>
      </div>
    </section>
  );
}