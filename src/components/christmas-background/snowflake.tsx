import React from "react";

export interface SnowflakeProps {
  left: number;
  top: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
  size: number;
}

const Snowflake: React.FC<SnowflakeProps> = ({
  left,
  top,
  animationDuration,
  animationDelay,
  opacity,
  size,
}) => {
  return (
    <div
      className="absolute text-white"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        animation: `fall ${animationDuration}s linear infinite`,
        animationDelay: `${animationDelay}s`,
        opacity: opacity,
        fontSize: `${size}px`,
      }}
    >
      ❄
    </div>
  );
};

export default Snowflake;
