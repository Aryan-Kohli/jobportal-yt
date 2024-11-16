import React, { useState, useEffect } from "react";
import Navbar from "./shared/Navbar";

const videoData = {
  "Data Analytics": [
    "https://www.youtube.com/embed/PSNXoAs2FtQ?si=3avlPsKVgptfiUeV",
    "https://www.youtube.com/embed/F5v2dRYU5IA?si=Ro_AeTDF4HuL2qES",
    "https://www.youtube.com/embed/HXV3zeQKqGY?si=C7sp-i7PO3Ai_ttC",
    "https://www.youtube.com/embed/6cV3OwFrOkk?si=K2XjERqrN2mJBdEI",
  ],
  "Web Development": [
    "https://www.youtube.com/embed/zJSY8tbf_ys?si=1Eo3LjAZ0IcxzkXJ",
    "https://www.youtube.com/embed/CgkZ7MvWUAA?si=Okk0Iu3Yo-Gh4oFW",
    "https://www.youtube.com/embed/qwfE7fSVaZM?si=mPEokxzNkbYXk2x0",
    "https://www.youtube.com/embed/PWG7NlUDVaA?si=KD5luzKPOk72T5di",
  ],
  Devops: [
    "https://www.youtube.com/embed/11KT1hPNkY4?si=hthPa-hWxEBt63cu",
    "https://www.youtube.com/embed/fqMOX6JJhGo?si=yzfzD5WzyN8Z_WQV",
    "https://www.youtube.com/embed/Zv9MsVSxqXo?si=OXBYmwngsducXmGr",
    "https://www.youtube.com/embed/hQcFE0RD0cQ?si=x6ZAS2oAASk6FZC5",
  ],
};

export default function LearnFree() {
  const [selectedCategory, setSelectedCategory] = useState("Data Analytics");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex bg-gradient-to-r mt-3 from-purple-50 via-purple-100 to-purple-50 text-gray-800 p-5">
        {/* Sidebar */}
        <div className="w-1/4 bg-white shadow-lg p-6 rounded-lg border-r border-purple-200">
          <h2 className="text-3xl font-extrabold text-purple-700 mb-6">
            Categories
          </h2>
          <ul>
            {Object.keys(videoData).map((category, idx) => (
              <li
                key={idx}
                className={`cursor-pointer p-3 mb-4 rounded-lg hover:bg-purple-200 transition-all ${
                  selectedCategory === category ? "bg-purple-300" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Video Display */}
        <div className="flex-1 p-6">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-6">
            {selectedCategory}
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData[selectedCategory].map((link, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-purple-300 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <iframe
                  className="w-full h-56 lg:h-64"
                  src={link}
                  title={`${selectedCategory} Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
