import React from 'react';

const Testimonial = ({ name, testimonial, image, index, total }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <h2 className="success-stories-content">Success Stories</h2>
        <h1 className="name-main-content">{name}</h1>
        <p className="testimonial-para">{testimonial}</p>
        <button class="button-use ">
          Read more stories
        </button>
      </div>
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Testimonial;