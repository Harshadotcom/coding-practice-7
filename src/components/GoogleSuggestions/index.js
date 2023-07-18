// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionList} = this.props
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
                className="search-box"
                placeholder="Search Google"
                type="search"
              />
            </div>
            <div>
              <ul className="unodered-list">
                {suggestionList.map(eachItem => (
                  <SuggestionItem itemDetails={eachItem} key={eachItem.key} />
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
