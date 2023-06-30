import React, { useEffect, useState } from 'react';
import TodoBlock from './TodoBlock';

const RenderTodo = () => {
    const [todo,setTodo]=useState([]);
    useEffect(()=>{
        
       if(localStorage.getItem('todo')){
          setTodo(JSON.parse(localStorage.getItem('todo')));
         
       } 
       console.log(todo);
    },[todo.length])
    return (
        <div className='my-10'>
           <div className='text-center'>
            <h4>Your Todo's</h4>
            </div> 
            <div  >
                {
                 todo.toReversed().map((todo)=>(
                    <TodoBlock todo={todo} key={Math.random()} ></TodoBlock>
                 ))
                }
            </div>
            
        </div>
    );
}

export default RenderTodo;
