import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [web, setWeb] = useState('');
  const [category, setCategory] = useState('');

  const btnWeb = ['Todos', 'Buscape', 'Mercado Livre']
  const btnCategory = ['Tv', 'Celular', 'Geladeira'];
  const [dados, setDados] = useState([]);

  useEffect(() => {
    let result = '';
    switch (web) {
      case 'Buscape':
        if (web && category) {
          axios.get('http://localhost:3000/products/b/' +category.toLowerCase())
            .then(res => {
              setDados(res.data);
            });
        }
        break;
      case 'Mercado Livre':
        if (web && category) {
          axios.get('http://localhost:3000/products/m/' + category.toLowerCase())
            .then(res => {
              setDados(res.data);
            });
        }
        break;
      case 'Todos':
        result = `Todos -> ${category}`;
        break;
      default:
        break;
    }

  }, [web, category]);
  
  useEffect(() => {
    console.log(dados)
  }, [dados]);


  return (
    <div className="initial-page">

      <div className="header">

        <div className="dropBtn">
          <select
            name='web'
            id='web'
            value={useState.web}
            onChange={(e) => setWeb(e.target.value)}
          >
            {btnWeb.map((item, index) => (
              <option value={item} key={index} >{item}</option>
            ))};
          </select>
        </div>

        <div className="dropBtn">
          <select
            name='category'
            id='category'
            onChange={(e) => setCategory(e.target.value)}
          >
            {btnCategory.map((item, index) => (
              <option value={item} key={index}>{item}</option>
            ))};
          </select>
        </div>

        <div className="filter">
          <input type="text" />
          <button>search</button>
        </div>

      </div>
      <div className="contente">
        <div className="waper">
          {dados.map((item) => (
            <div className="centro">
              <div className="card">
                <div className="imgBox">
                  <img src={item.photo} alt="" />
                  <h2>{item.price}</h2><br />
                </div>
                <div className="textBox">
                  <p>{item.title}</p>
                  <div className="btns">
                    <h5>{item.web}</h5>
                    <h4>Categoria -> {item.category}</h4>
                    <a href={item.site} target="_blanck">Ver Página</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="waper-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

