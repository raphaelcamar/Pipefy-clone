import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchItem from './components/SearchItem';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Financeiro from './Pages/Financeiro'
import Marketing from './Pages/Marketing'
import Vendas from './Pages/Vendas'
import TI from './Pages/TI'
import CustomerService from './Pages/CustomerService'
import RecursosHumanos from './Pages/RecursosHumanos/RecursosHumanos'
import Desenvolvimento from './Pages/Desenvolvimento'
import Topic from './components/Topic';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Header/>
      <SearchItem />
      <Topic/>
        <Route path="/Financeiro" exact component={Financeiro}/>
        <Route path="/Marketing" exact component={Marketing}/>
        <Route path="/Vendas" exact component={Vendas}/>
        <Route path="/TI" exact component={TI}/>
        <Route path="/CustomerService" exact component={CustomerService}/>
        <Route path="/RecursosHumanos" exact component={RecursosHumanos}/>
        <Route path="/Desenvolvimento" exact component={Desenvolvimento}/>
    </div>
    <Footer/>
    
    </BrowserRouter>
    </>
  );
}

export default App;
