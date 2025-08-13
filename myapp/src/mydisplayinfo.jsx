import React from 'react'


export default function mydisplayinfo() {

    const [mystsate, setState] = React.useState([]);

    useEffect(() => { // Fetch data from an API or any source
        // Example: Fetching data from a placeholder API
    }, []);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => respponses.json())
    .then(json => setData(json))
    return (
    <div>
        <h3>{Item.title}</h3>
        <p>{Item.body}</p>
      
    </div>
  )
}
