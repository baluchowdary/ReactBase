import React, { Component } from 'react';
import BankService from '../services/BankService';

class BankComponents extends Component {
    constructor(props){
        console.log("I am from BankComponents Component");
        super(props)
        
        this.state = {
                banks: []   
        }
        this.addBank = this.addBank.bind(this);
        this.editBank = this.editBank.bind(this);
        this.deleteBank = this.deleteBank.bind(this);
        this.deleteAllBanks = this.deleteAllBanks.bind(this);
    }

    componentDidMount(){
            BankService.getAllBanks().then((res) =>{
            this.setState({banks: res.data});
        });
    }

    addBank(){
        console.log("BankComponents addBank function");
            this.props.history.push("/savebanks");
    }

    editBank(bankId){
        console.log("BankComponents editBank function:: bankId :: " + bankId);
            this.props.history.push('/updatebankdetails/'+bankId);
    }

    deleteBank(bankId){
        console.log("BankComponents deleteBank function:: bankId :: " + bankId);
            BankService.deleteBankDetails(bankId).then(resp => {
            this.setState({banks: this.state.banks.filter(bank => bank.bankId !== bankId)});
        });
    }

    deleteAllBanks(){
        console.log("BankComponents deleteAllBanks function");
            BankService.deleteAllBanksDetails();
        console.log("BankComponents Successfully Deleted all Bank Details");
            this.setState({banks: this.state.banks.filter(bank => bank.bankId === '')});
            this.props.history.push("/banks");
        
    }

    viewBank(bankId){
        console.log("BankComponents viewBank function:: bankId :: " + bankId);
            this.props.history.push('/viewbankdetails/'+ bankId);
    }

    render() {
        return (
            <div>
                <h2 className="text-center"><span style={{color:'ThreeDShadow'}}> Bank DashBoard</span></h2>
                    <div className = "row">
                        <button className = "btn btn-primary"  
                        onClick={this.addBank}  
                        style={{textAlign: "left"}} >Add New Bank</button>

                        <button className = "btn btn-danger"  
                        onClick={this.deleteAllBanks}  
                        style={{textAlign: "right"}} >Delete All Banks</button>
                    </div>          
                <div className="row">
                    <table className= "table table-striped table-bordered">
                        <thead>
                            <tr>
                                {/* <th>Bank ID</th> */}
                                <th>Bank Name</th>
                                <th>Bank IFSC Code</th>
                                <th>Bank Branch Address</th>
                                {/* <th>Bank Pooling Account Number</th> */}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.banks.map(
                                    bank => (
                                        <tr key= {bank.bankId}>
                                            {/* <td> {bank.bankId}</td> */}
                                            <td> {bank.bankName}</td>
                                            <td> {bank.bankIfscCode}</td>
                                            <td> {bank.bankBranchAddress}</td>
                                            {/* <td> {bank.bankPoolingAccountNumber}</td> */}

                                            <td>
                                                <button onClick = {() => this.editBank(bank.bankId)}
                                                className = "btn btn-info">Update</button>

                                                <button style={{marginLeft: "5px"}} onClick = {() => this.deleteBank(bank.bankId)}
                                                className = "btn btn-danger">Delete</button>

                                                <button style={{marginLeft: "5px"}} onClick = {() => this.viewBank(bank.bankId)}
                                                className = "btn btn-info">View</button>
                                            </td>
                                        </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BankComponents;