import React from "react"

function Sample() {
  return (
    <div className="h-auto bg-gradient-to-t from-rose-100 to-white">
      <div className="block sm:flex h-full py-10 sm:h-[80vh] justify-between w-3/4 mx-auto">
        <div className="flex h-auto items-center justify-center">
          <div className="">
            <div className="text-center sm:text-left text-2xl sm:text-5xl sm:leading-snug font-extrabold font-sans text-slate-700">
              Find Your <span className="text-[#FA4D56]">Furry</span> Friend{" "}
              <br />
              Adopt, Love, <br />
              Transform Lives !
            </div>
            <button className="bg-[#FA4D56] mx-auto sm:mx-0 mt-6 text-sm  sm:text-md px-4 py-2 rounded-lg text-white border-2 font-sans font-bold flex items-center space-x-2 hover:bg-rose-50 hover:text-[#FA4D56] hover:border-[#FA4D56] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 100 100"
              >
                <path
                  fill="currentColor"
                  d="M34.848 40.708c0-5.6-4.542-10.141-10.143-10.141c-5.601 0-10.141 4.541-10.141 10.141c0 5.604 4.539 10.143 10.141 10.143s10.143-4.539 10.143-10.143m40.445-8.16c-5.6 0-10.141 4.541-10.141 10.141c0 5.604 4.541 10.141 10.141 10.141c5.601 0 10.142-4.537 10.142-10.141c0-5.6-4.54-10.141-10.142-10.141m-9.211 21.43c-.705-.869-1.703-1.875-2.849-2.93c-3.058-3.963-7.841-6.527-13.233-6.527c-4.799 0-9.113 2.032-12.162 5.27c-1.732 1.507-3.272 2.978-4.252 4.188l-.656.801c-3.06 3.731-6.869 8.373-6.841 16.25c.027 7.315 5.984 13.27 13.278 13.27a13.14 13.14 0 0 0 10.467-5.159a13.137 13.137 0 0 0 10.47 5.159c7.291 0 13.247-5.954 13.275-13.27c.028-7.877-3.782-12.519-6.841-16.25z"
                />
                <circle
                  cx="50.703"
                  cy="26.877"
                  r="11.175"
                  fill="currentColor"
                />
              </svg>
              <span>Adopt Me</span>
            </button>
          </div>
        </div>
        <div className="hidden sm:visible h-full sm:flex justify-center items-center">
          <div className="hero-blob"></div>
        </div>
      </div>
    </div>
  )
}

export default Sample
