import React from 'react'
import HyvorTalk from 'hyvor-talk-react'
import Header from "./header"
import Sidebar from "./sidebar"

export default function layout({ children, type = "page" }) {

    return (
        <div>
            <Header />
            <div className="container mt-8 mx-auto mb-8 px-0 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <Sidebar />
                    <div className="col-span-1 order-first lg:order-none lg:col-span-3">
                        <div className="bg-gray-900 text-white lg:rounded overflow-hidden shadow-md">
                            <div className="m-4">
                                {children}
                            </div>
                        </div>
                        {type === "post" && < HyvorTalk.Embed websiteId={1292} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
