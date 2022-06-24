
import { useEffect, useState } from 'react';
import { cadastrarPet, visualizarPet } from './api/petApi';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

function App() {

  const [pet, setPet] = useState('')

  const [verPet, setverPet] = useState([])

  async function cadastrarClick() {
    try {
      const r = await cadastrarPet(pet)
      alert('Pet Cadastrado')
    } catch (err) {
      alert(err.response.data.erro)
    }

  }

  async function listarTodos() {
    const r = await visualizarPet();
    setverPet(r);
  }
  
  useEffect(() => {
    listarTodos();
  }, [])

  return (
    <div className="App">
      <ToastContainer />
      <div className='cadastro'>
      <h1>Cadastre o pet: </h1>
      <input type='text' placeholder='nome pet' value={pet}  onChange={e => setPet(e.target.value)}></input>
      <button onClick={cadastrarClick}>Cadastre</button>
  
      </div>

    <div className='containertabela'> 

    <table>
      <thead>
      
            <th>Nome</th>
      
          
            <th>ID</th>
          
      </thead>

      <tbody>

        {verPet.map (item => 
          
          <tr>
            <td>{item.nome}</td>
            <td>{item.id}</td>
          </tr>
      
          )}

      </tbody>




    </table>


    </div>

    </div>
  );
  }

export default App;
