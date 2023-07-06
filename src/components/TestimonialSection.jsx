import React from "react";
import Testimonial from "./Testimonial";


const testimonialData = [
  {
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.",
    image: "image_26.png",
  },
  {
    name: "Jane Doe",
    testimonial:
      "Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.",
    image: "image_28.png",
  },
  {
    name: "Mike Doe",
    testimonial:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur risus vitae orci ultricies consequat.",
    image: "image_27.png",
  },
];

const TestimonialSection = () => {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const numTestimonials = testimonialData.length; 

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
    }, 1500);
    return () => clearInterval(id);
  }, [ testimonialIndex]);

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