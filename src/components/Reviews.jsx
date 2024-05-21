import { ImagesDetail } from "../constants/data";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <p className="md:text-lg mb-5">
        Trusted by thousands of users around the world
      </p>
      <div className="flex flex-wrap justify-evenly md:justify-between mt-5 items-center gap-y-5 w-full mx-auto">
        {ImagesDetail.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="mr-3">
              <img
                src={item.image}
                alt="review"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="space-y-3">
              <img
                src="public\assets\motionarteffect-img4.png"
                alt="stars"
                className="w-30 h-30 rounded-full"
              />
              <p className="text-sm text-gray-400">4.5 Score, 9 Reviews</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
