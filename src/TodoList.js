import React,{Component, Fragment} from 'react';

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        }
    }
    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick(e){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: '',
        })
    }
    handleBtnDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list: list
        })
        console.log(index)
    }
    render(){
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                    <ul>
                        {
                            this.state.list.map((item,index)=>{
                                return(
                                    <li
                                        key={index}
                                        onClick={this.handleBtnDelete.bind(this,index)}
                                    >
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
            
        )
    }
}