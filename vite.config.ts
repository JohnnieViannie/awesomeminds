import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import net from "net";
import { componentTagger } from "lovable-tagger";

// On Windows, Vite can bind [::]:3000 even when another app holds 127.0.0.1 or ::1 on
// the same port, so its built-in fallback never kicks in. Probe every address ourselves.
const canBind = (port: number, host: string) =>
  new Promise<boolean>((resolve) => {
    const srv = net.createServer();
    srv.once("error", (err: NodeJS.ErrnoException) =>
      resolve(err.code === "EADDRNOTAVAIL" || err.code === "EAFNOSUPPORT")
    );
    srv.once("listening", () => srv.close(() => resolve(true)));
    srv.listen(port, host);
  });

const findFreePort = async (start: number) => {
  for (let port = start; port < start + 100; port++) {
    const hosts = ["127.0.0.1", "::1", "0.0.0.0", "::"];
    const results = [];
    for (const host of hosts) results.push(await canBind(port, host));
    if (results.every(Boolean)) return port;
  }
  return start;
};

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => ({
  server: {
    host: true,
    port: await findFreePort(3000),
    strictPort: false,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
