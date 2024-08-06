import FeedbackCard from "../admin-feedcard/feedbackCard";
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Feedback({ heading, route, data }) {
  const navigate = useNavigate();

  const locationPath = useParams();
  console.log(locationPath);
  console.log(route, heading);
  const handleClick = (id) => {
    navigate(`/admin-dashboard/${route}/${id}`);
  };

  const renderSwiper = (cards) => (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="flex justify-center items-center">
            <FeedbackCard course={card} onClick={() => handleClick(card.id)} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const feedbackcard = data || [];

  return (
    <div>
      <div className="mx-16 mt-10 h-auto w-auto bg-white border">
        <h2 className="p-4 text-[32px] font-semibold text-zinc-500">
          {heading}
        </h2>
      </div>
      {feedbackcard.map((section, index) => (
        <div key={index}>
          <h2 className={`${section.id === 1 && "!text-[14px]"} mx-16 mt-10 text-zinc-500 font-semibold text-[24px]`}>{section.name}</h2>
          <div className="mx-14 mt-10">
            {renderSwiper(section.cards)}
          </div>
        </div>
      ))}
    </div>
  );
}
