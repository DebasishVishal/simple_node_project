import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript!");
});

function x(number: number) {
  return number;
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Use "npm run build" to compile your TypeScript files.

// Use "npm run dev" to run the TypeScript file directly with ts-node.

// Use "npm start" to run the compiled JavaScript file.
