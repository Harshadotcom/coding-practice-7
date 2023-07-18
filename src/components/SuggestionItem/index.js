// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {itemDetails} = props
  const {id, suggestion} = itemDetails

  return (
    <li className="list-item-container">
      <p className="suggestion">{suggestion}</p>
      <img
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
