import Card from "./Card";

const Application = () => {
  return (
    <div className="w-full mt-24 flex flex-col items-center">
      <p className="leading-loose text-2xl md:leading-normal md:text-4xl max-w-[90%] md:max-w-[50%] text-center">
        Apply On Any Section Or Enable For Whole Page
      </p>
      <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5 mt-10">
        <Card
          title="Section"
          desc="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."
          image="public\assets\motionarteffect-img11.png"
        />
        <Card
          title="Page"
          desc="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."
          image="public\assets\motionarteffect-img10.png"
          right={true}
        />
      </div>
    </div>
  );
};

export default Application;
