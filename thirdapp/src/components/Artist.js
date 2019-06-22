import React, {Component} from 'react';
import Header from './Header';
const Url_Artist = "http://localhost:8900/artists"

class Artist extends Component {
    constructor(props){
        super(props);
        this.state = {
            artists: ''
        }
        }
        componentDidMount(){
            console.log(this.props.match.params.artistid)
        } 
    render(){
        return(
            <div>
                <Header/>
            </div>
        )
    }
}


   

export default Artist;