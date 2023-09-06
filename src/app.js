import express from "express";
import { urlencoded } from "express";
import morgan from "morgan";

const app = express();

// App usara morgan para ver por consola las peticiones que hacemos
app.use(morgan('dev'))

// Cualquier dato json que llegue conviertelo a un objeto de js
app.use(express.json())

// Analizar datos desde formularios HTML en request entrantes y los hace accesible en el objeto req.body
app.use(urlencoded({ extended: false }))

app.get('/', (req, res) => res.json({ message: "welcome to my API" }))

// Para manejar errores vamos a usar un middleware que va al final, esto funcionara como manejador de errores si una ruta va mal o no se encuentra

app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    })
})

// Exporto app a index.js
export default app