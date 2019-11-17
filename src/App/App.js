import React,{Component, Fragment} from 'react';
import './app.css';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      show: true,
      list: [],
    }
    this.handleToggole = this.handleToggole.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  handleToggole(){
    this.setState({
      show: this.state.show ? false : true
    })
  }
  handleAddItem(){
    this.setState((prevState)=>{
      return{
        list: [...prevState.list,'item']
      }
    })
  }
  render(){
    return (
    <Fragment>
      {/* <div className={this.state.show ? 'show':'hide'}>hello world!!!</div> */}
      
      {/* <CSSTransition
        in={this.state.show}
        timeout={1000}
        classNames='fade'
        unmountOnExit
        onEntered={(el)=>{el.style.color='red'}}
        appear={true}
      >
        <div>hello</div>
      </CSSTransition>
      <button onClick={this.handleToggole}>toggle</button> */}

      <TransitionGroup>
        {this.state.list.map((item,index)=>{
          return(
            <CSSTransition
              in={this.state.show}
              timeout={1000}
              classNames='fade'
              unmountOnExit
              onEntered={(el)=>{el.style.color='red'}}
              appear={true}
              key={index}
            >
              <div>{item}</div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
      <button onClick={this.handleAddItem}>toggle</button>
    </Fragment>
  );
  }
}

