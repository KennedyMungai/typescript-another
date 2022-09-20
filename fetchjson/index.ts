import axios from 'axios';


const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
        // Response.data has properties of : 
        // id
        // title
        // completed
        
        const todo = response.data;
        
        const ID = todo.id;
        const title = todo.title;
        const finished =  todo.completed;

        console.log(`
            The TODO with ID: ${ID}
            Has a title of ${title}
            Is it finished?: ${finished}
        `);
    });