import { useState } from "react";

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}Text
      </button>
      {isVisible && <p>Now, I am visible</p>}
    </div>
  );
};

export default Toggle;
