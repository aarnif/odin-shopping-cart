import Hero from "../Hero";
import ContactInfo from "../Footer/ContactInfo";
import OpeningHours from "../Footer/OpeningHours";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="w-full flex-grow max-w-[1600px] my-24 flex flex-col">
        <h1 className="mb-20 text-center text-2xl font-bold">Contact</h1>
        <div className="flex flex-grow max-w-[1600px]">
          <div className="flex-grow">
            <h1 className="mb-8 text-xl font-semibold">Contact Info</h1>
            <ContactInfo isFooter={false} />
            <h1 className="mb-8 text-xl font-semibold">Opening Hours</h1>
            <OpeningHours />
          </div>
          <div className="flex-grow">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5635078269806!2d-74.007738722581!3d40.72762447139142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598d4191cf35%3A0xfb47a119c0bef8f6!2s235%20Bowery%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sfi!4v1714468049458!5m2!1sen!2sfi"
              loading="lazy"
            ></iframe>
            <div className="relative w-full z-10 bottom-1/2 text-center text-2xl font-extrabold text-red-600">
              This Shop Does not exist!
            </div>
          </div>
        </div>
        <div className="flex flex-grow max-w-[1600px] justify-center items-center mt-8">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
