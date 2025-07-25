import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapDispatchToProps = (dispatch) => ({
    addTodo: (obj) => dispatch(addTodos(obj)),
});

const Todos = ({ addTodo }) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => setTodo(e.target.value);

    const add = () => {
        if (todo === "") return alert("Input is empty");
        addTodo({ id: Date.now(), item: todo, completed: false });
        setTodo(""); // clear the input fields
    };

    return (
        <div className="addTodos">
            <input
                type="text"
                onChange={handleChange}
                className="todo-input"
                value={todo}
                placeholder="Add a task..."
            />
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="add-btn"
                onClick={add}
            >
                <GoPlus />
            </motion.button>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(Todos);