import { useState, useEffect } from 'react'
import NavBarra from '../components/NavBarra'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const url = "http://localhost:5001/produtos"

const ShowProducts = () => {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    async function fetchData() {
        try {
            const res = await fetch(url);
            const prod = await res.json();
            setProdutos(prod); 
        } catch (error) {
            console.log(error.message);
        }
    }
    fetchData();
  }, []);

  return (
    <div style={{backgroundColor:'#3CB371', height:'100vh'}}>

      <NavBarra/>

      <Table striped bordered hover style={{marginTop:'300px'}}>
      <thead >
        <tr>
          <th>id</th>
          <th>Nome do produto</th>
          <th>Categoria</th>
          <th>Preço</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       {produtos.map((prods) =>(
        <tr key={prods.id}>
          <td>{prods.id}</td>
            <td>{prods.nome}</td>
            <td>{prods.categoria}</td>
            <td>R$ {prods.preco} </td>
            <td>
              
             <Button variant="danger"
            onClick={async () =>{

              // Tentei greg, tentei até dms... até não me sobrar mais forças e implorar para ele funcionar. MAS ELE NÃO QUIS!!! Desculpe greg...
              const res = await fetch(`http://localhost:5001/produtos/ ${prods.id}` ,{
                method:'DELETE',
                headers: {"Content-Type" : "application/json"}
              })  
              const removido = await res.json()
              alert(`Usuario ${removido.nome} excluido`)
            }}
            >
              Excluir</Button></td>
        </tr>
       ))}
      </tbody>
    </Table>
      
    </div>
  )
}

export default ShowProducts