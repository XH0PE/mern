import React from 'react'
import { Form } from 'semantic-ui-react'
import './RegisterForm.scss'

export function RegisterForm() {
  return (
    <Form clasName='register-form'>
      <Form.Input name='email' placeholder='Correo Electronico'/>
      <Form.Input name='password' type='password' placeholder='Contraseña'/>
      <Form.Input name='repeatPassword' type='password' placeholder='Repetir Contraseña'/>
      <Form.Checkbox name='conditionsAccepted' label='He leido y acepto las politicas de privacidad.'/>
      <Form.Button type='submit' primary fluid>Crear Cuenta</Form.Button>
    </Form>
  )
}
