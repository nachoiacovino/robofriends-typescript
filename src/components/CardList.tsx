import React from "react";
import Card from "./Card";

interface IRobot {
  name: string;
  id: number;
  email: string;
}

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  return (
    <div>
      {robots.map((user, i) => (
        <Card
          key={i}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      ))}
    </div>
  );
};

export default CardList;
