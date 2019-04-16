import React, { useRef } from 'react'
// Styles
import { Form, Input, Button } from 'antd'
import "antd/dist/antd.css";


function FormTodo({ sendData }) {
  const task = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    sendData(task.current.value)
  }

  return (
    <Form onSubmit={handleOnSubmit} className="login-form">
      <Form.Item>
        <Input ref={task} name='task' type="text" />
        <Button>Agregar tarea</Button>
      </Form.Item>
    </Form>
  )
}

export default FormTodo