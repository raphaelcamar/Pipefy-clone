import React from 'react';
import Card from '../../components/Card';
import Api from '../../Api/api2.json'
import Topic from '../../components/Topic';
import './styles.css'

function Financeiro(){

const cards = Api.Financeiro[0].cards;

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
export default Financeiro;