import { useNavigate } from 'react-router-dom';

export default function FeedbackCard({ course, onClick }) {
  return (
    <div className="mb-[20px] w-[270px] bg-white hover:scale-105 transition-transform duration-600 z-50 p-[10px]" onClick={onClick}>
      <img src={course.img} alt="" />
      <div className="pt-1"></div>
      <h3 className="text-card-black font-semibold text-[16px]">
        {course.title}
      </h3>
      <div className="pt-1"></div>
      <p className="text-[11px] text-light-black">Maximilian Schwarzmüller</p>
      <div className="pt-1"></div>
      <div className="flex items-center">
        <h4 className="text-[13px] font-semibold text-grey-dark">{course.rating}</h4>
        <div className="ml-2 flex justify-center items-center">
          <p className="text-[11px]">⭐⭐⭐⭐</p>
          <h4 className="ml-2 text-[13px] text-light-black">({course.totalReview})</h4>
        </div>
      </div>
      <div className="pt-1"></div>
      <div className="flex items-center">
        <div className="text-[14px] text-card-black font-semibold">₹</div>
        <div className="text-[14px] text-card-black font-semibold ml-[4px]">
          {course.Price}
        </div>
        <div className="text-[14px] text-light-black ml-[8px]">₹</div>
        <div className="text-[14px] text-light-black ml-[4px] line-through">
          3999
        </div>
      </div>
      <div className="pt-1"></div>
      <div className="h-[20px] w-[80px] bg-yellow text-[11px] text-black flex justify-center items-center font-semibold">
        Bestseller
      </div>
    </div>
  );
}
