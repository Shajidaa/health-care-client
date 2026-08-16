import { createClient } from "redis";
import config from "../config";

export const redisClient = createClient({
  username: config.redis_user,
  password: config.redis_password,
  socket: {
    host: config.redis_host,
    port: Number(config.redis_port),
  },
});
// // 1. Crucial: Catch unhandled error events to prevent app crashes
// redisClient.on("error", (err) => {
//   console.error("❌ Redis Client Error:", err);
// });

// // 2. Optional: Log successful connection
// redisClient.on("connect", () => {
//   console.log("🔗 Connected to Redis successfully");
// });
