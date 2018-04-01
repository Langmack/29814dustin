import React, { Component } from 'react';
import { AppBar, Card, CardHeader, CardText } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../../assets/images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <header className="App-header">
                    <AppBar
                        className="app-bar"
                        showMenuIconButton
                        title="29814 Dustin Ave"
                        titleStyle={ { textAlign: 'left' } }
                    />
                </header>
            </div>
            <div className="main">
                <Card className="card">
                    <CardHeader
                        className="card-header"
                        showExpandableButton={false}
                        actAsExpander={false}
                        title="Listed - 03/29/2018"/>
                      <CardText>
                          <div className="house-detail"><strong>List Price:</strong> $400,000</div>
                          <div className="house-detail"><strong>Sq Feet:</strong> 3,000</div>
                          <div className="house-detail"><strong>Year Built:</strong> 2007</div>
                          <div className="house-detail"><strong>Status:</strong> <span className="success"> Available</span></div>
                      </CardText>
                </Card>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
