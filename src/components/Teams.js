const Teams = ({ teams }) => {
  return (
    <div className="card">
      <div className="card-inner">
      <img src={teams.logo} alt="logo" className="logo" />
      <h2>{teams.team_name}</h2>
      <h4>Head Coach: {teams.head_coach}</h4>
        <p>Mascot: {teams.mascot_name}</p>
        <p>Conference: {teams.conference}</p>
        <p>2022 Record: {teams.wins} - {teams.losses}</p>
        </div>
    </div>
  )
}

export default Teams
