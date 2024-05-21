const Footer = () => {
  return (
    <div className="gradient flex flex-col lg:flex-row justify-between p-5 px-10 md:px-36 text-gray-300 gap-5">
      <div className="space-x-8 md:order-2 text-[12px] mx-auto md:mx-0">
        <a href="">Documentation</a>
        <a href="">Support</a>
      </div>
      <div className="md:order-1 text-[13px] text-center md:mx-0">
        &copy; 2023 Copywrite. All rights reserved by QodeMatrix
      </div>
    </div>
  );
};

export default Footer;
