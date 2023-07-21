import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../css/imageCarousel.css";
import { Pagination, Navigation } from "swiper/modules";

// Replace this with your actual image URLs

export default function ImageCarousel({ images }) {
  if (!Array.isArray(images) || images.length === 0) {
    return (
      <>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
            <SwiperSlide>
              {/* Use the image URL in an image tag */}
              <img src={images}/>
            </SwiperSlide>
        </Swiper>
      </>
    );
  }

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {/* Map through the imageUrls array and create a SwiperSlide for each image */}
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            {/* Use the image URL in an image tag */}
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
