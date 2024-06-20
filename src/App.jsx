import axios from 'axios';
import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const url = 'http://localhost:3000/produto'

  const [id, setId] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [foto, setFoto] = useState('');
 
  const [classInserir, setClassInserir] = useState('');
  const [classEditar, setClassEditar] = useState('sumir');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url,)
      .then(res => setData(res.data))
  }, [data, setData])

  const Inserir = (e) => {
    axios.post(url, {
      produto,
      valor,
      quantidade,
      foto
    })
  }

  const Cadastrar = (e) => {
    e.preventDefault()

    if(produto === ''){
      alert("Insira o Nome do Produto")
    } else if(valor === ''){
      alert("Insira o Valor do Produto")
    } else if(quantidade === ''){
      alert("Insira a Quatidade do Produto")
    } else if(foto === ''){
      alert("Insira uma Imagem para o Produto")
    }else {
      alert("Produto cadastrado com sucesso !")
    }

    alert("Cadastrando...")
  }

  return (
    <div className='container'>
      <h1 className='mt-3 mb-3'>Cadastro de Produtos</h1>

      <form onSubmit={Cadastrar} className='mb-5'>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              value={produto}
              placeholder='Nome do Produto'
              className='form-control'
              onChange={(e) => setProduto(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={valor}
              placeholder='Valor'
              className='form-control'
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={quantidade}
              placeholder='Qtd'
              className='form-control'
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              value={foto}
              placeholder='Url da Imagem'
              className='form-control'
              onChange={(e) => setFoto(e.target.value)}
            />
          </div>
        </div>

        <div className="btn-group">
          <button type='submit' className={`btn btn-success ${classInserir}`} onClick={Inserir}>Inserir</button>
          <button className={`btn btn-primary ${classEditar}`}>Salvar</button>
        </div>
      </form>

      <table className='table table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nome do Produto</th>
            <th scope='col'>Valor</th>
            <th scope='col'>Qtd</th>
            <th scope='col'>Url da imagem</th>
            <th scope='col text-center'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope='row'>{item.id}</th>
              <td>{item.nome}</td>
              <td>{item.valor}</td>
              <td>{item.quantidade}</td>
              <td>
                <img width={70} src={item.foto} alt={item.nome} />
              </td>
              <td>
                <div className="btn-group d-flex gap-1">
                  <button className="btn btn-warning">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="btn btn-danger" onClick={Remove(item.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App
