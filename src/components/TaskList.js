import React from "react";
import TaskItem from "./TaskItem";
import { Box } from "@mui/material";

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => (
  <Box mt={3}>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    ))}
  </Box>
);

export default TaskList;
