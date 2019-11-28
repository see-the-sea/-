import React,{Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './index';
import {getInputChangeAction,getAddItemAcion,getDeleteItemAcion,initListAction} from './actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';

export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state= store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    componentDidMount(){
        axios.get('/todolist.json').then((res)=>{
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        })
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action = getAddItemAcion();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action = getDeleteItemAcion(index);
        store.dispatch(action);
    }
    render(){
        return(
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
}