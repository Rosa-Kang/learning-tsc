{
    type ToDo = {
        title: string;
        description: string;
    };

    function display(todo: Readonly<ToDo>) {
        console.log(todo.title);
    }
}