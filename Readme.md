# Simple Node Project

## Step 1: Install TypeScript and Required Dependencies

Install TypeScript and ts-node (for running TypeScript files directly):

```bash
npm install typescript ts-node --save-dev
```

Install and use tsx instead of ts-node:

```bash
npm install tsx --save-dev
```

Install type definitions for Node.js and other dependencies:

```bash
npm install @types/node --save-dev
```

If you're using other libraries like express, install their type definitions as well:

```bash
npm install @types/express --save-dev
```

## Step 2: Initialize a TypeScript Configuration File

Run the following command to generate a `tsconfig.json` file:

```bash
npx tsc --init
```

This will create a `tsconfig.json` file in your project root. You can customize it as needed. Here’s a basic configuration for a Node.js project:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
    "outDir": "./dist",
    "rootDir": "./src",
    "allowJs": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Step 3: Organize Your Project Structure

Create a `src` directory to store your TypeScript files:

```bash
mkdir src
```

Move your existing JavaScript files (e.g., `server.js`) into the `src` directory and rename them to `.ts` (e.g., `server.ts`).

## Step 4: Convert JavaScript Files to TypeScript

Rename `.js` files to `.ts`. For example, rename `server.js` to `server.ts`.

Add TypeScript Types: Update your code to use TypeScript types.

## Step 5: Update package.json Scripts

Update your `package.json` to include scripts for building and running the TypeScript project:

```json
{
  "scripts": {
    "start": "node dist/server.js",
    "build": "tsc",
    "dev": "tsx src/server.ts"
  }
}
```

- `build`: Compiles TypeScript files into JavaScript.
- `dev`: Runs the project directly using ts-node (for development).
- `start`: Runs the compiled JavaScript files (for production).

## Step 6: Build and Run the Project

Build the project:

```bash
npm run build
```

This will compile your TypeScript files into JavaScript and output them to the `dist` directory.

Run the project in development mode:

```bash
npm run dev
```

Run the project in production mode:

```bash
npm start
```
