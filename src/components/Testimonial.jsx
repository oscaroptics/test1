import React from 'react';

const Testimonial = ({ name, testimonial, image, index, total }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <h2 className="h2div">Success Stories</h2>
        <h1 className="h1div">{name}</h1>
        <p className="pdiv">{testimonial}</p>
        <button>Read More Stories</button>
        {/* <h3>{`${index + 1}/${total}`}</h3> */}
      </div>
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Testimonial;