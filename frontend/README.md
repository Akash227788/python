# Frontend React App

This folder contains a small React project created with [Vite](https://vitejs.dev/). The app allows you to send four parameters to a backend Python API via a POST request and displays the response.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` by default.
3. Ensure your Python API is running locally (default URL is `http://localhost:5000/api`). If your API runs elsewhere, edit the fetch URL in `src/App.jsx`.

To create a production build, run `npm run build`.
