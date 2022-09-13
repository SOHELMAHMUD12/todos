// localStorage.setItem('name', 'sohel');
// const name = localStorage.getItem('name');
// console.log(name);
// localStorage.removeItem('name');


const getElement = (id) =>{
    const element = document.getElementById(id);
    return element;
}

const handleSubmit = () =>{
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    // console.log(todos);
    const inputText = getElement('todo-text').value;

    if(!todos){
        const todoList = [
            {
                title : inputText,
                completed : false,
            },
        
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));

    }
    else{
        const todoList = [
            ...todos,
            {
                title : inputText,
                completed : false,
            },
        
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
        
          
        }
        render();
    
}


const render = () =>{
    const todos =JSON.parse( localStorage.getItem('TODOS'));
    // console.log(todos);
    const ul = getElement('todo-list');

    ul.innerHTML = "";
  
    todos.forEach((item) => {
        // console.log(item)
    const li = document.createElement("li");
    li.classList.add('py-2');
    li.innerText = item.title;
    ul.appendChild(li);

        
    });
};

render();

const handleClearAll = () =>{
    localStorage.removeItem('TODOS');
    render();
}











