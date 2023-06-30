import React, { useState,useEffect } from 'react';

const AddTodo = () => {
    const [todoText,setTodoText]=useState('');
    const [index,setIndex]=useState(0);
    const [todoColor,setTodoColor]=useState('');
    

     const [todo,setTodo]=useState([
        {id:0,
        todoText:"This is a Todolist",
        priority:"Normal",
        color:'bg-green-500',
        check:false,
        }
     ]);
    const priorityArr= [
        {
            id:0,
            color:'',
            text:'Choose',
            value:''
        },
        {
            id:1,
            color:'bg-red-600',
            text:'High',
            value:'High'
        },
        {
            id:2,
            color:'bg-amber-300',
            text:'Medium',
            value:'Medium'
        },
        {
            id:3,
            color:'bg-green-500',
            text:'Normal',
            value:'Normal'
        },
    ]

    useEffect(()=>{
        
        if(localStorage.getItem('todo')){
           setTodo(JSON.parse(localStorage.getItem('todo')));
           let fakeid=todo[todo.length-1].id;
        
        } 

        console.log(todo);
     },[todo.length])


    const todoHandel=(e)=>{
       e.preventDefault();
       
       if(todoText==='' || index ===0){
        alert("blank");
        return;
       }
       
      
      const  fakeTodo={
        id:todo.length,
        todoText:todoText,
        priority:priorityArr[index].text,
        color:priorityArr[index].color,
        check:false,
      };
      

      todo.push (fakeTodo);
      localStorage.setItem('todo',JSON.stringify(todo));

       console.log(todo);
    //    console.log(priority);
    //    console.log(todoColor);
       e.target.reset();
       
       window.location.reload();
    }
    return (
        <div className=' bg-gray-900  rounded-xl drop-shadow-lg flex hover:shadow-[0px_6px_12px_-2px_rgb(250,250,250)] trasnition ease-in duration-500  '>
          <form onSubmit={todoHandel} className='w-[700px] h-[200px] my-10 ' >
          <div className='flex  space-x-5 justify-center '>
                <div className='flex space-y-4 flex-col'>
                    <label className='text-center '>Add todo</label>
                    <input type='text' className='px-2 rounded-md h-10'  onChange={(e)=>setTodoText(e.target.value)}></input>
                </div>

                <div className='flex space-y-4 flex-col'>
                    <label>Select Priority</label>
                    <select onChange={(e)=>setIndex(e.target.value)} className='h-10 rounded-md'>
                        {/* <option value=''>Choose</option>
                        <option value='High' >High</option>
                        <option value='Medium'>Medium</option>
                        <option value='Normal'>Normal</option> */}
                        {
                            priorityArr.map((priori)=>(
                                <option value={priori.id} key={priori.id} >{priori.text}</option>
                            ))
                        }
                    </select>
                </div>
            </div> 
            <div className='flex justify-center my-10'>
                <button type='submit' >Add</button>
            </div>
            
          </form>
        </div>
    );
}

export default AddTodo;
