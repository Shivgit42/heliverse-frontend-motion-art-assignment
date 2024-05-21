import Text from "./Text";

const Main = () => {
  return (
    <div className="mt-20 md:mt-32 flex flex-col md:flex-row font-semibold">
      <div className="md:w-[10%] text-lg space-y-2 mx-auto mb-5">
        <Text text="Transform Your Website" />
        <p className="font-light">With Motion Art Effect</p>
      </div>
      <div className="w-[15%]" />
      <div className="flex-1 space-y-5">
        <p className="text-4xl lg:text-[60px] md:max-w-[65%] leading-normal">
          Attract Your Visitors Attention With Colorful
          <Text
            text="Motion Art Effect"
            classes="text-4xl lg:text-6xl font-medium"
          />
        </p>
        <p className="md:max-w-[65%] text-gray-400 leading-loose">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
};

export default Main;
