import React, { Component } from 'react';
import BankService from '../services/BankService';

class ViewBankComponents extends Component {
    constructor(props){
        console.log("I am from ViewBankComponents Component");
        super(props)

        this.state = {
            bankId: this.props.match.params.bankId,
            banks: {}
        }

    }
    cancel(){
        console.log("ViewBankComponents cancel function");
        this.props.history.push('/banks');
    }

    componentDidMount(){
        BankService.getBankById(this.state.bankId).then(resp =>{
            this.setState({banks: resp.data});
        })
    }

    render() {
        return (
            <div>
                <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> <span style={{color:'ThreeDShadow'}}>View Bank Details</span></h3>
                    <div className = "card-body" style={{color:'honeydew'}}>
                        <div className = "row">
                        <   div> <label> Bank ID:  </label> {this.state.banks.bankId}</div>
                            <div> <label> Bank Name:  </label> {this.state.banks.bankName}</div>
                            <div> <label> Bank IFSC Code:  </label> {this.state.banks.bankIfscCode}</div>
                            <div> <label> Bank Branch Address:  </label> {this.state.banks.bankBranchAddress}</div>
                            <div> <label> Bank Pooling Account Number:  </label> {this.state.banks.bankPoolingAccountNumber}</div>
                        </div>
                        <button className="btn btn-danger" 
                                onClick={this.cancel.bind(this)} 
                                style={{marginLeft: "30%"}}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewBankComponents;