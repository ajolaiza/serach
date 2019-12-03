import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
    onSearchSubmit(term){
        axios.get(' http://ecommerce.3callistos.com/api/v1/items',{ 
            params:{ query:'term'},
            headers:{
                Authorization:'clientId 2343252bafaer34'
            }

        })
    };

render(){
    return (
        <div className="ui container" style={{marginTop:"10px"}}>
            
            <SearchBar onSubmit={this.onSearchSubmit}/> 
        </div>
    );
    }
}
export default App;