import { cn } from "../lib/utils";

const Text = ({ text, classes }) => {
  return (
    <span
      className={cn(
        "gradient inline-block text-transparent bg-clip-text font-normal",
        classes
      )}
    >
      {text}
    </span>
  );
};

export default Text;
