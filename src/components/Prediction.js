
const Rank = ({rank}) => {
  return (
    <div>
      <div>
      Current Rank: {rank.current_poll} 
      </div>
      <div>
      Predicted Rank: {rank.predicted_poll}
      </div>
    </div>
  )
}

export default Rank
