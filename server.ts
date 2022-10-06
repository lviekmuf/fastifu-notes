import build from "./app"
import config from "./config"

const PORT = Number(config.port) || 3000
const HOST = config.host || "0.0.0.0"
const start = async (): Promise<void> => {
	try {
    const app = await build({ logger: true });
    app.listen(PORT, HOST, (err: any, address: any) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      else {
        console.log(`Server listening at ${PORT}`)
      }
    });
  } catch (err) {
		process.exit(1);
	}
};
start();
