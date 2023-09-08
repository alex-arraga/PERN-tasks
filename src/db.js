import pg from "pg"

// Credenciales para la conexion con la DB
export const pool = new pg.Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "Tab8Ax2Ma398Xi",
    database: "tasksdb"
})

pool.on("connect", () => {
    console.log("Database connected")
})