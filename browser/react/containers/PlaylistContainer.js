import axios from "axios";
import React, { Component } from 'react';
import NewPlaylist from "../components/NewPlaylist"
export default class PlaylistContainer extends Component {
    constructor (props) {
    super(props);
    this.state= {currentValue: "",changed:false}
    this.filterState = this.filterState.bind(this)
    this.submitFunction = this.submitFunction.bind(this)
  }
filterState(event){
    this.setState({currentValue: event.target.value,
        changed:true
})
}
submitFunction(){
    // if (this.state.currentValue.length>16){
    //     alert("TOOO LONG")
    // }
    console.log(this.state.currentValue)
    this.setState({currentValue:"",changed:false})
    axios.post('/api/playlists', {name: this.state.currentValue})
    .then(res => res.data)
    .then(result => {
    this.props.setPlaylist(result) // response json from the server!
  })
}
render(){
    return (<NewPlaylist submitThing = {this.submitFunction} filterState = {this.filterState} value={this.state.currentValue} changed={this.state.changed}/>)
}}
