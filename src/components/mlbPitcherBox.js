import React from 'react'
import PropTypes from 'prop-types'

import './sidePanel.css'

const MLBPitcherBox = (props) => {
  const { pitcher, winner } = props
  const badgeColor = winner ? 'green' : 'red'
  const badgeLabel = winner ? 'WIN' : 'LOSS'

  return (
    <div className="mlb-panel-child">
      <p className="mlb-panel-line-item">
        <span className="win-loss-badge" style={{ backgroundColor: badgeColor }}>{badgeLabel}</span>
        {` - ${pitcher.display_name[0]}. ${pitcher.last_name}`}
      </p>
      <p className="mlb-team-position-subtitle mlb-panel-line-item">
        {`${pitcher.team_abbreviation} - ${pitcher.pitch_order === 1 ? 'SP' : 'RP'}`}
      </p>
      <p className="mlb-stat-line mlb-panel-line-item">
        {`${pitcher.innings_pitched} IP, ${pitcher.hits_allowed} H, ${pitcher.runs_allowed} R, ${pitcher.earned_runs} ER, ${pitcher.strike_outs} K`}
      </p>
    </div>
  )
}

MLBPitcherBox.propTypes = {
  pitcher: PropTypes.object,
  winner: PropTypes.bool,
}

MLBPitcherBox.defaultProps = {
  pitcher: {},
  winner: false,
}

export default MLBPitcherBox
