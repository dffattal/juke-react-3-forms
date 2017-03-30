import React, { Component } from 'react';
import axios from 'axios';

export default class FilterableArtistsContainer extends Component {
  constructor() {
    super(props)
    this.state = {
      visibleArtists: []
      // CONTINUE HERE
    }
    this.filterState = this.filterState.bind(this)
  }
  filterState(newArtists) {
    this.setState({visibleArtists: newArtists})
  }

  render() {
      return (
      <div>
      <Artists />
      <FilterableArtists filterState={this.filterState}/>
      </div>
      )
    }
}

