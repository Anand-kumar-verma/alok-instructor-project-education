import { Link, useNavigate } from 'react-router-dom'
export default function Courses() {
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/admin-dashboard/course-creation/01`);
    }
  return (
    <div className="mx-16 mt-10">
      <div className="text-3xl font-semibold text-zinc-800">Courses</div>
      <div className="flex flex-wrap items-center mt-10 justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search your courses"
              className="p-2 outline-none"
            />
            <button className="p-2 bg-zinc-800 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m-2.296-3.348A7.5 7.5 0 1116.5 9.5a7.5 7.5 0 01-2.146 5.302z"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <button className="p-2 border rounded text-zinc-800 bg-white flex items-center">
              Newest
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        <button onClick={handleClick} className="p-2 bg-custom-blue text-white rounded">
          New course
        </button>
      </div>
    </div>
  );
}
