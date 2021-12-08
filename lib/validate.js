import { createHash } from 'crypto'

export function validate(givenUsername, hashedUsername, givenPassword, hashedPassword) {
  const validUsername = createHash('sha256').update(givenUsername).digest('hex').toUpperCase() === hashedUsername
  const validPassword = createHash('sha256').update(givenPassword).digest('hex').toUpperCase() === hashedPassword
  return validUsername && validPassword
}