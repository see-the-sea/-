import React,{Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from '../Store/index';
import {getInputChangeAction,getAddItemAcion,getDeleteItemAcion} from '../Store/actionCreators';
export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state= store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
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
        <div style={{marginTop:10,marginLeft:10}}>
            <Fragment>
                <Input
                    value={this.state.inputValue}
                    placeholder='请输入'
                    style={{width:300,marginRight:10}}
                    onChange={this.handleInputChange}
                />
                <Button
                    type="primary"
                    onClick={this.handleBtnClick}
                >提交</Button>
            </Fragment>
            <List
                style={{width:300,marginTop:10}}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
            />
        </div>
        )
    }
}