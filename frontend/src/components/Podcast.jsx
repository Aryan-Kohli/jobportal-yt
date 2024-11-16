import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";

const videoData = {
  "Time Management": [
    "https://www.youtube.com/embed/W8B0KWmv_-Q?si=f0gkPkOjYjfhJpdQ",
    "https://www.youtube.com/embed/7ax4Tb5G1P4?si=SQMOgLrF3hTP_zZC",
    "https://www.youtube.com/embed/D74vLgMYOxM?si=BGLbiwULOTQKqoOc",
    "https://www.youtube.com/embed/w9gwV8cCMaQ?si=Wu6InuRXEWcLR425",
  ],
  "Monetary and Finance": [
    "https://www.youtube.com/embed/3wBEUuV7BYg?si=CP7BnADPsAUkYpN2",
    "https://www.youtube.com/embed/Cda-fUJ-GjE?si=Dg30VYMaKFPtPzBA",
    "https://www.youtube.com/embed/7TWKKww-F30?si=eIzbVFwGGLCe_KYl",
    "https://www.youtube.com/embed/kw0QVwt7LVI?si=Max1xK3lNSy4jkTW",
  ],
  Communication: [
    "https://www.youtube.com/embed/6-shbSFc48E?si=EzDwUX4q7haoxokZ",
    "https://www.youtube.com/embed/HAnw168huqA?si=c7sHW2mvW6kBQq0l",
    "https://www.youtube.com/embed/k1TqbGSQZVE?si=AgekfU78JGjbNVO3",
    "https://www.youtube.com/embed/HAnw168huqA?si=m0LY_EXrc35tBBrv",
  ],
};

export default function Podcast() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 text-gray-800 p-5 min-h-screen">
        {Object.entries(videoData).map(([title, links], idx) => (
          <div
            key={idx}
            id={title.replace(/ /g, "-")}
            className="mb-12 bg-white rounded-xl shadow-lg p-6 border border-purple-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative mb-6">
              <h1 className="text-4xl font-bold text-purple-700 bg-purple-100 p-4 rounded-lg shadow-md inline-block">
                {title.toUpperCase()}
              </h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-purple-300 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <iframe
                    className="w-full h-56 lg:h-64"
                    src={link}
                    title={`${title} Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
