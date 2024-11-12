import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";

const videoData = {
  "Time Management": [
    "https://www.youtube.com/embed/W8B0KWmv_-Q?si=f0gkPkOjYjfhJpdQ",
    "https://www.youtube.com/embed/7ax4Tb5G1P4?si=SQMOgLrF3hTP_zZC",
    "https://www.youtube.com/embed/D74vLgMYOxM?si=BGLbiwULOTQKqoOc",
  ],
  "Monetary and Finance": [
    "https://www.youtube.com/embed/3wBEUuV7BYg?si=CP7BnADPsAUkYpN2",
    "https://www.youtube.com/embed/Cda-fUJ-GjE?si=Dg30VYMaKFPtPzBA",
    "https://www.youtube.com/embed/7TWKKww-F30?si=eIzbVFwGGLCe_KYl",
  ],
  Communication: [
    "https://www.youtube.com/embed/6-shbSFc48E?si=EzDwUX4q7haoxokZ",
    "https://www.youtube.com/embed/HAnw168huqA?si=c7sHW2mvW6kBQq0l",
    "https://www.youtube.com/embed/k1TqbGSQZVE?si=AgekfU78JGjbNVO3",
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
