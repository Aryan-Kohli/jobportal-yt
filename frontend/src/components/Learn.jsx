import React, { useEffect } from "react";
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

export default function Learn() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "20px 15px",
        }}
      >
        {Object.entries(videoData).map(([title, links], idx) => (
          <div
            key={idx}
            id={title.replace(/ /g, "-")}
            className="mb-8"
            style={{
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#f4f4ff",
            }}
          >
            <div className="relative mb-6">
              <h1 className="text-3xl font-bold text-gray-700 bg-purple-100 p-4 rounded-lg">
                {title.toUpperCase()}
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {links.map((link, index) => (
                <iframe
                  key={index}
                  width="100%"
                  height="300"
                  src={link}
                  title={`${title} Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ margin: "0 auto" }}
                ></iframe>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
