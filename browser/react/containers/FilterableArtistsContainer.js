import React, { Component } from 'react';
import axios from 'axios';
import Artists from '../components/Artists'
import FilterInput from '../components/FilterInput'

export default class FilterableArtistsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: '',
      changed: false
    }
    this.filterState = this.filterState.bind(this)
  }

  filterState(event) {
    this.setState({currentValue: event.target.value})
  }

  render() {
    var filteredArtists = this.props.artists.filter(artist => {
      return artist.name.toLowerCase().includes(this.state.currentValue.toLowerCase())
    })
    return (
      <div>
      <FilterInput filterState={this.filterState}/>
      <Artists visibleArtists= {filteredArtists}/>
      </div>
      )
    }
}

