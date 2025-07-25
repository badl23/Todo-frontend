import React, { useState } from "react";
import { connect } from "react-redux";
import {
  completeTodos,
  removeTodos,
  updateTodos,
} from "../../redux/reducer";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => ({ todos: state });

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => dispatch(removeTodos(id)),
  updateTodo: (obj) => dispatch(updateTodos(obj)),
  completeTodo: (id) => dispatch(completeTodos(id)),
});

const DisplayTodos = ({ todos, removeTodo, updateTodo, completeTodo }) => {
  const [sort, setSort] = useState("active");
  const [search, setSearch] = useState("");

  const filtered = todos.filter((item) => {
    const matches = item.item.toLowerCase().includes(search.toLowerCase());
    if (sort === "active") return !item.completed && matches;
    if (sort === "completed") return item.completed && matches;
    return matches;
  });

  return (
    <div className="displaytodos">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="buttons">
        {["active", "completed", "all"].map((label) => (
          <motion.button
            key={label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSort(label)}
          >
            {label[0].toUpperCase() + label.slice(1)}
          </motion.button>
        ))}
      </div>

      <ul>
        <AnimatePresence>
          {filtered.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              completeTodo={completeTodo}
            />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);