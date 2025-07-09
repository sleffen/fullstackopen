const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
      {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part ={props.parts[0]} />
      <Part part ={props.parts[1]} />
      <Part part ={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const exercises = props.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)
  return (
    <div>
      <p>Number of exercises {exercises} </p>
    </div>
  )
}

const App = () => {
  const course= 'Half Stack aplication development'
  const parts = [
    {
      name : 'Fundamentals of React',
      exercises : 10
    },
    {
      name : 'Using props to pass data',
      exercises : 7
    },
    {
      name : 'State of a component',
      exercises : 14
    }
  ]
 return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App
