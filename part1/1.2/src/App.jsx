const Header = (props) => {
  return( <div>
      <h1>{props.course}</h1>
      </div>
      )
}

const Part = (props) => {
  return(
    <div>
      <p>
      {props.part.subject} {props.part.exercises}
      </p>
    </div>
  )

}
const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
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
  const course= 'Half Stack aplication development'
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
