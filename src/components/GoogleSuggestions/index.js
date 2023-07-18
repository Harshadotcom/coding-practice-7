// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInputVal: '',
  }

  updateSerachInputBox = suggestion => {
    this.setState({searchInputVal: suggestion})
  }

  updateUserInput = event => {
    this.setState({searchInputVal: event.target.value})
  }

  render() {
    const {searchInputVal} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInputVal.toLowerCase()),
    )

    return (
      <div className="web-page">
        <div className="bg-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="bottom-section">
            <div className="searchContainer">
              <img
                className="search"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                value={searchInputVal}
                className="search-box"
                placeholder="Search Google"
                type="search"
                onChange={this.updateUserInput}
              />
            </div>
            <div>
              <ul className="unodered-list">
                {searchResults.map(eachItem => (
                  <SuggestionItem
                    updateSerachInputBox={this.updateSerachInputBox}
                    itemDetails={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
