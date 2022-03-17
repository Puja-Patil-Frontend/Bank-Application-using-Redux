import React from 'react';
import './App.css';
import Bank from './Bank/Bank';
import { connect } from 'react-redux';
import { Component } from 'react';

 class App extends Component{
   render(){
  return(
      <div className='App'>
        <img src= "https://companiesmarketcap.com/img/company-logos/512/AXISBANK.BO.png" 
        className="App-logo" 
        alt='logo'/>
        <h1>AXIS BANK</h1>
        <h2>Balance:${this.props.balance}</h2>
        <div className='atm'>
          <h2>Withdraw the Amount</h2>
          <button className='btn1' onClick={()=>this.props.withdraw(500)}>withdraw $500</button>
          <button className='btn1' onClick={()=>this.props.withdraw(1000)}>withdraw $1000</button>
        </div>
        <Bank/>
      </div>
    )
  }
 }

 const mapStateToProps = state => {
  return { 
    balance: state.balance,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //in last app values were hard coded, now we pass a payload depending on which button is clicked
    withdraw: (amount) => dispatch({type:'withdraw', value: amount}),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
