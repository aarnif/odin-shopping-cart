const Section = ({ isEven, header, content }) => {
  const paragraphs = content.map((paragraph, index) => (
    <div key={index} className="my-4">
      {paragraph}
    </div>
  ));

  const sectionTextElement = (
    <div className="flex-grow min-h-[500px] max-w-[800px] px-12 pt-12 flex flex-col justify-start items-center">
      <h2>{header}</h2>
      <div>{paragraphs}</div>
    </div>
  );

  const sectionImageElement = (
    <div className="flex-grow min-h-[500px] max-w-[800px] flex justify-center items-center bg-slate-500">
      Section Image
    </div>
  );

  if (isEven) {
    return (
      <section className="min-h-[500px] flex-grow flex justify-center items-center">
        {sectionTextElement}
        {sectionImageElement}
      </section>
    );
  }

  return (
    <section className="min-h-[500px] flex-grow flex justify-center items-center">
      {sectionImageElement}
      {sectionTextElement}
    </section>
  );
};

export default Section;
