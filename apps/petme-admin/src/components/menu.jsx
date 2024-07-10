export default function Menu(props) {
    return (
        <div className="">
            {/* title */}
            <li className="px-5 mt-6 mb-2">
                <div className="flex flex-row items-center h-8">
                    <div className="text-2xl font-light capitalize tracking-wide text-gray-500">
                        {props.title}
                    </div>
                </div>
            </li>
            {/* Items */}
            {props.items.map((x, i) => {
                return (
                    <li key={i}>
                        <a
                            href="#"
                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-rose-500 pr-6"
                        >
                            <span className="inline-flex justify-center items-center ml-4">
                                    <img src={`/icons/${x.ico}`} className="w-7 h-7 text-slate-500" alt="images" />
                            </span>
                            <span className="ml-3 text-xl capitalize tracking-wide truncate">
                                {x.name}
                            </span>
                        </a>
                    </li>
                )
            })}
        </div>
    )
}