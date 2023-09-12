import jwt from 'jsonwebtoken';

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, 'fjp4oi2SDsa',
      {
        expiresIn: '1d'
      },
      (error, token) => {
        if (error) reject(error)
        resolve(token)
      })
  })
}