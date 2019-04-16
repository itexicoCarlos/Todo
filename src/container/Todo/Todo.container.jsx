import React from 'react'
// Components
import Form from '../../components/Todo/Form.component'
import List from '../../components/Todo/List.component'
// Helpers
import helper from '../../helpers/todo.halper'
// Styles
import styles from './todoStyles'
import withStyles from 'react-jss'
// * HOC
import Connect from '../../hoc/Connect.hoc'
// ! Redux actions
import { addTask } from '../../shared/redux/actions/todo.actions'

function Todo({ state, dispatch, classes }) {

  const sendData = async (task) => {
    dispatch(addTask(await helper.addTaskHelper(task)))
    return null
  }

  return (
    <div className={classes.todoLayout}>
      <Form sendData={sendData} />
      <List tasks={state.todo_store.todos} />
    </div>
  )
}

const todoWithStyles = withStyles(styles)(Todo)

export default Connect(todoWithStyles)