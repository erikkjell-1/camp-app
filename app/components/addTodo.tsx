'use client'

import React from 'react';

const AddTodo = () => {
    const [todoItem, setTodoItem] = React.useState('');

     async function PostApi(todoItem) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: '${todoItem}',
    body: '',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

    }

    return (
        <section className="add-todo">
<input type='text' onChange={e=> setTodoItem(e.target.value)} value={todoItem} />
         <button onClick={() => PostApi(todoItem)}>Add</button>
        </section>
    )
}

export default AddTodo;