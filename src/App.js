import React from 'react';
import './Sass/main.scss';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Main from './Componentes/Paginas/Main';



class App extends React.Component {
  
  showTime() {
    let d = (new Date).toLocaleTimeString();
    return d;
  }
  
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header nombre={"Movies"} date={this.showTime()}/>
          <Main/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
