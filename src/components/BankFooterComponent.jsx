import React, { Component } from 'react';

class BankFooterComponent extends Component {
    constructor(props){
        console.log("I am from BankFooterComponent Component");
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
              <footer className = "footer">
                    <span className="text-muted">Bank Module Footer</span>
                </footer>               
            </div>
        );
    }
}

export default BankFooterComponent;