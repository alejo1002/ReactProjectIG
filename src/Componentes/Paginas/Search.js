import React from 'react';
import SearchForm from '../SearchForm';
import AlertMessage from '../AlertMessage';
import CardList from '../CardList';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            message: "Enter a word",
            role : "info"
        }
    }

    getData = (dat) =>{
      console.log("DATA1 ", dat);
      let dat2 = JSON.stringify(dat);
      let dat3 = JSON.parse(dat2);
      if(dat3.length != 0){
        this.setState({
          message : `Registers count ${dat3.length}`,
          data : dat3,
          role: "success"
        });
        console.log("DATA2: ", this.state.data);
        this.render();
      }
      else{
        this.setState({
          message : "Zero Matches!!!",
          role: "danger"
        });
        this.render();
      }
    }

    render(){
        return(
            <div className="container search-container">
                <div className="row">
                    <div className="col-md-4">
                        <SearchForm getDat = {this.getData} />
                        <AlertMessage rol={this.state.role} message = {this.state.message} />
                    </div>
                    <div className="col-md-8">
                      <CardList movies= {this.state.data}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;