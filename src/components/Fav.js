import React from "react";

export default function List(props) {
  return (
    <div className="column">
      <h1> Liste de Favoris </h1>
      <ul style={{color: "red"}}>
        {props.list.map((film, i) => {
          return (
            <li>
              {"   "} <button className="btn btn-danger"
                onClick={() => {
                  props.favoriser(film.id, false);
                }}
                index={i}
                
              > {"X"} 
              </button> {film.name}
            </li> 
          );
        })}
      </ul>
    </div>
    
  );
}
