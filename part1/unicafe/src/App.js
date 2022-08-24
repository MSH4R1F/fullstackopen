import { useState } from 'react'



const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>{props.name}</button>
  )
}
const StatisticsLine = (props) => {
  return (<tr><td>{props.name}</td><td>{props.number}</td></tr>)
}
const Statistics = (props) => {
  if (props.modified === true) {
    let allData = []
    props.name.forEach((element,index) => {
      allData.push(<StatisticsLine key = {element} name = {element} number = {props.number[index]} />)
    })
    return (
      <table>
        <thead>
        {allData}
        </thead>
      </table >
    )
  }
  return (
    <p>No feedback given</p>
  )
  
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [modified,setModified] = useState(false)
  function setGoodHandle() {
    setGood(good+1)
    setModified(true);
  }
  function setBadHandle() {
    setBad(bad+1)
    setModified(true);
  }
  function setNeutralHandle() {
    setNeutral(neutral+1)
    
    setModified(true);
  }
  const calculateAverage = () => {
    let total = good - bad
    return total / (good+neutral+bad);
  }
  const calculatePositive = () => {
    return good/(good+neutral+bad) * 100;
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button name = "good" handleClick= {setGoodHandle}/>
      <Button name = "neutral" handleClick= {setNeutralHandle}/>
      <Button name = "bad" handleClick= {setBadHandle}/>
      <h1>statistics</h1>
      <Statistics modified = {modified} name ={["good", "neutral", "bad", "all", "average", "positive"]} number={[good,neutral,bad,good+bad+neutral,calculateAverage(),calculatePositive()+"%"]} />
    </div>
  )
}

export default App