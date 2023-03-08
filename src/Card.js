import React from "react";

export default function Card({ username, name, email }) {
  return (
    <div>
      <img src={"https://robohash.org/" + username} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
