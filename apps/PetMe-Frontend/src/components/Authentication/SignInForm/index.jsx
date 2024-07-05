import { FaGoogle } from "react-icons/fa"

const index = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg md:w-96">
      <h2 className="text-2xl font-bold text-center mb-2">Sign In</h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Don't have an account?{" "}
        <a href="#" className="text-blue-500 hover:text-blue-800 font-bold">
          Sign Up
        </a>
      </p>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
          <div className="text-right">
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mb-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
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
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
export default index
