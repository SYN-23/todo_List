import React, { useState ,useEffect} from 'react';

const TodoBlock = ({todo}) => {
    const [check,setCheck]=useState(todo.check);
    
    const [updatetodo,setUpdateTodo]=useState([]);
    useEffect(()=>{
        
       if(localStorage.getItem('todo')){
          setUpdateTodo(JSON.parse(localStorage.getItem('todo')));
         
       } 
      
    },[todo.length])

    // const updateHandel=()=>{

    // }

    const deleteHandel=(e,id)=>{
         
       updatetodo.splice(id,1);
       localStorage.setItem('todo',JSON.stringify(updatetodo));
       console.log(updatetodo);
       window.location.reload();
    }
    return (
        <div className= ' bg-gray-900  rounded-xl my-8 drop-shadow-2xl hover:shadow-[0px_6px_12px_-2px_rgb(250,250,250)] trasnition ease-in duration-500 '>
            <div className=  {`absolute h-[95px]  items-center inset-x-0.5 inset-y-0.5 w-[10px] rounded-s-lg ${todo.color} `}   > </div>

            <div className='flex justify-start items-center space-x-5 h-[100px]'>

            <div className='flex space-x-5 w-[300px] mx-10'>
                <input type='checkbox' onClick={()=>setCheck(!check)}></input>
                {
                    check 
                    ?<s> <h4>{todo.todoText}</h4></s>
                    : <h4>{todo.todoText}</h4>
                }
                
            </div>

            <div className='space-x-5'>
                {/* <button onClick={updateHandel}>Update</button> */}
                <button className='rounded-lg border-solid border-2 border-white-500 px-4 py-3 font-medium text-sm/[16px] font-inherit transition ease-in duration 300' onClick={(e)=>deleteHandel(e,todo.id)}>Delete</button>
            </div>
            </div>
        </div>
    );
}

export default TodoBlock;
