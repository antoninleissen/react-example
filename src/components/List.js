import React from "react";

export default function List(props) {
  return (
    <div className="column">
      <h1> Liste de Films </h1>
      <ul>
        {props.list.map((film, i) => {
          return (
            <li
              onClick={() => {
                props.favoriser(film.id, true);
              }}
              index={i}
            >
              {film.name}
              </li>
          );
        })}
      </ul>
    </div>
  );
}