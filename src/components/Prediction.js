
const Rank = ({rank}) => {
  return (
    <div className="poll">
      <div className="prediction">
        <p>Current Rank: {rank.current_poll}</p>
        <p className="new-rank">Predicted Rank: {rank.predicted_poll}</p>
      </div>
    </div>
  )
}

export default Rank
