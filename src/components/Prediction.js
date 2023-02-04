
const Rank = ({rank}) => {
  return (
    <div className="poll">
        <p className="current">Current Rank: {rank.current_poll}</p>
        <div className="predicted">
          <div className="prediction">
        <p className="new-rank">{rank.predicted_poll}</p>
        </div>
        </div>
      </div>
  )
}

export default Rank
