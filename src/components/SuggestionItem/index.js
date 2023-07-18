// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {itemDetails, updateSerachInputBox, key} = props
  const {id, suggestion} = itemDetails

  const updateInputBox = () => {
    updateSerachInputBox(suggestion)
  }

  return (
    <li className="list-item-container">
      <p className="suggestion">{suggestion}</p>
      <img
        onClick={updateInputBox}
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
