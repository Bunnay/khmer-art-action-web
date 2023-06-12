import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  History,
  Autoplay,
  Virtual,
  EffectFade,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/effect-fade";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Carousel() {
  const cards = [
    {
      id: 1,
      image:
        "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/01/DSC09023-scaled.jpg",
    },
    {
      id: 2,
      image:
        "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/04/Cover-Page_25th-Years-01-1-scaled.jpg",
    },
    {
      id: 3,
      image:
        "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2022/12/CLA-SUPPORTER.jpg",
    },
  ];

  const scrollDown = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mx-5 mt-5 relative text-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[
            Navigation,
            Pagination,
            History,
            Autoplay,
            Virtual,
            EffectFade,
          ]}
          className="h-[300px] lg:h-[600px] xl:h-[600px] sm:h-[400px] md:h-[500px] rounded-xl"
          effect="fade"
        >
          {cards.map((slideContent, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <picture>
                <img
                  src={slideContent.image}
                  className="absolute block w-full object-cover"
                  alt={slideContent.image}
                  width={300}
                  height={300}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="shadow-lg rounded-xl animate-bounce bg-primary absolute z-10 -bottom-4"
          onClick={scrollDown}
        >
          <ChevronDownIcon className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
