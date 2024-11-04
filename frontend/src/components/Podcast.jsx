import React from "react";
import Navbar from "./shared/Navbar";

const videoLinks = [
  "https://youtu.be/W8B0KWmv_-Q?si=QnzM98_OO-04Gvtb",
  "https://youtu.be/7ax4Tb5G1P4?si=EbU0ysyJQnwH8MU4",
  "https://youtu.be/D74vLgMYOxM?si=RaB4fXfkeDiaW4-0",
  // Add more video links as needed
];

export default function Podcast() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "20px 15px",
          borderRadius: "10 10 5 12",
        }}
      >
        <div className="relative">
          <h1 className="text-3xl font-bold  mb-4  p-4 rounded">
            TIME MANAGEMENT
          </h1>
          {/* <svg
          className="absolute left-0 right-0 -bottom-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#E6E6FA" // Light purple for the wavy border
            d="M0,288L30,250C60,213,120,139,180,128C240,117,300,171,360,202.7C420,234,480,256,540,245.3C600,235,660,181,720,160C780,139,840,149,900,160C960,171,1020,181,1080,197.3C1140,213,1200,235,1260,213.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          />
        </svg> */}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {videoLinks.map((link, index) => (
            <iframe
              key={index}
              width="75%" // Reduced width
              height="250" // Increased height
              src={link}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ margin: "0 auto" }} // Center the videos
            ></iframe>
          ))}
        </div>
      </div>
    </>
  );
}
