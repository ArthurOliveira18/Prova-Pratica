import React from 'react'
import NavBarra from '../components/NavBarra'
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'

const url = "http://localhost:5001/produtos"

const RegisterProducts = () => {

  const [nome,setNome] = useState('')
  const [categoria,setCategoria] = useState('')
  const [preco,setPreco] = useState('')

  const navigate = useNavigate()

  const handleCadastro = async (e) =>{
    e.preventDefault()

    if(nome !== ""){
      if(categoria !== ""){
        if(preco !== ""){
          console.log("Essa é pra você greg (FAZ O L)")
          const produ = {nome, categoria, preco}
          const res = await fetch(url,{
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(produ)
          })
          alert('Úsuario cadastrado com sucesso')
          setNome('')
          setCategoria('')
          setPreco('')
        } else{
          alert('Preço do produto vazio')
        }
      } else{
        alert('Categoria do produto vazio')
      }
    } else{
      alert('Nome do produto vazio')
    }
  }
  

  return (
    <div style={{backgroundColor:'#3CB371', height:'100vh' , }}>
      <NavBarra/>
      <Container>
        <form style={{marginTop:'300px'}} onSubmit={handleCadastro}>
          
                  <FloatingLabel
                      controlId="floatingInputName"
                      label="Nome do produto"
                      className="mb-3">
                      <Form.Control 
                      type="text"
                      placeholder="Digite seu nome"
                      value={nome}
                    
                      onChange={(e) => {setNome(e.target.value)}} />
                  </FloatingLabel>

                 
                  <FloatingLabel
                      controlId="floatingInputEmail"
                      label="Categoria do produto"
                      className="mb-3">
                      <Form.Control 
                      type="text"
                      placeholder="Categoria..." 
                      value={categoria}
                      
                      onChange={(e) => {setCategoria(e.target.value)}}
                      />
                  </FloatingLabel>

                 
                  <FloatingLabel controlId="floatingPassword" label="Preço do produto">
                      <Form.Control 
                      type="text"
                      placeholder="Preço do produto" 
                      className="mb-3" 
                      value={preco}
                      
                      onChange={(e) => {setPreco(e.target.value)}}
                      />
                  </FloatingLabel>

                  
                  

                

                  <Button variant="primary" type='submit'>
                      Cadastrar produto
                  </Button>

                  
              </form>
            </Container>
      </div>
  )
}

export default RegisterProducts