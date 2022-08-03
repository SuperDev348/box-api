import React from 'react'
import PropTypes from 'prop-types'

import './sidePanel.css'

const MLBHitterBox = (props) => {
  const { hitter } = props

  return (
    <div className="mlb-panel-child">
      <p className="mlb-panel-line-item">
        {`${hitter.display_name[0]}. ${hitter.last_name}`}
      </p>
      <p className="mlb-team-position-subtitle  mlb-panel-line-item">
        {`${hitter.team_abbreviation} - ${hitter.position}`}
      </p>
      <p className="mlb-stat-line mlb-panel-line-item">
        {hitter.batting_highlights}
      </p>
    </div>
  )
}

MLBHitterBox.propTypes = {
  hitter: PropTypes.object,
}

MLBHitterBox.defaultProps = {
  hitter: {},
}

export default MLBHitterBox
