import { useState } from 'react'


const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad

  return (
    <>
    {total > 0 ? (
    <table>
      <thead><tr><th>Statistic</th><th>Value</th></tr></thead>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
      </tbody>
      <tfoot>
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average Score" value={(good - bad) / total} />
        <StatisticLine text="Positive %" value={(good * 100) / total} />
      </tfoot>
    </table>
      ) : (
        <div>No feedback given</div>
      )}
   </>
  )
}
const StatisticLine = props => (
  <tr><th>{props.text}:</th><td>{props.value}</td></tr>
)
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))

  //console.log(votes);
  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

      <h1>Quote</h1>
      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]}</p>
      <Button onClick={() => setVotes(votes.map((v, i) => i === selected ? v + 1 : v))} text="Vote" />
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="Next Anecdote" />
    </div>
  )
}

export default App