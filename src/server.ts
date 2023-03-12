import { env } from "./env";
import { app } from "./app";



app.listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
