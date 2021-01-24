import React from "react";

function TodoList(props) {
    const mockTodoList = [
        {
            description: "Hello World!",
            spentTime: 23
        },
        {
            description: "Lorem ipsum  sit amet",
            spentTime: 23
        }
    ]

    return generateTodoListStructure(mockTodoList);
}

function generateTodoListStructure(todoList) {

    return (
        <ul className="todo-list">
            {todoList.map((item, index) => (
                <li className="todo-list-item">
                    <div className="description">
                        Lorem ipsum dolor  amet
                                </div>
                    <div className="action-buttons">
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;