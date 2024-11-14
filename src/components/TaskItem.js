import React from "react";
import { Box, Typography, Checkbox, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => (
  <Paper
    style={{
      padding: "10px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Checkbox
      checked={task.completed}
      onChange={() => toggleTaskCompletion(task.id)}
      color="primary"
    />
    <Typography
      variant="body1"
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        flex: 1,
      }}
    >
      {task.title} - {task.priority}
    </Typography>
    <IconButton onClick={() => deleteTask(task.id)} color="secondary">
      <DeleteIcon />
    </IconButton>
  </Paper>
);

export default TaskItem;
