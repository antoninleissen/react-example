import React from 'react';

class AddFilm extends React.Component {

    state = {
        userInput: '',  //récupération de l'input ajout du film
        titres: [],     //array vide pour les titres
        favoris: []     //array vide pour les titres favoris
    }

    handleChange = (e) => {     //récupération de l'état de l'user input
        this.setState({
            userInput: e.target.value
        });
    }

    handleSubmit = (e) => {     //récupération au click "ajouter"
        e.preventDefault()
        const array = this.state.titres;
        const usrInput = this.state.userInput;
        if (array.includes(usrInput)) {     // test film existant
            return (
                alert("Ce film est déjà dans la liste")
            );
        } else {    //si inexistant alors on le rajoute à la liste de titres
            this.setState({
                userInput: '',
                titres: [...this.state.titres, this.state.userInput]    
            });
        }
    }

    handleSubmitFav = (titre) => {  //même fonction mais pour les favoris au click sur le titre
        const array = this.state.titres;
        const index = array.indexOf(titre);
        array.splice(index, 1);
        this.setState({
            favoris: [...this.state.favoris, titre],
            titres: array
        }, () => console.log(this.state));
    }

    deleteFilmFav = (filmFav) => {      //suppression du film favoris et renvoie à la liste des films
        const array = this.state.favoris;
        const index = array.indexOf(filmFav);
        array.splice(index, 1);
        this.setState({
            favoris: array,
            titres: [...this.state.titres, filmFav]
        }, () => console.log(this.state));
    }

    renderFilm = () => {       //render des films
        return this.state.titres.map((titre) => {

            return (
                <div className="list-group-item col" key={titre}>
                    <a onClick={this.handleSubmitFav.bind(this, titre)}>{titre}</a>
                </div>
            )
        });
    }

    renderFav = () => {     //render des favs + option de supression
        return this.state.favoris.map((fav) => {
            return (
                <div className="list-group-item col" key={fav}>
                    {fav} | <i onClick={this.deleteFilmFav.bind(this, fav)} className="fas fa-times"></i>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row ">
                        <div className="form-group">
                            <input required type="text" className="form-control offset-2 col-8" placeholder="Ajouter un film" id="addFilm" onChange={this.handleChange} value={this.state.userInput} />
                        </div>
                        <button className="btn btn-primary offset-5 col-2">Ajouter</button>
                    </div>
                </form>
                <br/>
                <br/>
                <div className="row">
                    <div className="list-group col">
                        <div>
                            <h3>Tous les films :</h3>
                        </div>
                        {this.renderFilm()}
                    </div>
                    <div className="list-group col">
                        <h3>Vos favoris :</h3>
                        {this.renderFav()}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddFilm;
