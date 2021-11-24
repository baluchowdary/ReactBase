//import logo from './logo.svg';
import './Appbankmodule.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BankComponents from './components/BankComponents';
import BankFooterComponent from './components/BankFooterComponent';
import BankHeaderComponent from './components/BankHeaderComponent';
import CreateBankComponents from './components/CreateBankComponents';
import UpdateBankComponents from './components/UpdateBankComponents';
import ViewBankComponents from './components/ViewBankComponents';

function Appbankmodule() {
  return (
    <div>
      <Router>
        <div className = "container">
      <BankHeaderComponent/>
        <div className="container">
          <Switch>
              <Route path="/banks" exact component= {BankComponents}/>
              <Route path="/savebanks" component = {CreateBankComponents}/>
              <Route path="/updatebankdetails/:bankId" component = {UpdateBankComponents}/> 
              <Route path="/viewbankdetails/:bankId" component = {ViewBankComponents}/> 
          </Switch>      
        </div>
      <BankFooterComponent/>
      </div>
      </Router>
    </div>
    
  );
}

export default Appbankmodule;
