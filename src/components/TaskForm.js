import React, { useState } from "react";
import { TextField, Button, Box, Select, MenuItem } from "@mui/material";

const TaskForm = ({ addTask, setSearchTerm }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask(title, priority);
    setTitle("");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
      <TextField
        variant="outlined"
        label="Search tasks"
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
      />
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Box display="flex" gap={2}>
          <TextField
            variant="outlined"
            label="Add a new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            variant="outlined"
            displayEmpty
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
          <Button type="submit" variant="contained" color="primary">
            Add Task
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TaskForm;
