import React, { useEffect } from 'react'
// * Routes
import { Router } from '@reach/router'
// Containers
import Todo from '../../../container/Todo/Todo.container'
// ! Redux
import Connect from '../../../hoc/Connect.hoc'
// Actions and helpers
import todo from '../../../helpers/todo.halper'
import { showTasks } from '../../redux/actions/todo.actions'


function PrivateRoutes({ state, dispatch }) {

  useEffect(() => {
    getAllTasks()
  }, [])

  async function getAllTasks() {
    const result = await todo.getAllTasks()
    return dispatch(showTasks(result))
  }

  return (
    <Router primary={false} >
      <Todo path='/' />
    </Router>
  )
}

export default Connect(PrivateRoutes)