import React,{Component, Fragment} from 'react';
import {Input, Button, List} from 'antd';

// 无状态组件
// const TodoListUI = (props)=>{
//     return(
//         <div style={{marginTop:10,marginLeft:10}}>
//             <Fragment>
//                 <Input
//                     value={props.inputValue}
//                     placeholder='请输入'
//                     style={{width:300,marginRight:10}}
//                     onChange={props.handleInputChange}
//                 />
//                 <Button
//                     type="primary"
//                     onClick={props.handleBtnClick}
//                 >提交</Button>
//             </Fragment>
//             <List
//                 style={{width:300,marginTop:10}}
//                 bordered
//                 dataSource={props.list}
//                 renderItem={(item,index) => (<List.Item onClick={(index)=>props.handleItemDelete(index)}>{item}</List.Item>)}
//             />
//         </div>
//     )
// }

export default class TodoListUI extends Component{
    render(){
        return(
            <div style={{marginTop:10,marginLeft:10}}>
                <Fragment>
                    <Input
                        value={this.props.inputValue}
                        placeholder='请输入'
                        style={{width:300,marginRight:10}}
                        onChange={this.props.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.props.handleBtnClick}
                    >提交</Button>
                </Fragment>
                <List
                    style={{width:300,marginTop:10}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={()=>this.props.handleItemDelete(index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}