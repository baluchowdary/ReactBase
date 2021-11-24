import React, { Component } from 'react';
import BankService from '../services/BankService';

class UpdateBankComponents extends Component {
    constructor(props){
        console.log("I am from UpdateBankComponents Component");

        super(props)

        this.state = {
            bankId: this.props.match.params.bankId,
            bankName: '',
            bankIfscCode: '',
            bankBranchAddress: '',
            bankPoolingAccountNumber: ''
        }
        this.changeBankNameHandler = this.changeBankNameHandler.bind(this);
        this.changeBankIfscCodeHandler = this.changeBankIfscCodeHandler.bind(this);
        this.changeBankBranchAddresseHandler = this.changeBankBranchAddresseHandler.bind(this);
        this.changeBankPoolingAccountNumberHandler = this.changeBankPoolingAccountNumberHandler.bind(this);
        this.updateBank = this.updateBank.bind(this);
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

    componentDidMount(){
        BankService.getBankById(this.state.bankId).then((resp) =>{
            let bankResp = resp.data;

            this.setState({bankName: bankResp.bankName,
                bankIfscCode: bankResp.bankIfscCode,
                bankBranchAddress: bankResp.bankBranchAddress,
                bankPoolingAccountNumber: bankResp.bankPoolingAccountNumber
            });
        });
    }

    updateBank = (e) => {
    console.log("UpdateBankComponents updateBank function");
        e.preventDefault();

        let bank ={bankName: this.state.bankName, 
            bankIfscCode: this.state.bankIfscCode, 
            bankBranchAddress: this.state.bankBranchAddress, 
            bankPoolingAccountNumber: this.state.bankPoolingAccountNumber};
    console.log('UpdateBankComponents updateBank Function Bank data ::===> ' +JSON.stringify(bank));

         BankService.updateBankDetails(this.state.bankId, bank).then(resp =>{
             this.props.history.push("/banks");
         })

    }

    cancel(){
    console.log("UpdateBankComponents cancel function");
        this.props.history.push('/banks');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center"> Update Bank Details</h3>
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
                                            onClick={this.updateBank}>Update</button>
                                        
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

export default UpdateBankComponents;