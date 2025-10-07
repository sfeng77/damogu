# Personal Hobby Site

A small Flask application that renders static pages plus a Spotify-powered Top Artists view.

## Features

- Flask routes for home, hobbies, a simple function execution demo, and Spotify top artists
- Spotify OAuth implemented with Spotipy using only the `user-top-read` scope
- Responsive Bootstrap 5 layout with safe fallbacks for missing images/genres

## Requirements

- Python 3.8+
- Spotify developer application with Authorization Code flow enabled (PKCE is supported by Spotipy)

## Setup

1. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   .\.venv\Scripts\activate  # Windows
   source .venv/bin/activate   # macOS/Linux
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a `.env` file in the project root (or export the variables in your shell) with:
   ```bash
   SPOTIPY_CLIENT_ID=your_client_id
   SPOTIPY_CLIENT_SECRET=your_client_secret
   SPOTIFY_REDIRECT_URI=http://localhost:5000/callback
   ```
4. In the Spotify Developer Dashboard, add the same redirect URI to your application settings.

## Running Locally

```bash
flask --app app run --debug
```

The app serves:

- `/` – Home page
- `/hobbies` – Static hobbies page
- `/top_artists` – Displays your Spotify top artists
- `/test_execute_function` – Demonstrates server-triggered actions via AJAX

Visit `http://localhost:5000/top_artists` after authenticating with Spotify to see the personalized artist list.

## Privacy Notes

- Only the `user-top-read` scope is requested, so the app never touches playlists, email, or other private profile data.
- Tokens are managed by Spotipy on the server; no Spotify credentials are stored client-side.
- Rotate client secrets in the Spotify dashboard if they were previously committed to version control.
