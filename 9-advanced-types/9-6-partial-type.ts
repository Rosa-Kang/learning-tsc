{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'hight' | 'low';
    };

    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return { ...todo, ...fieldsToUpdate };
    }

    const todo: ToDo = {
       title: 'typeScript 10-11',
        description: 'listen to lecture',
        label: 'study',
        priority: 'low' ,
    }

    const updated = updateTodo(todo, { priority: 'hight' });
    console.log(updated);

}