import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../dates/jummy";

export const Drawer = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection((prevExpandedSection) => {
      return prevExpandedSection === index ? null : index;
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white w-64 dark:bg-gray-800`}
    >
      <button
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={onClose}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        Menu
      </h5>
      <div className="py-4 overflow-y-auto">
        {Data?.map((section, index) => (
          <div key={index}>
            <div onClick={() => toggleSection(index)}>
              <h3 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                {section.title}
                <svg
                  className={`w-3 h-3 ml-auto transform transition-transform ${
                    expandedSection === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </h3>
            </div>
            {expandedSection === index && (
              <ul className="pl-8">
                {section.inside.map((item, idx) => (
                  <li key={idx} className="mb-[4px">
                    <Link to={`/admin-dashboard/${item.url}`} onClick={onClose}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
