import React, { useState } from 'react';
import './Addtodo.css'
import { Alert } from 'reactstrap';
import api from '../services/api'


function Addtodo({ history }) {

  const [title, setTitle] = useState('')
  const [error, setError] = useState(false)
  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      if (title !== "") {
        const response = await api.post('/Addtodo', { title })
        history.push("/")
      } else {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2000)
      }
    } catch (error) {
      Promise.reject(error);
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="tasks">
        {error ? (
          <Alert className="event-validation" color="danger">Write One Todo!</Alert>
        ) : ""}
        <form onSubmit={handleSubmit}>
          <div className="wrapper">
            <div className="title">
              <h1 className="texte">Add New Todo</h1>
            </div>
            <div className="contact-form">
              <div className="input-fields">
                <input type="text" name="title" id="title" className="input" onChange={evt => setTitle(evt.target.value)} placeholder="What will you do today?" />
                <button className="button" type="submit">Add</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Addtodo
