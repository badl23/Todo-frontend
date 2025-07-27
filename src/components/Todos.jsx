// Backend integreted code
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addTodos } from "../../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import axios from "axios";

const Todos = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const API_URL = "http://localhost:5001/todos";

    const handleChange = (e) => setTodo(e.target.value);
 

    const add = async () => {
        if(todo.trim() === ""){
            alert("input is empty");
            return;
        }
        try {
            const res = await axios.post(API_URL, {
                item: todo,
                completed: false,
            });
            const savedTodo = res.data;
            dispatch(addTodos(savedTodo));
            setTodo("");
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    }
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

export default Todos;

// Pure fronted code 
// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { addTodos } from "../../redux/reducer";
// import { GoPlus } from "react-icons/go";
// import { motion } from "framer-motion";

// const mapDispatchToProps = (dispatch) => ({
//     addTodo: (obj) => dispatch(addTodos(obj)),
// });

// const Todos = ({ addTodo }) => {
//     const [todo, setTodo] = useState("");

//     const handleChange = (e) => setTodo(e.target.value);

//     const add = () => {
//         if (todo === "") return alert("Input is empty");
//         addTodo({ id: Date.now(), item: todo, completed: false });
//         setTodo(""); // clear the input fields
//     };

//     return (
//         <div className="addTodos">
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 className="todo-input"
//                 value={todo}
//                 placeholder="Add a task..."
//             />
//             <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="add-btn"
//                 onClick={add}
//             >
//                 <GoPlus />
//             </motion.button>
//         </div>
//     );
// };

// export default connect(null, mapDispatchToProps)(Todos);
