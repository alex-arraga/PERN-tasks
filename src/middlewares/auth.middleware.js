import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: 'No estas autorizado, cookie inexistente'
        })
    }

    jwt.verify(token, 'fjp4oi2SDsa', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'No estas autorizado, ingresá con tu cuenta o registrate'
            })
        }

        req.userId = decoded.id
    })

    next()
}