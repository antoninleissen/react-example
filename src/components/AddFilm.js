import { arrayOf } from 'prop-types';
import React from 'react';



class AddFilm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            titres: [],
            favoris: []
        }
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            userInput: '',
            titres: [...this.state.titres, this.state.userInput]
        });

    }

    deleteFilm = (titre) => {
        const array = this.state.titres;
        const index = array.indexOf(titre);
        array.splice(index, 1);
        this.setState({
            titres: array
        });
    }

    // addFav = (fav) => {
    //     this.setState({
    //         favoris: [...this.state.favoris, fav]
    //     });
    // a mettre dans le liens --> onClick={this.addFav(titre)}
    // }

    renderFilm = () => {
        return this.state.titres.map((titre) => {

            return (
                <div className="list-group-item col" key={titre}>
                    <a>{titre} </a> | <i onClick={this.deleteFilm.bind(this, titre)} className="fas fa-times"></i>
                </div>
            )
        });
    }

    // renderFav = () => {
    //     return this.state.favoris.map((fav) => {
    //         return (
    //             <div className="list-group-item col" key={fav}>
    //                 {fav} | <i onClick={this.deleteFilm.bind(this, fav)} className="fas fa-times"></i>
    //             </div>
    //         )
    //     });
    // }

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
                        <h3>Tous les films :</h3>
                        {this.renderFilm()}
                    </div>

                    <div className="list-group col">
                        <h3>Vos favoris :</h3>
                        {/* {this.renderFilm()} */}
                    </div>

                </div>

            </div>

        );
    }
}

export default AddFilm;
