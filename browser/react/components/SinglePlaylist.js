import axios from "axios";
import React, { Component } from 'react';
import Songs from './Songs'

class SinglePlaylist extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    selectPlaylist(playlistId);
  }
  componentWillReceiveProps() {
    if (this.props.routeParams.playlistId !== this.props.selectedPlaylist.id) {
      this.props.selectPlaylist(this.props.routeParams.playlistId)
    }
  }
  render() {
    return (
      <div>
        <h3>{ this.props.selectedPlaylist.name }</h3>
        <Songs songs={this.props.selectedPlaylist.songs} /> {/** Hooray for reusability! */}
        { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }
}

export default SinglePlaylist
