import React from 'react'
import { Row, Col, CardPanel } from 'react-materialize'
import { v4 as uuidv4 } from 'uuid';

import leagueDisplays from './leagueDisplays'
import TeamTile from './TeamTile'
import './boxscore.css'

const Boxscore = ({
  completed,
  awayPeriodScores,
  homePeriodScores,
  awayTeam,
  homeTeam,
  awayTeamTotals,
  homeTeamTotals,
  league
}) => {
  
  const lineScores = () => {
    const lineScores = {
      header: [],
      away: [],
      home: [],
    }

    const columnCount = Math.max(awayPeriodScores.length, leagueDisplays[league].minColumnCount)

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= columnCount; i++) {
      if (i === 0) {
        lineScores.header.push(<td className="boxscore-cell grey lighten-2" key={uuidv4()} />)
        lineScores.away.push(<td className="boxscore-cell grey lighten-2" key={uuidv4()}>{awayTeam.abbreviation}</td>)
        lineScores.home.push(<td className="boxscore-cell grey lighten-2" key={uuidv4()}>{homeTeam.abbreviation}</td>)
      } else {
        const idx = i - 1
        lineScores.header.push(<td className="boxscore-cell  grey lighten-2" key={uuidv4()}>{i}</td>)
        lineScores.away.push(<td className="boxscore-cell" key={uuidv4()}>{awayPeriodScores[idx]}</td>)
        lineScores.home.push(<td className="boxscore-cell" key={uuidv4()}>{homePeriodScores[idx]}</td>)
      }
    }

    const summary = gameSummary()
    lineScores.header = lineScores.header.concat(summary.header)
    lineScores.away = lineScores.away.concat(summary.away)
    lineScores.home = lineScores.home.concat(summary.home)

    return lineScores
  }

  const gameSummary = () => {

    const lineScores = {
      header: [],
      away: [],
      home: [],
    }

    return leagueDisplays[league].gameSummary(awayTeamTotals, homeTeamTotals, lineScores)
  }

  const gameStatus = () => {

    if (!completed) {
      return leagueDisplays[league].gameStatus(awayPeriodScores, homePeriodScores)
    }
    return 'Final'
  }
  const scores = lineScores();

  return (
    <div className="boxscore-container">
      <Row>
        <Col m={12} s={12}>
          <CardPanel
            className="grey lighten-4 with-footer black-text">
            <Row>
              <table className="boxscore-table">
                <tbody>
                  <tr className="boxscore-row">{scores.header}</tr>
                  <tr className="boxscore-row">{scores.away}</tr>
                  <tr className="boxscore-row">{scores.home}</tr>
                </tbody>
              </table>
            </Row>
            <Row className="grey lighten-2" style={{ display: 'flex' }}>
              <Col className="boxscore-footer" m={5}>
                <TeamTile teamName={awayTeam.last_name} teamCity={awayTeam.first_name} />
              </Col>
              <Col className="boxscore-footer game-duration-status" m={2}>
                {gameStatus()}
              </Col>
              <Col className="boxscore-footer" m={5}>
                <TeamTile teamName={homeTeam.last_name} teamCity={homeTeam.first_name} />
              </Col>
            </Row>
          </CardPanel>
        </Col>
      </Row>
    </div>
  )
}

export default Boxscore
