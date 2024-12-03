import React, { useMemo } from "react";
import Snowflake from "./snowflake";

const ChristmasBackground: React.FC = () => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      opacity: 0.5 + Math.random() * 0.5,
      size: 10 + Math.random() * 20,
    }));
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500">
      {snowflakes.map((snowflake) => (
        <Snowflake key={snowflake.id} {...snowflake} />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default ChristmasBackground;
