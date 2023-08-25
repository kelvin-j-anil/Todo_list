import React from 'react';
import Thingstodos from './Thingstodo';

class Todos extends React.Component {
  
  render() { 
    
    return this.props.todos.map((list)=>(
       <Thingstodos key={list.id} list={list}
       onComplete={this.props.onComplete}
       delTodo={this.props.delTodo}/>
    )
    );
    
  }
}


export default Todos;
