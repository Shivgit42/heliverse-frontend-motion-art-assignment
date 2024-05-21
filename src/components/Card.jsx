import { cn } from "../lib/utils";

const Card = ({ title, desc, image, right }) => {
  return (
    <div
      className={cn(
        "lg:w-[50%] flex flex-col gap-y-6 p-4 rounded-xl card-gradient border border-white border-opacity-25",
        right && "mt-16"
      )}
    >
      <h1 className="text-2xl">Apply On {title}</h1>
      <p className="text-lg text-gray-400">{desc}</p>
      <img src={image} alt="application" />
    </div>
  );
};

export default Card;
