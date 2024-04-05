import React from "react";
import Link from "next/link";
import { Content } from "./content";

export function AboutsMain() {
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      
      <div className="border border-gray-400 rounded-lg p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/padding_order">
            <a>Contact 1</a>
          </Link>
        </button>
      </div>

      <div className="border border-gray-400 rounded-lg p-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/contact-us">
            <a>Contact 2</a>
          </Link>
        </button>
      </div>

      <div className="border border-gray-400 rounded-lg p-4">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/delivery-rates">
            <a>Contact 3</a>
          </Link>
        </button>
      </div>

      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR1hIs64qMz5YtLD8JlNWDXil6fgV9MONssInndm4pM1Z9VI7KY-HJmhpAEeoFmneLyJe1cMzwxEa_J/pubhtml?gid=1385903661&single=true"
          width="300%"
          height="600" // Adjust the height as needed
          frameBorder="0"
          allowFullScreen
          title="Embedded Google Sheets"
          style={{ minHeight: "800px" }} // Set minimum height for responsiveness
        ></iframe>
      </div>
    </div>
  );
}
