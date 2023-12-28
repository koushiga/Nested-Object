import './App.css';
import Nest from './nest';

function App() {
  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },
    {
    name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
  } 
  ]

return(
  <div className="App">
    <h1>Nested Object</h1>
    <Nest obj={employee}/> 
  </div>
);
}

export default App;
