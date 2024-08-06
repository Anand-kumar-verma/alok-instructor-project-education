import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { courseCreation } from "../../dates/jummy";

const CourseCreation = () => {
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentStep(parseInt(id));
  }, [id]);

  const handleClick = () => {
    if (currentStep < courseCreation.length) {
      navigate(`/admin-dashboard/course-creation/${currentStep + 1}`);
    }
    else{
      navigate("/admin-dashboard/course-creation/new-course-details");
    }
  };

  const currentCourse = courseCreation.find(course => course.id === currentStep);

  return (
    <div className="min-h-[95vh] flex items-center justify-center p-4">
      {currentCourse && (
        <div key={currentCourse.id} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            {currentCourse.title}
          </h1>
          <div className="flex justify-center mb-8">
            <div className="border p-6 rounded-lg bg-blue-50 border-blue-200">
              <div className="text-center">
                <div className="text-4xl mb-4">📹</div>
                <h2 className="font-semibold text-xl text-gray-700 mb-2">Course</h2>
                <p className="text-gray-600">{currentCourse.message}</p>
              </div>
            </div>
          </div>
          <button
            className="w-full bg-custom-blue hover:bg-hover-blue text-white py-3 rounded-lg text-lg transition duration-300"
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCreation;
