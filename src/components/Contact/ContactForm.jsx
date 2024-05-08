import { useRef } from "react";

const ContactForm = () => {
  const formSubmitModalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted!");
    e.target.reset();
    formSubmitModalRef.current.showModal();
  };

  return (
    <>
      <form
        id="contact-form"
        className="w-full h-full flex flex-col justify-around items-center bg-white shadow-xl p-8 dark:bg-slate-700 transition"
        onSubmit={handleSubmit}
      >
        <h2 className="w-full mb-8 text-2xl font-semibold">Contact Us</h2>
        <ul className="w-full flex flex-col justify-center items-center lg:flex-row">
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label
              htmlFor="first-name"
              className="text-lg text-slate-800 font-bold dark:text-slate-300"
            >
              FIRST NAME
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Your first name"
              required
              className="w-full text-lg bg-white rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100 border border-slate-400 
              focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-slate-100 placeholder:text-slate-500
              dark:text-slate-300 dark:placeholder:text-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:bg-slate-500"
            ></input>
          </li>
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label
              htmlFor="last-name"
              className="text-lg text-slate-800 font-bold dark:text-slate-300"
            >
              LAST NAME
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Your last name"
              required
              className="w-full text-lg bg-white rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100 border border-slate-400 
              focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-slate-100 placeholder:text-slate-500
              dark:text-slate-300 dark:placeholder:text-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:bg-slate-500"
            ></input>
          </li>
        </ul>
        <ul className="w-full flex justify-center items-center lg:flex-row">
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label
              htmlFor="email"
              className="text-lg text-slate-800 font-bold dark:text-slate-300"
            >
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              placeholder="Give a valid email address"
              required
              className="w-full text-lg bg-white rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100 border border-slate-400 
              focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-slate-100 placeholder:text-slate-500
              dark:text-slate-300 dark:placeholder:text-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:bg-slate-500"
            ></input>
          </li>
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label
              htmlFor="phone-number"
              className="text-lg text-slate-800 font-bold dark:text-slate-300"
            >
              PHONE NUMBER
            </label>
            <input
              id="phone-number"
              type="text"
              placeholder="Give a valid phone number"
              required
              className="w-full text-lg bg-white rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100 border border-slate-400 
              focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-slate-100 placeholder:text-slate-500
              dark:text-slate-300 dark:placeholder:text-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:bg-slate-500"
            ></input>
          </li>
        </ul>
        <ul className="w-full flex justify-center items-center lg:flex-row">
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label
              htmlFor="message"
              className="text-lg text-slate-800 font-bold dark:text-slate-300"
            >
              WRITE YOUR MESSAGE BELOW
            </label>
            <textarea
              className="w-full h-[300px] text-lg bg-white rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100 border border-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-slate-100 placeholder:text-slate-500
              dark:text-slate-300 dark:placeholder:text-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:bg-slate-500"
              type="text"
              id="message"
              placeholder="Write your message here"
              required
            ></textarea>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center py-4">
          <button form="contact-form" type="submit" className="confirm-button">
            Submit
          </button>
        </div>
      </form>
      <dialog ref={formSubmitModalRef} id="form-submit-modal">
        <h1>Thank you for your message!</h1>
        <h2>(Which did not go anywhere.)</h2>
        <button
          onClick={() => formSubmitModalRef.current.close()}
          className="confirm-button"
        >
          Close
        </button>
      </dialog>
    </>
  );
};

export default ContactForm;
