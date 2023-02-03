import './App.css'
import teamData from './teamdata.json'
import Teams from './components/Teams'
import Prediction from './components/Prediction'
import Overview from './components/Overview'



const App = () => {
  return (
    <div className='page'>
      <h1>NCAA College Football AP Top 25 2023 Predictions</h1>
      <h3>Georgia tops the way-too-early preseason college football rankings for 2023</h3>
        <Overview overview/>
        <div className='all-teams' id="team-info">
        {teamData.map((teams) => (
          <div className='team-data'>
            <Teams key={teams.id} teams={teams} />
            {teams.poll_position.map((rank) => ( 
              <div className='predictions'>
                <Prediction key = {rank.current_position} rank = {rank}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>   
  )
}

export default App
