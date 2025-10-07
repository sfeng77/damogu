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

- `/` - Home page
- `/hobbies` - Static hobbies page
- `/top_artists` - Displays your Spotify top artists
- `/test_execute_function` - Demonstrates server-triggered actions via AJAX

Visit `http://localhost:5000/top_artists` after authenticating with Spotify to see the personalized artist list.

## Privacy Notes

- Only the `user-top-read` scope is requested, so the app never touches playlists, email, or other private profile data.
- Tokens are managed by Spotipy on the server; no Spotify credentials are stored client-side.
- Rotate client secrets in the Spotify dashboard if they were previously committed to version control.

## Deploying to Vercel

1. Push this project to a GitHub repository (`main` branch recommended).
2. Install the Vercel CLI and link the project (or connect the GitHub repo in the Vercel dashboard):
   ```bash
   npm i -g vercel
   vercel login
   vercel link
   ```
3. Add the required environment variables in Vercel (Project Settings ? Environment Variables or via CLI):
   ```bash
   vercel env add SPOTIPY_CLIENT_ID
   vercel env add SPOTIPY_CLIENT_SECRET
   vercel env add SPOTIFY_REDIRECT_URI  # e.g. https://your-project.vercel.app/callback
   ```
4. Deploy:
   ```bash
   vercel --prod
   ```
   Vercel reads `vercel.json`, builds the Flask app with `@vercel/python`, and routes all traffic to `app.py`.
5. Update the redirect URI in the Spotify Developer Dashboard to match the production URL (for example `https://your-project.vercel.app/callback`).
