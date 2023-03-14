import React from "react";

const Review = ({ review }) => {
  const { name, img, location, review: userReview } = review;
  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="flex items-center mt-6 gap-x-5">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt='people' />
            </div>
          </div>
          <div>
            <h5 className="text-xl">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
