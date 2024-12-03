import React from "react";

interface SnowflakeProps {
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
}

const Snowflake: React.FC<SnowflakeProps> = ({
  left,
  animationDuration,
  opacity,
  size,
}) => {
  return (
    <div
      className="absolute text-white"
      style={{
        left: `${left}%`,
        animation: `fall ${animationDuration}s linear infinite`,
        opacity: opacity,
        fontSize: `${size}px`,
      }}
    >
      ❄
    </div>
  );
};

export default Snowflake;
