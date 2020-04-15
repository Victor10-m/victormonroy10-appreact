import React from 'react'

class  PanelAdd extends React.Component{

    constructor(props){
        super(props);
        this.state ={
        title: '',
        rating: 1
        };

    this.image = React.createRef();
    }
    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value)
        this.setState({rating: rating});
    }

    onsubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const image = this.image.current.files[0].name;
        const rating = this.state.rating;

        this.props.onadd({title: title, image: image, rating: rating});
        this.props.oncancel();
    }

    render(){
    return(
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit={this.onsubmit}>
                    <p>
                        <label >Titulo del libro</label>
                        <input type="text" name="title" className="input" onChange={this.onChangeTitle}></input>

                        <label >Selecciona imagen </label>
                        <input ref={this.image} type="file" name="image" className="fileInput"></input>
                    </p>
                    <p>
                        <label>Clasificacion</label>
                        <select onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <input type="submit" className="button btn-green" value="Registrar libro"></input>
                    <button onClick={this.props.oncancel} className="button btn-red">Cancelar</button>
                </form>
            </div>
        </div>
    );
    }
}

export default PanelAdd;