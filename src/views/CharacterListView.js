import React from "react";
import { connect } from "react-redux";

import { fetchChars } from '../actions'

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>fetching data...</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mstp = state => {
  return {
    characters: state.characters,
    loading: state.loading
  }
}
// the characters and the fetching boolean
export default connect(
  mstp,
  {
    fetchChars
  }
)(CharacterListView);