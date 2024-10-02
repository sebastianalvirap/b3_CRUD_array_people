import { useState } from 'react'
import './App.css'
import { People } from './components/people';

function App() {

  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Carlos Alberto",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png"
    },
    {
      id: 2,
      name: "Yulieth Samira",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png"
    },
    {
      id: 3,
      name: "Evelin Aislinn",
      role: "QA",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png"
    },
  ]);

  return (
    <div>
      <People
        people={people}
        setPeople={setPeople}
      />
    </div>
  )
}

export default App

