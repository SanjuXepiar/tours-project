import React, { useState } from "react";
export const Tour = ({ id, name, image, price, info, deleteTour }) => {
  const [readMore, setReadmore] = useState(false);
  return (
    <div className="contents">
      <img src={image} alt={name} />
      <div className="name">
        <h4>{name}</h4>
        <h4> $ {price}</h4>
      </div>
      <div className="footer">
        <p>
          {readMore ? info : `${info.substring(0, 150)} ...`}
          <button onClick={() => setReadmore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button onClick={() => deleteTour(id)} className="deleteTour">
          Not Interested
        </button>
      </div>
    </div>
  );
};
