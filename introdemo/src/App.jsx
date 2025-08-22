import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Content = ({section, count}) => {

    return (
      <>
        <p>{section}: {count} parts</p>
      </>
    )
}

const App = () => {

  const course = 'Half Stack Application Development'
  const sections = [
    { name: 'Fundamentals of React', count: 10 },
    { name: 'Using Props to Pass Data', count: 7 },
    { name: 'State of a Component', count: 14 },
  ]

  const total = sections.reduce((sum, section) => sum + section.count, 0)

  return (
    <div>
      <Header title={course}/>

      {sections.map((section, index) => (
        <Content 
          key={index} 
          section={section.name} 
          count={section.count}
        />
      ))}

      <p>Number of exercises: {total} parts</p>
    </div>
  )
}

export default App