import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  border-top: 5px solid #C5211E;
  border-bottom: 1px solid #999;
  width: auto;
  > * {
    vertical-align: middle;
  }
`;

const Label = styled.label`
  display: inline-block;
  line-height: 24px;
`;

const EmailList = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
`;

const EmailItem = styled.li`
  display: inline-block;
  color: ${({valid}) => valid ? '#333' : '#fff'};
  background-color: ${({valid}) => valid ? '#ccc' : '#C5211E'};
  margin: 0 0 0 12px;
  font-size: 12px;
  line-height: 24px;
  padding: 0 6px 0 12px;
  border-radius: 24px;
  cursor: pointer;
  span {
    display: inline-block;
    vertical-align: middle;
  }
`;

const EmailText = styled.span`
  line-height: 24px;
`;

const Close = styled.span`
  margin-left: 2px;
  width: 24px;
  padding-top: 24px;
  position: relative;
  height: 0;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 24px;
    width: 24px;
    .close-x {
      stroke: ${({valid}) => valid ? '#333' : '#fff'};
      fill: transparent;
      stroke-linecap: round;
      stroke-width: 1;
    }
  }
`;

const Form = styled.form`
  display: inline-block;
  margin-left: 6px;
  input[type=text] {
    height: 24px;
    line-height: 24px;
    padding: 0 12px;
    font-size: 14px;
    min-width: 250px;
    width: auto;
    appearance: none;
    border: none;
    outline: none;
    &:focus {
      background: transparent;
    }
  }
`;

class App extends Component {

  state = {
    emails: [{value: 'Test@test.com', valid: true}, {value: 'Test.com', valid: false}],
    value: ''
  }

  handleChange = e => this.setState({value: e.target.value});

  handleSubmit = (e) => {
    this.setState({
      emails: [...this.state.emails, {
        value: this.state.value,
        valid: this.validateEmail(this.state.value)
      }],
      value: ''
    });
    e.preventDefault();
  }

  validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  handleClear = (email) => {
    this.setState({
      emails: this.state.emails.filter(item => item.value !== email.value)
    });
  }

  render() {
    const { emails, value } = this.state;
    return (
      <Wrapper className="App">
        <Label>To:</Label>
        <EmailList>{emails.map(email => (
          <EmailItem 
            key={email.value} 
            valid={email.valid}
            onClick={() => this.handleClear(email)}
          >
            <EmailText>
              {email.value}
            </EmailText>
            <Close valid={email.valid}>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path class="close-x" d="M 9,9 L 15,15 M 15,9 L 9,15" />
              </svg>
            </Close>
          </EmailItem>
        ))}</EmailList>
        <Form onSubmit={this.handleSubmit}>
          <input 
            name="email" 
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </Form>
      </Wrapper>
    );
  }
}

export default App;
