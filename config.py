import os

from dotenv import load_dotenv

load_dotenv()

SPOTIPY_SCOPE = "user-top-read"
SPOTIFY_REDIRECT_URI = os.getenv("SPOTIFY_REDIRECT_URI", "http://localhost:5000/callback")
SPOTIPY_CLIENT_ID = os.getenv("SPOTIPY_CLIENT_ID")
SPOTIPY_CLIENT_SECRET = os.getenv("SPOTIPY_CLIENT_SECRET")

if not SPOTIPY_CLIENT_ID or not SPOTIPY_CLIENT_SECRET:
    raise RuntimeError(
        "Missing Spotify credentials. Set SPOTIPY_CLIENT_ID and SPOTIPY_CLIENT_SECRET environment variables."
    )
