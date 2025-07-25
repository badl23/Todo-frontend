import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = ({ item, updateTodo, removeTodo, completeTodo }) => {
  const inputRef = useRef(true);

  const edit = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (e) => {
    if (e.key === "Enter") {
      updateTodo({ id: item.id, item: inputRef.current.value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <motion.li
      className="card"
      initial={{ x: "150vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw", opacity: 0 }}
    >
      <textarea
        ref={inputRef}
        defaultValue={item.item}
        disabled={inputRef}
        onKeyDown={update}
      />
      <div className="btns">
        <motion.button whileHover={{ scale: 1.4 }} onClick={edit}>
          <AiFillEdit />
        </motion.button>
        {!item.completed && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            style={{ color: "green" }}
            onClick={() => completeTodo({id: item.id})}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          <IoClose />
        </motion.button>
      </div>
      {item.completed && <span className="completed">Done</span>}
    </motion.li>
  );
};

export default TodoItem;