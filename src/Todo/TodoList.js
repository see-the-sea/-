import React,{Component, Fragment} from 'react';
import './Todo.css';
import TodoItem from './TodoItem';
// import axios from 'axios';

export default class TodoList extends Component {
    constructor(props){
        super(props);
        // 当组件的state或props发生改变时，render()会重新执行
        this.state = {
            inputValue: '',
            list: [],
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleBtnDelete=this.handleBtnDelete.bind(this);
    }
    // componentDidMount(){
    //     axios.get('/api/todolist')
    //         .then((res)=>{
    //             console.log(res.data)
    //             this.setState(()=>({
    //                     list:[...res.data]
    //                 })
    //             )
    //         })
    //         .catch(()=>{alert('error')})
    // }
    getTodoItem(){
        return this.state.list.map((item,index)=>{
            return(
                // <li
                //     key={index}
                //     onClick={this.handleBtnDelete.bind(this,index)}
                //     dangerouslySetInnerHTML={{__html:item}}
                // >
                //     {/* {item} */}
                // </li>
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    handleBtnDelete={this.handleBtnDelete}
                />
            )
        })
    }
    handleInputChange(){
        const value = this.input.value;
        this.setState(()=>({
              inputValue: value
        }))
    }
    handleBtnClick(e){
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '',
        }))
    }
    handleBtnDelete(index){
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
            return{list}
        })
    }
    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">请输入:</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input)=>{this.input=input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                    <ul>
                        {this.getTodoItem()}
                    </ul>
                </div>
            </Fragment>
            
        )
    }
}