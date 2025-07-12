import { useState } from 'react'

const Header = () => <h1>give feedback</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({ text, value }) => {

  return (
  <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = ({all}) => {
  const {good, neutral, bad} = all
  const sum = good + neutral + bad
  const average = sum ? (good - bad) / sum : 0
  const positive = sum ? ((good / sum) * 100) : 0

  if(sum === 0 ) {return (<p>No feedback given</p>)}
  return (
      // <h2>Statistics</h2>
      <table>
      <caption> <h2>Statistics</h2></caption>
      <tbody>

        {Object.entries(all).map(([text, value]) => (
          <StatisticLine key= {text} text={text} value={value} />
        ))}
        <StatisticLine key= 'total' text='total' value={sum} />
        <StatisticLine key= 'average' text='average' value={average.toFixed(1)} />
        <StatisticLine key= 'positive' text='positive' value={positive.toFixed(1)+'%'} />
      </tbody>
      </table>

  )
}

const App = () => {
  const [all, setAll] = useState({good: 0, neutral: 0, bad: 0 })
  const handleAll = (feedback) => () => {
    setAll({...all, [feedback] : all[feedback] + 1})
  }

  return (
    <div>
      <Header />
      <Button onClick={handleAll('good')} text='good' />
      <Button onClick={handleAll('neutral')} text='neutral' />
      <Button onClick={handleAll('bad')} text='bad' />
      <Statistics all= {all}/>
    </div>
  )
}

export default App
