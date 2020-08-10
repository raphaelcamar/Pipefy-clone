import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';

function Topic({focus}){
const TOPIC = ['Financeiro', 'Marketing', 'Vendas', 'Desenvolvimento', 'TI', 'Customer Service', 'Recursos Humanos'];



function routesFix(str){
    let route  = str.replace(/\s/g, '');
    return route;
}
    return (
        <div className="topic">
        {TOPIC.map(topicos =>{
            return(
                <Link to={routesFix(topicos)} style={{textDecoration : 'none'}}>
                <div className="option" id={topicos.indexOf}>
                    {topicos}
                </div>
                </Link>
            )
        })}
    
    </div>
    )
}
export default Topic;
// {TOPIC.map(topicos =>{
//     return (
//         <Link to={`/${topicos}`}style={{textDecoration : 'none'}}>
//         <div className='option'  onClick={(e) =>{getFocus(e.target)}}>
//         {topicos}
//     </div>
//     </Link>
//     )
// })}