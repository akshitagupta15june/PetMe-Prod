import React from "react";
import Menu from "@/components/menu"

export default function Sidebar() {
    let sidebar = [{
        title: "Collection",
        items: [{
            ico: "/blog.svg",
            name: "Blogs"
        }, {
            ico: "/user.svg",
            name: "Users"
        }]

    }];
    return (
        <div className="">
            <div className="flex flex-col justify-between bottom-2 w-80  h-[90%] rounded-xl border-r">
                <div className="">

                
                <div className="flex items-center justify-center h-14 border-b bg-rose-50">
                    <div className="text-xl font-extrabold text-rose-500 tracking-wider "> 🔥 Pet Me</div>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        {
                            sidebar.map((x, i) => {
                                return (
                                    <Menu key={i} title={x.title} items={x.items} />
                                )
                            })
                        }
                    </ul>
                </div>
                </div>
                <div className="">
                        <a
                            href="#"
                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-rose-500 pr-6"
                        >
                            <span className="inline-flex justify-center items-center ml-4">
                                    <img src={`/icons/logout.svg`} className="w-7 h-7 text-slate-500" alt="images" />
                            </span>
                            <span className="ml-3 text-xl capitalize tracking-wide truncate">
                                Logout
                            </span>
                        </a>
                </div>

            </div>


        </div>
    )
}