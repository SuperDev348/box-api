import React, { useEffect, useMemo, useState } from "react"
import { ALL_LEAGUES } from '../constants'; 
import SidePanel from './SidePanel';
import Boxscore from './Boxscore';
import getGameData from '../api';
import './dashboard.css';

export default function Dashboard({league}){
    const [games, setGames] = useState([]);
    const totals = (game) => {
      let homeTotals = game.home_totals
      let awayTotals = game.away_totals
  
      if (game.league === 'MLB') {
        homeTotals = { ...game.home_batter_totals, errors: game.home_errors }
        awayTotals = { ...game.away_batter_totals, errors: game.away_errors }
      }
  
      return {
        home: homeTotals,
        away: awayTotals,
      }
    }
    const boxscores = useMemo(() => {
      const dashboardItems = []
      if(games){
        games.forEach((game, idx) => {
          if (league === game.league || league === ALL_LEAGUES) {
            const item = (
              <section className="dashboard-item" key={idx}>
                <div className="boxscore">
                  <Boxscore
                    completed={game.event_information.status === 'completed'}
                    league={game.league}
                    homeTeam={game.home_team}
                    awayTeam={game.away_team}
                    homePeriodScores={game.home_period_scores}
                    awayPeriodScores={game.away_period_scores}
                    homeTeamTotals={totals(game).home}
                    awayTeamTotals={totals(game).away} />
                </div>
                <div className="sidepanel">
                  <SidePanel game={game} />
                </div>
              </section>
            )
            dashboardItems.push(item)
          }
        })
        return dashboardItems
      }
      return[];
  }, [games, league])

    useEffect(() => {
        const init = async() => {
            const response = await getGameData()
            setGames(response.payload.body);
        }
        init();
    }, [])
    return (
        <div className="app-container">
            {boxscores}
        </div>
    )
}