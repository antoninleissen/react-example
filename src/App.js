import React, { useEffect, useState } from "react";
import List from "./components/List";
import Fav from "./components/Fav";

export default function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const filmList = [
      {
        id: 0,
        name: "Interstellar\n",
        bool: false
      } , 
      {
        id: 1,
        name: "Inception\n",
        bool: false
      },
      {
        id: 2,
        name: "Soul\n",
        bool: false
      },
      {
        id: 3,
        name: "Memento\n",
        bool: false
      },
      {
        id: 4,
        name: "Avengers:Infinity War\n",
        bool: false
      },
      {
        id: 5,
        name: "Iron man 3\n",
        bool: false
      },
      {
        id: 6,
        name: "Tenet\n",
        bool: false
      }
    ];
    setFilms(filmList);
  }, []);

  const favoriser = (id, state) => {
    const myFilms = [...films];
    let target = myFilms.find((x) => x.id === id); // Ici avec .find je cherche le film dont j'ai donné l'id,
    target.fav = state;
    setFilms(myFilms);
  };

  return (
    <div>
      <List favoriser={favoriser} list={films.filter((x) => !x.fav)} />
      <Fav favoriser={favoriser} list={films.filter((x) => x.fav)} />
    </div>
  );
}
