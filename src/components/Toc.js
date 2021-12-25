import React from "react"

export default function Toc(data) {
    return (
        <div class="fixed top-24 bottom-0 py-10 px-8 overflow-y-auto hidden xl:block break-words max-w-[18rem]">
            <h5 class="text-gray-900 font-semibold mb-4 text-sm leading-6 dark:text-gray-100">Daftar isi</h5>
            <div dangerouslySetInnerHTML={{ __html: data.data }}></div>
        </div>
    )
}