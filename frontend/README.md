# Frontend React App

This simple React-based page allows you to send four parameters to a backend Python API via a POST request and display the response.

## Usage

1. Ensure your Python API is running locally and listening on `http://localhost:5000/api`.
2. Serve `index.html` using any static file server (e.g., `python3 -m http.server` inside this folder) or open it directly in your browser.
3. Fill in the four parameter fields and click **Submit**. The response from the API will appear below the form.

## Configuration

- If your API runs at a different URL, modify the fetch call in `index.html` accordingly.
