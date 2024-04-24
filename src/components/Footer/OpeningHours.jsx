const OpeningHours = () => {
  return (
    <div className="max-w-[400px] h-[280px] flex-grow flex flex-col justify-start items-center">
      <ul className="w-full flex flex-col justify-start items-start">
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">Monday:</p>
          <p className="body-text">Closed</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">Tuesday:</p>
          <p className="body-text">Closed</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">Wednesday:</p>
          <p className="body-text">10:00 AM - 8:00 PM</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">Thursday:</p>
          <p className="body-text">10:00 AM - 8:00 PM</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">Friday:</p>
          <p className="body-text">10:00 AM - 8:00 PM</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">Saturday:</p>
          <p className="body-text">10:00 AM - 6:00 PM</p>
        </li>
        <li className="w-full flex justify-between items-center mb-1">
          <p className="body-text pr-4">Sunday:</p>
          <p className="body-text">12:00 AM - 6:00 PM</p>
        </li>
      </ul>
    </div>
  );
};

export default OpeningHours;
