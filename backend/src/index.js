import app from './app'
import sequelize from './db/connection'

const init = async () => {
    app.listen(3001, () => {
        console.log("Server on port 3001")
    })
    await sequelize.sync({ force: false })
}

init()