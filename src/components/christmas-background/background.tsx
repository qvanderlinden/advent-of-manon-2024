import React, { useMemo } from "react";
import Snowflake from "./snowflake";

const ChristmasBackground: React.FC = () => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      const animationDuration = Math.random() * 10 + 10;
      const top = Math.random() * 100;
      const animationDelay = -(top / 120) * animationDuration;

      return {
        id: i,
        left: Math.random() * 100,
        top: top,
        animationDuration: animationDuration,
        animationDelay: animationDelay,
        opacity: 0.5 + Math.random() * 0.5,
        size: 10 + Math.random() * 20,
      };
    });
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500">
      {snowflakes.map((snowflake) => (
        <Snowflake key={snowflake.id} {...snowflake} />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default ChristmasBackground;
