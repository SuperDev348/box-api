import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-materialize'

import {teamColorMap} from '../constants'
import './teamTile.css'

const TeamTile = (props) => {
  const { teamName, teamCity } = props

  return (
    <Card
      style={{ backgroundColor: teamColorMap[teamName], margin: 0 }}
      className="team-tile white-text"
      title={teamName.toUpperCase()}>
      {teamCity}
    </Card>
  )
}

TeamTile.propTypes = {
  teamName: PropTypes.string,
  teamCity: PropTypes.string,
}

TeamTile.defaultProps = {
  teamName: '',
  teamCity: '',
}

export default TeamTile
