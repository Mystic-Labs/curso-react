import React from 'react';
import './App.css';
import Tabela from './Tabela';

function App() {
  const autores =[
    {
      nome:'paulo',
      livro:'react',
      preco:'10'
    },
    {
      nome:'daniel',
      livro:'java',
      preco:'1000'
    },
    {
      nome:'Marcos',
      livro:'design',
      preco:'150'
    },
    {
      nome:'Bruno',
      livro:'DevOps',
      preco:'100'
    },
    {
      nome:'vish',
      livro:'nada',
      preco:'999'
    }
  ];
  return (
    <div className="App">
    <Tabela autores = { autores } />
    </div>
  );
}

export default App;
