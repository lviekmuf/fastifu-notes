import fastify from "fastify"
import mongoose from "mongoose"
import routes from "./src/routes/index"
import config from "./config"

const DB_URL = config.mongodbUrl || ""

const build = async (opts = {}) => {
    await mongoose.connect(DB_URL)
    const app = fastify(opts)
    app.register(routes, { prefix: "/notes" })
    return app;
  };
  
export default build;
