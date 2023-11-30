import React from "react";

export const MyAlert=({hidden,textErrors})=>{
    return (
        <div id="dangerAlert" className={"bg - red - 100 border px-4 py-3 rounded relative mb-4 shadow"} style={{color: "#a31818", borderColor:"#a31818" , backgroundColor:"rgba(255,185,185,0.35)"}} >
            <strong className="font-bold">Danger!</strong>
            <span className="block sm:inline"> {textErrors}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick="closeAlert()">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
        </span>
        </div>
    )
}