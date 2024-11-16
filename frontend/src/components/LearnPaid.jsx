import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { ShoppingCart } from "lucide-react"; // Import cart icon from Lucide React

const courseData = {
  "Web Development": [
    {
      name: "Complete React Guide",
      image: "/icons/reactjs.webp",

      price: "₹4,070",
    },
    {
      name: "Master Next.js",
      image: "/icons/nextjs.webp",
      price: "₹4,900",
    },
    {
      name: "HTML & CSS for Beginners",
      image: "/icons/css.png",
      price: "₹1,580",
    },
    {
      name: "JavaScript Essentials",
      image: "/icons/js.png",
      price: "₹2,410",
    },
  ],
  Devops: [
    {
      name: "Docker & Kubernetes Mastery",
      image: "/icons/docker.jpg",
      price: "₹5,730",
    },
    {
      name: "AWS Certified DevOps Engineer",
      image: "/icons/aws.webp",
      price: "₹8,220",
    },
    {
      name: "Ansible Basics",
      image: "/icons/ansible.png",
      price: "₹3,240",
    },
    {
      name: "Terraform Crash Course",
      image: "/icons/Terraform.png",
      price: "₹4,070",
    },
  ],
  "Data Analytics": [
    {
      name: "Data Science Bootcamp",
      image: "/icons/datascience.png",
      price: "₹6,580",
    },
    {
      name: "Learn Power BI",
      image: "/icons/powerbi.webp",
      price: "₹3,240",
    },
    {
      name: "SQL for Data Analysis",
      image: "/icons/sql.png",
      price: "₹2,410",
    },
    {
      name: "Google Data Studio",
      image: "/icons/datastudio.png",
      price: "₹4,900",
    },
  ],
  "Programming Languages": [
    {
      name: "Master Python Programming",
      image: "/icons/python.webp",
      price: "₹4,070",
    },
    {
      name: "Java Complete Course",
      image: "/icons/java.png",
      price: "₹4,900",
    },
    {
      name: "Go Programming Crash Course",
      image: "/icons/go.png",
      price: "₹5,730",
    },
    {
      name: "C++ Advanced Concepts",
      image: "/icons/cpp.png",
      price: "₹3,240",
    },
  ],
};
const headImgs = {
  "Web Development": "/icons/webdev.png",
  Devops: "/icons/devops.png",
  "Data Analytics": "/icons/dataana.png",
  "Programming Languages": "/icons/pl.png",
};
export default function LearnPaid() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  return (
    <>
      <Navbar />
      <div className="flex h-screen mt-2 bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/4 bg-purple-700 text-white p-4">
          <h2 className="text-3xl font-bold mb-6">Categories</h2>
          <ul>
            {Object.keys(courseData).map((category, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-3 mb-4 p-3 cursor-pointer rounded-md ${
                  selectedCategory === category
                    ? "bg-purple-500 shadow-lg"
                    : "hover:bg-purple-600"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <img
                  src={headImgs[category]}
                  alt={`${category} icon`}
                  className="w-8 h-8"
                />
                <span className="text-lg font-semibold">{category}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Course Display */}
        <div className="flex-1 p-6">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">
            {selectedCategory}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData[selectedCategory].map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                {/* Flex container for image and title */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {course.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{course.price}</p>
                <div className="flex gap-3">
                  <button className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-600">
                    Buy Now
                  </button>
                  <button className="bg-gray-200 text-purple-700 py-2 px-4 rounded-md hover:bg-gray-300 flex items-center gap-2">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
