const Teams = ({ teams }) => {
  return (
    <div className="card">
      <div className="card-inside">
        <div className="card-front">
          <img src={teams.logo} alt="logo" />
          <h2>{teams.team_name}</h2>
          <h3>Head Coach: {teams.head_coach}</h3>
          <p>Mascot: {teams.mascot_name}</p>
          <p>Conference: {teams.conference}</p>
         </div>
        </div>
    </div>
  )
}

export default Teams
