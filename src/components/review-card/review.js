import { useState } from "react";
import profile from "../../dates/imgs/profile.png";
import Alert from "../popup-msg/Alert";

export default function Review() {
  const [comment, setComment] = useState("");
  const [data, setData] = useState(null); // State for data
  const [showAlert, setShowAlert] = useState(false);
  const [buttonText, setButtonText] = useState("Submit Review");

  function handleClick() {
    if (buttonText === "Submit Review") {
      if (comment.trim() === "") {
        setShowAlert(true);
        return;
      }
      setData(comment); // Set data when comment is valid
      setButtonText("Edit Review");
      setComment(""); // Clear the comment input
    } else if (buttonText === "Edit Review") {
      // Prepare for editing by setting comment to the current data
      setComment(data);
      setData(null); // Clear the data
      setButtonText("Submit Review"); // Change button text to Submit Review
    }
  }

  return (
    <div className="p-6 bg-white shadow-sm">
      {/* Alert component */}
      {showAlert && (
        <Alert
          heading="Alert!!"
          message="Comment cannot be empty!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div className="flex items-center mb-4">
        <img className="h-10 w-10 rounded-full" src={profile} alt="Profile" />
        <div className="ml-4">
          <h3 className="text-gray-800 text-[14px] font-semibold">Alok Kumar</h3>
        </div>
      </div>

      <div className="flex">
      <div className="text-yellow-500 text-[11px]">✰✰✰✰✰</div>
      <h3 className="text-gray-500 text-[11px] ml-2">3 hours Ago</h3>
      </div>
      <div className="mb-6">
        <h3 className="text-gray-700 text-[14px] mt-2">
          Very Useful for One Night Fight
        </h3>
      </div>

      {/* Conditional Rendering */}
      {data ? (
      <div className="pl-10  border-gray-300">
      <div className="border-l-2 ml-4">
  <div className="items-center mb-2 ml-2">
    <div className="flex items-center">
      <h3 className="text-gray-800 text-[14px] font-semibold">You</h3>
      <h3 className="text-gray-500 text-[11px] ml-2">3 hours Ago</h3>
    </div>
  </div>
  <p className="text-gray-700 text-sm rounded ml-2">
    {data}
  </p>
  </div>
</div>

      ) : (
        <textarea
          className="text-light-black sm:ml-6 md:ml-8 lg:ml-2 h-20 sm:h-[130px] w-full lg:w-[98%]  mt-2 rounded-lg border border-blue-500 p-3 resize-none focus:border-blue-600 focus:outline-none"
          placeholder="Write your review here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      )}

      <div className="flex justify-end mt-6 lg:mr-2 sm:mr-1">
        <button
          onClick={handleClick}
          className="h-12 w-32 bg-custom-blue text-white rounded-lg hover:bg-[#3D9AC4] transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
