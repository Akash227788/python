# Frontend React App

This React project is built with [Vite](https://vitejs.dev/). It provides a simple form for sending four parameters to a Python API via POST and shows the response.

## Setup

1. From this `frontend` directory, install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173` by default. Ensure your API is running and listening on `http://localhost:5000/api`. If it is hosted elsewhere, edit the fetch URL in `src/App.jsx`.

To build for production run:

```bash
npm run build
```
