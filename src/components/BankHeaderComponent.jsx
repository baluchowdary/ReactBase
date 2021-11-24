import React, { Component } from 'react';

class BankHeaderComponent extends Component {
    constructor(props){
        console.log("I am from BankHeaderComponent Component");
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://localhost:3000/banks" className="navbar-brand">Bank Module</a></div>
                    </nav>
                    </header>            
            </div>
        );
    }
}

export default BankHeaderComponent;