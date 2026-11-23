// Preview dev-server wrapper.
// 1) Logs the spawn environment to preview-debug.log (diagnostics).
// 2) Launches `next dev` directly with the current Node binary, bypassing
//    the node_modules/.bin shim — more robust in spawned environments.
// Any --port / --hostname args appended by the caller are forwarded.
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "..", "preview-debug.log");

try {
  const lines = [
    "time: " + new Date().toISOString(),
    "cwd: " + process.cwd(),
    "node: " + process.version + " @ " + process.execPath,
    "argv: " + JSON.stringify(process.argv),
    "PATH: " + (process.env.PATH || "(none)"),
    "PORT: " + (process.env.PORT || ""),
    "---",
    "",
  ];
  fs.writeFileSync(logPath, lines.join("\n"));
} catch {
  // diagnostics must never block startup
}

const nextBin = path.join(__dirname, "..", "node_modules", "next", "dist", "bin", "next");

// Next 15's `next dev` accepts --hostname but NOT --host (Next 16 name).
// Normalize whatever the caller passes.
const forwarded = process.argv
  .slice(2)
  .map((a) => (a === "--host" ? "--hostname" : a.startsWith("--host=") ? "--hostname=" + a.slice(7) : a));

const child = spawn(process.execPath, [nextBin, "dev", ...forwarded], {
  stdio: "inherit",
});
child.on("exit", (code) => process.exit(code ?? 0));
