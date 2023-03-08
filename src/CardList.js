import React from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  return (
    <div>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          username={robot.username}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
}
