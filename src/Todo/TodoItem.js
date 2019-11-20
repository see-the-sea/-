import React,{Component} from 'react';
import Proptypes from 'prop-types';

export default class TodoItem extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const {handleBtnDelete,index} = this.props;
        handleBtnDelete(index)
    }
    render(){
        const {content,test} =this.props;
        return(
            <div onClick={this.handleClick}>
                {test}-{content}
            </div>
        )
    }
}
TodoItem.propTypes = {
    test: Proptypes.string.isRequired,
    content: Proptypes.oneOfType([Proptypes.string,Proptypes.number]),
    handleBtnDelete: Proptypes.func,
    index: Proptypes.number,
}
TodoItem.defaultProps = {
    test: 'hello'
}