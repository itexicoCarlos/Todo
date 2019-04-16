import React, { useRef } from 'react'
// Styles
import "antd/dist/antd.css";
import { Form, Input, Button } from 'antd'
import { Row, Col } from 'antd'

function FormTodo({ sendData }) {
  const task = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    sendData(task.current.state.value)
  }

  return (
    <Form onSubmit={handleOnSubmit} className="login-form">
      <Row type="flex" justify="center">
        <Col xs={20} sm={20} md={20} lg={13} className="gutter-row">
          <Form.Item>
            <Input ref={task} name='task' type="text" />
            <Row type='flex' justify="center">
              <Button htmlType='submit'> Agregar tarea</Button>
            </Row>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default FormTodo