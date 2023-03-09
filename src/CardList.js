import React from "react";
import Card from "./Card";

export default function CardList({ robots, searchField }) {
  return (
    <div>
      {robots
        .filter((robot) =>
          robot.name.toLowerCase().includes(searchField.toLowerCase())
        )
        .map((filteredRobot) => (
          <Card
            key={filteredRobot.id}
            username={filteredRobot.username}
            name={filteredRobot.name}
            email={filteredRobot.email}
          />
        ))}
    </div>
  );
}
