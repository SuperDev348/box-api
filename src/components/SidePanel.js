/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import { CardPanel } from 'react-materialize'
import SidePanelNBA from './SidePanelNBA'
import SidePanelMLB from './SidePanelMLB'
import './sidePanel.css'

const SidePanel = ({game}) => {
  /* eslint-disable arrow-body-style */
  const highestTotal = (collection, category) => {
    const initialMax = {}
    initialMax[category] = 0
    return collection.reduce((max, player) => {
      return player[category] > max[category] ? player : max
    }, initialMax)
  }

  const leaguePanel = () => {
    switch (game.league) {
      case 'NBA':
        return (
          <SidePanelNBA
            highestTotal={highestTotal}
            awayTeam={game.away_team}
            homeTeam={game.home_team}
            awayTeamStats={game.away_stats}
            homeTeamStats={game.home_stats} />
        )
      case 'MLB':
        return (
          <SidePanelMLB
            awayPitchers={game.away_pitchers}
            homePitchers={game.home_pitchers}
            awayBatters={game.away_batters}
            homeBatters={game.home_batters} />
        )
      default:
        return <CardPanel />
    }
  }

  return(
    <CardPanel
      style={{ height: '100%', boxShadow: '5px 5px 10px lightGrey' }}
      className="lighten-4">
      <h5 className="side-panel-title">Top Performers</h5>
      <div className="performer-container">
        {leaguePanel()}
      </div>
    </CardPanel>
  )
}

export default SidePanel;
