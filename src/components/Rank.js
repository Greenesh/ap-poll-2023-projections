import Rank from "./Prediction"

const Prediction = (ranking) => {
  return (
    <div>
      {ranking.poll_position.map((poll) => (
        <Rank key = {poll.poll_position} 
        current = {poll.current_position}
        predicted = {poll.predicted_position}/>
      ))}
    </div>
  )
}

export default Prediction 