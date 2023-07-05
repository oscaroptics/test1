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
    name: "Jane Doe",
    testimonial:
      "Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.",
    image: "img2.jpg",
  },
  {
    name: "Mike Doe",
    testimonial: "Lorem vitae orci ultricies consequat. consequat.",
    image: "img2.jpg",
  },
];

const TestimonialSection = () => {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const numTestimonials = testimonialData.length; // 2

  const handleOnClick = () => {
    if (testimonialIndex + 1 >= numTestimonials) {
      setTestimonialIndex(0);
    } else {
      setTestimonialIndex(testimonialIndex + 1);
    }
  };

  React.useEffect(() => {
    let id = setInterval(() => {
      handleOnClick();
    }, 5000);
    return () => clearInterval(id);
  }, [, testimonialIndex]);

  return (
    <>
      <div className="testimonial-section">
        <Testimonial {...testimonialData[testimonialIndex]} />
        {testimonialData.map((_data, index) => (
          <button
            style={{
              backgroundColor: testimonialIndex === index ? "red" : "gray",
            }}
            onClick={() => setTestimonialIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default TestimonialSection;