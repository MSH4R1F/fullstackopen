
const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />

      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />

      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
    </div>
  )
}

const Total = (props) => {
  let parts = props.course.parts
  return (
    <p>Numbers of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts:[
      {
        name: "Fundementals of React",
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;
