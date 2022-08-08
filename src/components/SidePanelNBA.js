import React from 'react'

import { teamColorMap } from '../constants'
import './sidePanel.css'

const SidePanelNBA = ({highestTotal, awayTeamStats, homeTeamStats, awayTeam, homeTeam}) => {

  const addUpRebounds = (collection) => collection.map((player) => {
    const rebounds = player.offensive_rebounds + player.defensive_rebounds
    return { ...player, rebounds }
  })

  awayTeamStats = addUpRebounds(awayTeamStats)
  homeTeamStats = addUpRebounds(homeTeamStats)
  const awayPoints = highestTotal(awayTeamStats, 'points')
  const homePoints = highestTotal(homeTeamStats, 'points')
  const awayAssists = highestTotal(awayTeamStats, 'assists')
  const homeAssists = highestTotal(homeTeamStats, 'assists')
  const awayRebounds = highestTotal(awayTeamStats, 'rebounds')
  const homeRebounds = highestTotal(homeTeamStats, 'rebounds')

  return (
    <main className="nba-panel-container">
      <header className="nba-panel-header">
        <h6 style={{ backgroundColor: teamColorMap[awayTeam.last_name] }}><b>{`${awayTeam.abbreviation}`}</b></h6>
        <h6 style={{ backgroundColor: teamColorMap[homeTeam.last_name] }}><b>{`${homeTeam.abbreviation}`}</b></h6>
      </header>
      <section className="nba-performer-container">
        <div className="nba-panel-column">
          <p className="nba-panel-line-item">
            {`${awayPoints.first_name[0]}. ${awayPoints.last_name} - ${awayPoints.points}`}
          </p>
          <p className="nba-panel-line-item">
            {`${awayAssists.first_name[0]}. ${awayAssists.last_name} - ${awayAssists.assists}`}
          </p>
          <p className="nba-panel-line-item">
            {`${awayRebounds.first_name[0]}. ${awayRebounds.last_name} - ${awayRebounds.rebounds}`}
          </p>
        </div>
        <div className="nba-panel-column">
          <p className="nba-panel-line-item align-center">Points</p>
          <p className="nba-panel-line-item align-center">Assists</p>
          <p className="nba-panel-line-item align-center">Rebounds</p>
        </div>
        <div className="nba-panel-column">
          <p className="nba-panel-line-item">
            {`${homePoints.first_name[0]}. ${homePoints.last_name} - ${homePoints.points}`}
          </p>
          <p className="nba-panel-line-item">
            {`${homeAssists.first_name[0]}. ${homeAssists.last_name} - ${homeAssists.assists}`}
          </p>
          <p className="nba-panel-line-item">
            {`${homeRebounds.first_name[0]}. ${homeRebounds.last_name} - ${homeRebounds.rebounds}`}
          </p>
        </div>
      </section>
    </main>
  )
}

export default SidePanelNBA
