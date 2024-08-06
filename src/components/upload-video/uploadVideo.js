import React, { useState } from "react";

export const UploadVideo = () => {
  const [rows, setRows] = useState([
    { name: "", video: "", pdf: "", thumbnail: "" },
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddRow = () => {
    setRows([...rows, { name: "", video: "", pdf: "", thumbnail: "" }]);
  };

  const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  const handleFileChange = (index, e) => {
    const { name, files } = e.target;
    const newRows = [...rows];
    newRows[index][name] = files[0];
    setRows(newRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log("Submitted data", rows);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="sticky top-0 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-light-black">
          Upload Course Videos
        </h2>
        <button
          type="button"
          onClick={handleAddRow}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex flex-col p-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 w-[200px] h-[25px] text-[12px]"
        />
        <div className="relative w-32 h-20 bg-gray-200 rounded-md overflow-hidden">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Thumbnail Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="text-center text-[12px] text-gray-500">
              No image selected
            </p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 !relative">
        {rows.map((row, index) => (
          <div
            key={index}
            className="flex flex-wrap mb-4 gap-4 justify-between"
          >
            <div className="w-full md:w-1/5 px-2 mb-2 md:mb-0">
              <input
                type="text"
                name="name"
                value={row.name}
                onChange={(e) => handleChange(index, e)}
                className="w-full p-2 border rounded"
                placeholder="Course Heading"
              />
            </div>

            <div className="w-full md:w-1/5 px-2 mb-2 md:mb-0">
              <input
                type="file"
                name="video"
                onChange={(e) => handleFileChange(index, e)}
                className="w-full p-2 border rounded "
                accept="video/*"
              />
            </div>
            <div className="w-full md:w-1/5 px-2 mb-2 md:mb-0">
              <input
                type="file"
                name="pdf"
                onChange={(e) => handleFileChange(index, e)}
                className="w-full p-2 border rounded"
                accept="application/pdf"
              />
            </div>
            <div className="w-full md:w-auto px-2 mb-2 md:mb-0 flex items-center">
              <button
                type="button"
                onClick={() => handleRemoveRow(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="fixed bottom-0  p-4 border-t ">
          <div className="container mx-auto flex gap-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
