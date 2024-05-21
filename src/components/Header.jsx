import { Button } from "./ui/Buttons";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <img src="public\assets\MotionArtEffect-logo.png" alt="Logo" />
      <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
        <Button
          size="lg"
          className="hover:bg-transparent hover:text-white hidden md:flex"
        >
          Purchase Now
        </Button>
      </a>
    </div>
  );
};

export default Header;
