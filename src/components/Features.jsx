import { FeatureDetails } from "../constants/data";

const Features = () => {
  return (
    <div className="w-full my-24 flex flex-col items-center space-y-5">
      <h1 className="leading-loose text-2xl md:leading-normal md:text-4xl max-w-[90%] md:max-w-[50%] text-center">
        An All-Round Plugin With Powerful Features
      </h1>
      <p className="md:max-w-[70%] lg:max-w-[50%] text-center text-gray-400 mx-auto leading-loose">
        Whether you are a seasoned web designer or just starting out, Motion Art
        for Elementor seamlessly integrates with the Elementor platform,
        providing you with a seamless and intuitive experience.
      </p>
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
        {FeatureDetails.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 card-gradient rounded-3xl border border-white border-opacity-25 p-6"
          >
            <img
              src={feature.image}
              alt={feature.title}
              width={200}
              height={200}
            />
            <h1 className="text-xl text-start">{feature.title}</h1>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
