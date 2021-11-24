import React, { Component } from 'react';
import BankService from '../services/BankService';

class CreateBankComponents extends Component {
    constructor(props){
        console.log("I am from CreateBankComponents Component");

        super(props)

        this.state = {
            bankName: '',
            bankIfscCode: '',
            bankBranchAddress: '',
            bankPoolingAccountNumber: ''
        }
        this.changeBankNameHandler = this.changeBankNameHandler.bind(this);
        this.changeBankIfscCodeHandler = this.changeBankIfscCodeHandler.bind(this);
        this.changeBankBranchAddresseHandler = this.changeBankBranchAddresseHandler.bind(this);
        this.changeBankPoolingAccountNumberHandler = this.changeBankPoolingAccountNumberHandler.bind(this);
        this.saveBank = this.saveBank.bind(this);
    }

    changeBankNameHandler= (event) =>{
        this.setState({bankName: event.target.value});
    }
    changeBankIfscCodeHandler= (event) =>{
        this.setState({bankIfscCode: event.target.value});
    }
    changeBankBranchAddresseHandler= (event) =>{
        this.setState({bankBranchAddress: event.target.value});
    }
    changeBankPoolingAccountNumberHandler= (event) =>{
        this.setState({bankPoolingAccountNumber: event.target.value});
    }

    saveBank = (e) => {
        console.log("CreateBankComponents saveBank function");
        e.preventDefault();

        let bank ={bankName: this.state.bankName, 
            bankIfscCode: this.state.bankIfscCode, 
            bankBranchAddress: this.state.bankBranchAddress, 
            bankPoolingAccountNumber: this.state.bankPoolingAccountNumber};
        console.log('CreateBankComponents saveBank Function Bank data ::===> ' +JSON.stringify(bank));

        BankService.saveBankDetails(bank).then(resp =>{
            this.props.history.push("/banks");
        });

    }

    cancel(){
        console.log("CreateBankComponents cancel function");
        this.props.history.push('/banks');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center"> Add Bank Details</h3>
                                <div className = "card-body" >
                                    <form>
                                        
                                        <div className = "from-group">
                                            <label>Bank Name:</label>
                                            <input placeholder = "Bank Name" name="bankName" className = "form-control"
                                            value = {this.state.bankName} onChange= {this.changeBankNameHandler}/>
                                        </div>

                                        <div className = "from-group">
                                            <label>Bank IFSC Code:</label>
                                            <input placeholder = "Bank IFSC Code" name="bankIfscCode" className = "form-control"
                                            value = {this.state.bankIfscCode} onChange= {this.changeBankIfscCodeHandler}/>
                                        </div>

                                        <div className = "from-group">
                                            <label>Bank Branch Address:</label>
                                            <input placeholder = "Bank Branch Address" name="bankBranchAddress" className = "form-control"
                                            value = {this.state.bankBranchAddress} onChange= {this.changeBankBranchAddresseHandler}/>
                                        </div>

                                        <div className = "from-group">
                                            <label>Bank Pooling Account Number:</label>
                                            <input placeholder = "Bank Pooling Account Number" name="bankPoolingAccountNumber" className = "form-control"
                                            value = {this.state.bankPoolingAccountNumber} onChange= {this.changeBankPoolingAccountNumberHandler}/>
                                        </div>

                                        <button className="btn btn-success" 
                                            onClick={this.saveBank}>Save</button>
                                        
                                        <button className="btn btn-danger" 
                                             onClick={this.cancel.bind(this)} 
                                                style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default CreateBankComponents;