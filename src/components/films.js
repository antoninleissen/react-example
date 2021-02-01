import React from 'react';


const  tableau = [
    {id:0, nom: "Titanic"},
    {id:1, nom: "La planète des singes"},
    {id:2, nom: "Le labyrinthe"},
    {id:3, nom: "Harry Potter"},
    {id:4, nom: "Snowpiecer"},
    {id:5, nom: "The dark tower"},
    {id:6, nom: "Deepwater"},
    {id:7, nom: "Gravity"},
    {id:8, nom: "Joker"},
    {id:9, nom: "Split"},
    {id:10, nom: "Sully"},
    {id:11, nom: "La chute de Londres"},
    {id:12, nom: "La rage au ventre"},
    {id:13, nom: "Insaississables"},
    {id:14, nom: "Les animaux fantastiques"},
    {id:15, nom: "Lucy"},
  ];

var favoris = [];
var film_restants = tableau;

const Films = () => {
    var [list_film, setList_film] = React.useState(film_restants);
    const [list, setList_favoris] = React.useState(favoris);
    var  newlist = [];
    var  newList_favoris = [];
    

    function handleclick(id){
        /**
         * Fonction qui enlève un élement de la liste des films et qui en ajoute une dans la liste des favoris
         */
        newlist = film_restants.filter((film) => film.id !== id); 
        favoris[favoris.length] = film_restants.filter((film) => film.id === id)[0];
        const index = film_restants.findIndex(function(film) {
            return film.id === id
        });
        film_restants.splice(index,1);
        setList_film(newlist);
        setList_favoris(newList_favoris);
    }

    function func_favoris(id){
        /**
         * Fonction qui supprime un élément de la liste des favoris et qui le rajoute dans la liste des films
         */
        newList_favoris = favoris.filter((film) => film.id !== id); 
        film_restants[film_restants.length] = favoris.filter((film) => film.id === id)[0];
        const index = favoris.findIndex(function(film) {
            return film.id === id
        });
        favoris.splice(index,1);
        setList_film(newlist);
        setList_favoris(newList_favoris);
     }

    return (
        <div>
            <div className="title">Cliquez sur vos films préférés pour les mettre dans les favoris.</div>
            <div className="colone">
                <div className="container film">
                    <h1>Films</h1> 
                    <ul>
                        {film_restants.map(film =>
                        <li  onClick ={()=>handleclick(film.id)} >
                            {film.nom}
                        </li> 
                        )}
                    </ul>
                </div>
                <div className="espace"></div>
                <div className="container favoris">
                    <h1>Favoris</h1>
                    <ul>
                    {favoris.map(film =>
                            <li>
                            {film.nom}
                            <i className="far fa-times-circle" onClick = {() => func_favoris(film.id)} ></i>
                            </li>
                        )} 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Films;