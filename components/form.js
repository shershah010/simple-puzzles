import Router from 'next/router'

import { validate } from '../lib/validate'

export default function Form({ hashedUsername, hashedPassword, target }) {
  function handleSubmit(event) {
    event.preventDefault()
    const valid = validate(event.target.username.value, hashedUsername, event.target.password.value, hashedPassword)
    console.log(valid)
    if (valid) {
      event.target.username.value = ''
      event.target.password.value = ''
      if (target.includes("congratulations")) {
        Router.push(target)
      } else {
        Router.push('/puzzles/' + target)
      }
    } else {
      alert("Incorrect")   
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input id="username" name="username" type="text" required />
      <label htmlFor="password">password</label>
      <input id="password" name="password" type="password" required />
      <button type="submit">Submit</button>
    </form>
  )
}