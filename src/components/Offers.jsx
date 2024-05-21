import { MoveRightIcon } from "lucide-react";
import { Button } from "./ui/Buttons";

const Offers = () => {
  return (
    <div className="flex flex-col md:flex-row leading-normal mt-28">
      <div className="w-full md:max-w-[60%]">
        <div className="flex flex-col space-y-5">
          <h1 className="text-[23px] md:text-[40px]">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </h1>
          <p className="text-gray-400 text-[15px] leading-loose">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
        </div>
        <div className="text-center md:text-start">
          <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
            <Button size="xlg" className="mt-5">
              Purchase from Envato &nbsp;&nbsp;&nbsp;
              <MoveRightIcon size={20} />
            </Button>
          </a>
        </div>
      </div>
      <div className="hidden md:flex min-w-[20%]" />
      <div className="flex items-center justify-center mt-4">
        <img src="public\assets\motionarteffect-img5.png" alt="stick" />
      </div>
    </div>
  );
};

export default Offers;
