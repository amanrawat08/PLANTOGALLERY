import GoHome from "./GoHome";
export default function ContractUs() {
  return (
    <>
      <div className=" w-[96%]  min-h-60 flex flex-col px-8 items-center justify-center m-auto mt-14  rounded-1xl p-1 rounded-sm">
        <div className="sm:text-4xl xl:text-4xl font-bold">Contract Us</div>
        <div className="lg:mt-8 w-[60%] text-center text-gray-500">
          If you have any question or comments for us, Fill out the form below
          with all your details and we will get back to you within 24 hours. Or
          feel free to call us at +91 8588 922 922. We are available to take
          your call between 10 AM to 7:30 PM.
        </div>
        <div className="lg:mt-5 w-[60%] text-center text-gray-500">
          Please Also maintion your contact number inside the msg tab. It be
          help us to Connect with you soon and quickly support.
        </div>
        <div>
          <div className="flex flex-wrap justify-center">
            <div class=" w-72 p-5 bg-white rounded-lg font-mono">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="unique-input"
              >
                Name
              </label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-green-600 hover:shadow-lg hover:border-green-600"
                placeholder="Full Name"
                type="text"
                id="unique-input"
              />
            </div>
            <div class=" w-72 p-5 bg-white rounded-lg font-mono">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="unique-input"
              >
                Email
              </label>
              <input
                class="text-sm custom-input w-full  px-4 py-2 border border-gray-400 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-green-600 hover:shadow-lg hover:border-green-600 bg-gray-100"
                placeholder="Email"
                type="text"
                id="unique-input"
              />
            </div>
          </div>
          <div className="w-[95%] ml-7 mt-2   m-auto">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="unique-input"
            >
              Message
            </label>
            <textarea
              name="message"
              class="bg-gray-100 w-[95%]  text-gray-800 text-sm custom-input   px-4 py-2 border border-gray-400 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-green-600 hover:shadow-lg hover:border-green-600"
              placeholder="Type Your Message"
            ></textarea>
          </div>
          <div className=" text-center mt-2">
            <button className="px-4 py-2 rounded hover:opacity-85 transition-all duration-500  bg-green-600 text-white font-semibold">
              Send Message
            </button>
          </div>
        </div>
        <GoHome />
      </div>
    </>
  );
}
