import React from 'react';
import { InformacionPersona } from '../ComponentesFuncionales';
import Api from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regristros: [],
            nombre: "",
            correo:""
        }
        this.llenarCampo  = this.llenarCampo.bind(this); //para que tome el this global
        this.nuevoItem  = this.nuevoItem.bind(this);
    }

    //https://pokeapi.co/api/v2/pokemon
    async consumirApi(){
        try{
            var reques = await Api.get("https://pokeapi.co/api/v2/pokemon");
            console.log(reques.data);
        }
        catch(error){
            console.error(error);
        }
    }

    llenarCampo = (e) => {
        console.log(e.target.id);
        let id = e.target.id;
        if(id=== "correo"){
            this.setState({correo: e.target.value});
        }else{
            this.setState({nombre: e.target.value});
        }
    }

    nuevoItem = (e) =>{
        e.preventDefault();
        let item = {
            correo: this.state.correo,
            nombre: this.state.nombre,
            imagen: ""
        }

        this.setState(
            {
                registros: this.state.regristros.push(item)
            }
        )
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card formulario col">
                        <button onClick={this.consumirApi}  className="btn btn-primary">Get Pokemon</button>
                        <form>
                            <div className="form-group">
                                <label >Email address</label>
                                <input onChange={this.llenarCampo} type="text" className="form-control" id="correo" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input onChange={this.llenarCampo} type="text" className="form-control" id="exampleInputPassword1" id="nombre"/>
                            </div>
                            <div className="form-group form-check">
                                <input onChange={this.llenarCampo} type="checkbox" className="form-check-input" id="nombre" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button onClick={this.nuevoItem} type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                    <div className="col">
                        {
                            [...this.state.regristros].map((item, i) =>
                                {
                                    return <InformacionPersona nombre={item.nombre} correo={item.correo}/>
                                }
                            )
                        }
                </div>
                </div>
            </div>
        );
    }
}

export default Register;