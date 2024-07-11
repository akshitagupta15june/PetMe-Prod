import React from "react"
import FormsInput from "./components/FormsInput"
import inputs from "../../helpers/inputsForDonateForms"
import dog from "../../assets/animalsImages/dog-happy.png"

function DonateForms() {
  return (
    <section className=" bg-pink-200 flex flex-col items-center p-5 w-full">
      <div className="items-center justify-center relative flex">
        <p className="bg-red-400 absolute left-5 text-xs md:text-sm font-bold text-white p-2 rounded-full w-fit ">
          Yes !! I want new frens
        </p>
        <img src={dog} alt="Dog" className="w-full sm:w-1/3 lg:w-2/3" />
      </div>

      <div className="text-center my-10">
        <p className="  text-xl sm:text-lg md:text-4xl font-black title-font mb-4 text-pink-600">
          Fill up the form below to donate your pets.
        </p>
      </div>

      <form
        id="survey-form"
        action="https://formspree.io/f/xayaokzl"
        method="POST"
        className="w-full lg:grid lg:grid-cols-2 gap-4 lg:w-1/2 md:w-2/3"
      >
        {inputs.map((inputText, index) => (
          <FormsInput text={inputText} key={inputText} index={index} />
        ))}
      </form>

      <div className="text-center w-full">
        <label htmlFor="message" className="leading-7 text-xl text-gray-900">
          Your Pet Image
        </label>

        <div className="max-w-3xl mx-auto mt-5">
          <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>

              <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline">Browse</span>
              </span>
            </span>

            <input type="file" name="file_upload" className="hidden" />
          </label>
        </div>
      </div>

      <div>
        <input type="checkbox" name="check" id="check" required />

        <span className="p-1 font-medium text-gray-900 pt-4">
          I have read and agree to the Terms and Conditions of PetMe.
        </span>
      </div>

      <div>
        <button
          type="submit"
          className="flex mx-auto text-white bg-indigo-500 border-0 mt-4 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Submit
        </button>
      </div>
    </section>
  )
}

export default DonateForms
