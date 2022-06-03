import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Multiselect } from 'multiselect-react-dropdown'


function App() {

  const [data, setData] = useState([]);

  const opt = 
  [
    {ad:"k"},
    {ad:"n"},
    {ad:"l"},
  ]

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(resp => setData(resp.data) )
  }, [])


  const handleSelect = (val) =>
  {
    let arr = [];
    for (let i = 0; i < val.length; i++)
    {
      let newArr = data.filter((e)=> e.name.toLowerCase().includes(val[i].ad))
      
      
    }

    console.log(arr);
    

    
  }


  return (
    <div className="App">
      <h1>MultiSelect Input</h1>
      <div className="multi">
        <Multiselect onSelect={handleSelect} options={opt} displayValue='ad' />
      </div>
      <table>
        <thead>
        <tr>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </tr>
        </thead>
       <tbody>
       {
          data.map(e=>
            {
              return(
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                </tr>
              )
            })
        }
        </tbody>

      </table>
    </div>
  );
}

export default App;
