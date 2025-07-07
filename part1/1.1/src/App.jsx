const Header = (props) => {
  return( <div>
      <h1>{props.course}</h1>
      </div>
      )
}

const Content = (props) => {
  return(
    <div>
       <p>
         {props.part1.subject} {props.part1.exercises}
      </p>
      <p>
         {props.part2.subject} {props.part2.exercises}
      </p>
      <p>
         {props.part3.subject} {props.part3.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course= 'Half Stack application development'
  const part1 = {subject : 'Fundamentals of React', exercises : 10}
  const part2 = {subject : 'Using props to pass data', exercises : 7}
  const part3 = {subject : 'State of a component', exercises : 14}
  return(
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total  part1 = {part1} part2 = {part2} part3 = {part3} />
    </div>

  )
}
export default App
