import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Multiselect} from 'multiselect-react-dropdown'


function App() {

  const [data,setData] = useState([]);

  useEffect(()=>
  {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(resp => setData(resp.data))
  },[])


  return (
    <div className="App">
        <h1>MultiSelect Input</h1>
        <div className="multi">
        <Multiselect options={data} displayValue='name'/>
        </div>
    </div>
  );
}

export default App;
