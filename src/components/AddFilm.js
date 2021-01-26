import React from 'react';

class AddFilm extends React.Component {

    state = {
        userInput: '',
        titres: [],
        favoris: []
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const array = this.state.titres;
        const usrInput = this.state.userInput;
        if (array.includes(usrInput)) {
            return (
                alert("Ce film est déjà dans la liste")
            );
        } else {
            this.setState({
                userInput: '',
                titres: [...this.state.titres, this.state.userInput]
            });
        }

    }


handleSubmitFav = (titre) => {
    const array = this.state.titres;
    const index = array.indexOf(titre);
    array.splice(index, 1);

    this.setState({
        favoris: [...this.state.favoris, titre],
        titres: array
    }, () => console.log(this.state));
}

// deleteFilm = (titre) => {

//     this.setState({
//     });
// }

deleteFilmFav = (filmFav) => {
    const array = this.state.favoris;
    const index = array.indexOf(filmFav);
    array.splice(index, 1);
    this.setState({
        favoris: array,
        titres: [...this.state.titres, filmFav]
    }, () => console.log(this.state));
}

renderFilm = () => {
    return this.state.titres.map((titre) => {

        return (
            <div className="list-group-item col" key={titre}>
                <a onClick={this.handleSubmitFav.bind(this, titre)}>{titre}</a>
            </div>
        )
    });
}

renderFav = () => {
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
            <div className="row">
                <div className="list-group col">
                    <div>
                        <h3>Tous les films :</h3>
                        <p>(Cliquer pour ajouter à vos favoris)</p>
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
