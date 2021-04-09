import React, { Component } from 'react';
import './Main.css';
import Form from './Form';
import Tasks from './Tasks';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Malhar',
      'Estudar',
    ],
    index: -1,
  };

  componentDidMount () {

    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate (prevPros, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: newTasks,
        index: -1,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    this.setState({
      tasks: newTasks,
    });
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });
  }

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1> TaskList </h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />

      </div>
    );
  }
}
