'use client'

import React from 'react';

const Todo = () => {
    const [apiAnswer, setApiAnswer] = React.useState([])
    React.useEffect(() => {
        FetchTodo()
    }, [])
  async function FetchTodo() {
        
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const data = await resp.json()

        console.log(data)
        setApiAnswer(data.title)
  }


    return (
        <div>
            <h2>{apiAnswer}</h2>
            </div>
    );
}

export default Todo