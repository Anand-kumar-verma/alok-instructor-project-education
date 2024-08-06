import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const NewCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseDetails, setCourseDetails] = useState('');
    const [targetAudience, setTargetAudience] = useState([]);
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [startDate, setStartDate] = useState('');

    const navigate = useNavigate();

    function handleClick(){
      navigate("/http://localhost:3000/admin-dashboard/course-creation/new-course-details/video")
    }
  
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
      setTargetAudience((prev) => {
        if (checked) {
          return [...prev, value];
        } else {
          return prev.filter((audience) => audience !== value);
        }
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic
      const courseData = {
        courseName,
        courseDetails,
        targetAudience,
        price,
        duration,
        startDate,
      };
      console.log(courseData);
    };
  
    return (
      <div className="flex justify-center items-center !w-[100%]">
        <div className="w-full bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-zinc-500">Create Course</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-zinc-500 mb-2" htmlFor="courseName">
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="w-full text-light-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-zinc-500 mb-2" htmlFor="courseDetails">
                Course Details
              </label>
              <textarea
                id="courseDetails"
                value={courseDetails}
                onChange={(e) => setCourseDetails(e.target.value)}
                className="w-full text-light-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-zinc-500 mb-2">
                Target Audience
              </label>
              <div className="flex flex-wrap">
                {['Polytechnic', 'IIT', 'NEET'].map((audience) => (
                  <div key={audience} className="mr-4 mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={audience}
                        onChange={handleCheckboxChange}
                        className="form-checkbox text-zinc-500"
                      />
                      <span className="ml-2 text-zinc-500">{audience}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-zinc-500 mb-2" htmlFor="price">
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full text-light-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-zinc-500 mb-2" htmlFor="duration">
                Duration (Time)
              </label>
              <input
                type="number"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full text-light-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-zinc-500 mb-2" htmlFor="startDate">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div> */}
            <div className="flex justify-end">
              <button
                onClick={handleClick}
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Create Course
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
