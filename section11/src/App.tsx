import './App.css';
import { useState, useRef, useEffect, useReducer } from 'react';
import Editor from './components/Editor';
import { Todo } from "./types"
import TodoItem from './components/TodoItem';


type Action = 
| {
  type : 'CREATE',
  data : {
    id : number,
    content : string
  };
}
| {type : 'DELETE'; id : number}

function reducer (state:Todo[], action:Action){
  switch(action.type) {
  case 'CREATE': {
    return [...state, action.data]
  }
  case "DELETE": {
    return state.filter((it)=>it.id != action.id)
  }
  }



  
}


function App() {


  const [todos, dispatch] = useReducer(reducer,[])
  const idRef = useRef(0);

  const onClickAdd = (text:string) => {
    // setTodos([
    //   ...todos,
    //   {
    //     id : idRef.current++,
    //     content : text
    //   }
    // ])

    dispatch({
      type : 'CREATE',
      data : {
        id : idRef.current++,
        content: text,
      }
      
    }
    )
  }
 
  const onClickButton = (id: number) => {
    dispatch({
      type : 'DELETE',
      id : id
    })
  }
  
  useEffect (()=>{
    console.log(todos)
  }, [todos])


  return (
    <div className='App'>
      <h1>TodoList</h1>
      <Editor onClickAdd = {onClickAdd}>
        <div>child</div>
      </Editor>
      <div>
        {todos.map((todo)=>
        <TodoItem key={todo.id} {...todo} onClickButton={onClickButton}/>
        )}
      </div>

    </div>
    
  );
}

export default App;
