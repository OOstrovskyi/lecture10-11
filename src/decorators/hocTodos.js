import React from 'react';
import {axiosRequest} from '../requests/axios';

const url = 'https://jsonplaceholder.typicode.com/todos'; 

export default (Component) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      displayedTodos: [],
      whatDisplay: 'all',
    };
  }
      
  setDisplayedTodos = (whatDisplay) => {
    switch (whatDisplay){
      case 'completed': 
        this.setState({displayedTodos: this.state.todos.filter((el) => el.completed===true)})
        break;
      case 'uncompleted': 
        this.setState({displayedTodos: this.state.todos.filter((el) => el.completed===false)})
        break;
      default: 
      this.setState({displayedTodos: this.state.todos})
    }
  }

  changeDisplayedTodos = (event) => {

    this.setDisplayedTodos(event.target.name);
    
    this.setState({whatDisplay: event.target.name}); 
  }

  onChangeCompleted = (event) => {
    let todos = this.state.todos
    todos.forEach(todo => {
      if (todo.id === Number(event.target.name))
        todo.completed = event.target.checked
    }) 
    this.setState({todos: todos})

    this.setDisplayedTodos(this.state.whatDisplay);
  }

  componentDidMount() {   
    axiosRequest(url).then((res) => {
        this.setState({ todos: res, displayedTodos: res })
      })
  }

  render() {
    const { displayedTodos, whatDisplay } = this.state;
    return (
      <Component {...this.props} todos={displayedTodos} whatDisplay={whatDisplay}
        onChange={this.onChangeCompleted}
        changeDisplayedTodos={this.changeDisplayedTodos}
      />
    );
  }
};

