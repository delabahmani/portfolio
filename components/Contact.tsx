import React from "react";

const Contact = () => {
  return (
    <section className="mt-24 w-screen py-12 md:py-24 lg:py-32 bg-[#1a1a1a] fixedsys ">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center space-y-12">

        <div className="w-full space-y-3 text-center">
          <h2 className="text-4xl">get in touch</h2>
          <p className="text-lg text-y2kgray">
            whether you have a project in mind or just want to chat, i'd love to
            hear from you
          </p>
        </div>

        <div className="w-full max-w-md">
          <form className="flex flex-col space-y-4  ">
            <input
              className="input"
              type="text"
              placeholder="name"
            />

            <input
              className="input"
              type="text"
              placeholder="email"
            />
            <textarea
              placeholder="message"
              className="input"
            />
            <button
              type="submit"
              className="bg-y2kpink h-10 w-full rounded-lg text-offwhite hover:bg-[#b73a75] transition "
            >
              send your message!
            </button>
          </form>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
