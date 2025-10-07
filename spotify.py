import spotipy
from spotipy.oauth2 import SpotifyOAuth

from config import (
    SPOTIPY_CLIENT_ID,
    SPOTIPY_CLIENT_SECRET,
    SPOTIPY_SCOPE,
    SPOTIFY_REDIRECT_URI,
)

_auth_manager = SpotifyOAuth(
    client_id=SPOTIPY_CLIENT_ID,
    client_secret=SPOTIPY_CLIENT_SECRET,
    redirect_uri=SPOTIFY_REDIRECT_URI,
    scope=SPOTIPY_SCOPE,
)
_sp = spotipy.Spotify(auth_manager=_auth_manager)


def get_top_artists(limit: int = 5):
    """Return the current user's top artists, limited to the requested count."""
    response = _sp.current_user_top_artists(limit=limit, time_range="short_term")
    return response.get("items", [])
