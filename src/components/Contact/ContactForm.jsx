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
        className="w-full h-full flex flex-col justify-around items-center"
        onSubmit={handleSubmit}
      >
        <h2 className="w-full header3 mb-8 text-center xl:text-left">
          Contact Us
        </h2>
        <ul className="w-full flex flex-col justify-center items-center lg:flex-row">
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label htmlFor="first-name">FIRST NAME</label>
            <input
              id="first-name"
              type="text"
              placeholder="Your first name"
              required
              className="w-full"
            ></input>
          </li>
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label htmlFor="last-name">LAST NAME</label>
            <input
              id="last-name"
              type="text"
              placeholder="Your last name"
              required
              className="w-full"
            ></input>
          </li>
        </ul>
        <ul className="w-full flex justify-center items-center lg:flex-row">
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              type="email"
              placeholder="Give a valid email address"
              required
              className="w-full"
            ></input>
          </li>
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label htmlFor="phone-number">PHONE NUMBER</label>
            <input
              id="phone-number"
              type="text"
              placeholder="Give a valid phone number"
              required
              className="w-full"
            ></input>
          </li>
        </ul>
        <ul className="w-full flex justify-center items-center lg:flex-row">
          <li className="w-full flex flex-col justify-center items-start py-2 px-10">
            <label htmlFor="message">WRITE YOUR MESSAGE BELOW</label>
            <textarea
              className="w-full h-[300px] form-text-area"
              type="text"
              id="message"
              placeholder="Write your message here"
              required
            ></textarea>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center py-4">
          <button form="contact-form" type="submit">
            Submit
          </button>
        </div>
      </form>
      <dialog ref={formSubmitModalRef} id="form-submit-modal">
        <h1>Thank you for your message!</h1>
        <h2>(Which did not go anywhere.)</h2>
        <button onClick={() => formSubmitModalRef.current.close()}>
          Close
        </button>
      </dialog>
    </>
  );
};

export default ContactForm;
