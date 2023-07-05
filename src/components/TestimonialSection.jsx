import React from "react";
import Testimonial from "./Testimonial";

const testimonialData = [
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.",
    image: "img1.jpg",
  },
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.",
    image: "img2.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {testimonialData.map((testimonial, index) => (
            <div className="swiper-slide" key={index}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default TestimonialSection;
