"use client";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";

const Contact = ({ accessKey }: { accessKey: string }) => {
  const [loader, setLoader] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoader(true);
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      } else {
        console.error("Response Error:", data);
        toast.error(`Error: ${data.message || "Could not send message, try again later"}`);
      }
    } catch (error) {
      console.log("Fetch error:", error);
      toast.error("Could not send message, try again later");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className="fixedsys mt-24 w-screen dark:bg-[#1a1a1a] bg-[#d1c9d3] px-4 py-12 md:px-0 md:py-24 lg:py-32 mb-7 ">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-12 px-4 md:px-6">
        <div className="w-full space-y-3 text-center">
          <h2 className="text-4xl text-black dark:text-offwhite">get in touch</h2>
          <p className="text-lg lg:text-xl lg:w-[570px] mx-auto text-black dark:text-y2kgray">
            whether you have a project in mind or just want to chat i&apos;d
            love to hear from you
          </p>
        </div>

        <div className="w-full max-w-md">
          <form className="flex flex-col space-y-4" onSubmit={onSubmit} ref={formRef}>
            <input type="hidden" name="subject" value="Portfolio Message" />
            <input type="hidden" name="from_name" value="Portfolio" />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            <input
              className="input"
              type="text"
              name="name"
              placeholder="name"
              required
            />

            <input
              className="input"
              type="text"
              placeholder="email"
              name="email"
              required
            />
            <textarea
              placeholder="message"
              className="input"
              required
              name="message"
            />
            <button
              type="submit"
              className="h-10 w-full rounded-lg bg-y2kpink text-offwhite transition hover:bg-[#b73a75]"
            >
              {!loader ? (
                "send your message!"
              ) : (
                <div role="status" className="flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 animate-spin fill-offwhite text-gray-200 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
