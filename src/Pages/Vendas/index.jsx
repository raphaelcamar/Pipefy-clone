import React from 'react';
import Card from '../../components/Card';
import Api from '../../Api/api2.json'
import Topic from '../../components/Topic';
import './styles.css'

function Vendas(){

const cards = Api.Vendas[0].Cards;

    return (
        <>
        <div className="content-card">
      {cards.map(items =>{
          return (
              <Card image={items.image} description={items.description} title={items.title}/>
          )
      })}
      
      </div>     
              
        </>
    )
}
export default Vendas;