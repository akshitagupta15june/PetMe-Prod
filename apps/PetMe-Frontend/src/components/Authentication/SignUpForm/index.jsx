import React, { useState } from "react"
import { FaGoogle } from "react-icons/fa"

const index = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    phone_number: "",
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const fields = [
    { id: "first_name", label: "First Name", placeholder: "First Name" },
    { id: "last_name", label: "Last Name", placeholder: "Last Name" },
    { id: "email", label: "Email", placeholder: "Email", type: "email" },
    {
      id: "password",
      label: "Password",
      placeholder: "Password",
      type: "password",
    },
    { id: "address", label: "Address", placeholder: "Address" },
    { id: "city", label: "City", placeholder: "City" },
    { id: "state", label: "State", placeholder: "State" },
    { id: "country", label: "Country", placeholder: "Country" },
    { id: "zip_code", label: "ZIP Code", placeholder: "ZIP Code" },
    { id: "phone_number", label: "Phone Number", placeholder: "Phone Number" },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg md:w-[50rem]">
      <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Already have an account?{" "}
        <a href="#" className="text-blue-500 hover:text-blue-800 font-bold">
          Sign In
        </a>
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label
              htmlFor={field.id}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {field.label}
            </label>
            <input
              type={field.type || "text"}
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleInputChange}
              placeholder={field.placeholder}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        <div className="flex items-center justify-center md:justify-center md:col-span-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">or</span>
        </div>
      </div>
      <div className="text-center flex items-center justify-center">
        <button
          type="button"
          className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <FaGoogle className="mr-2" />
          Sign up with Google
        </button>
      </div>
    </div>
  )
}

export default index
