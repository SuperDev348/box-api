import React from 'react'

import MLBHitterBox from './mlbHitterBox'
import MLBPitcherBox from './mlbPitcherBox'
import './sidePanel.css'

const SidePanelMLB = ({awayPitchers, homePitchers, awayBatters, homeBatters}) => {

  const getPerformingPitcher = (category) => {
    const allPitchers = awayPitchers.concat(homePitchers)
    let foundPitcher
    allPitchers.forEach((pitcher) => {
      if (pitcher[category]) {
        foundPitcher = pitcher
      }
    })
    return foundPitcher
  }

  const getPerformingHitter = (collection) => {
    const initialMax = { ...collection[0], rating: 0 }
    return collection.reduce((max, player) => {
      const playerRating = 0.5 * player.home_runs + 0.25 * (player.doubles + player.triples) + 0.25 * player.hits
      return playerRating > max.rating ? { ...player, rating: playerRating } : max
    }, initialMax)
  }

  const winningPitcher = getPerformingPitcher('win')
  const losingPitcher = getPerformingPitcher('loss')
  const homeHitter = getPerformingHitter(homeBatters)
  const awayHitter = getPerformingHitter(awayBatters)

  return (
    <main className="mlb-panel-container">
      <section className="mlb-panel-column">
        <MLBPitcherBox pitcher={winningPitcher} winner />
        <MLBPitcherBox pitcher={losingPitcher} />
      </section>
      <section className="mlb-panel-column">
        <MLBHitterBox hitter={awayHitter} />
        <MLBHitterBox hitter={homeHitter} />
      </section>
    </main>
  )
}

export default SidePanelMLB
