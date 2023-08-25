import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component{
  state={
    todos: [
      {
        id: 1,
        title: 'Walk the Dog',
        finished: false

      },
      {
        id: 2,
        title: 'Vaccum the carpet',
        finished: false
      },
      {
        id: 3,
        title: 'Take out the trash',
        finished: false
      }
    ]
  };

  onComplete= (id)=>{
    this.setState({todos:this.state.todos.map(list => {
      if(list.id===id){
        list.finished=!list.finished}
        return list;
      })
    });
  }

  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(list =>list.id !== id )]});
  }
  render()  {
    return(
      <div className="App">
    <Todos todos={this.state.todos} onComplete={this.onComplete} delTodo={this.delTodo}/>
    </div>
  ); 
  }
    
}

export default App;
