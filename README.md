# Personal Hobby Site

A small Flask application that serves a personal homepage, hobby list, and a simple function execution demo.

## Features

- Flask routes for home, hobbies, and a button-triggered server action demo
- Bootstrap 5 layout for quick styling
- Minimal Python stack that's easy to extend later

## Requirements

- Python 3.8+

## Setup

1. Create and activate a virtual environment:
   `ash
   python -m venv .venv
   .\.venv\Scripts\activate  # Windows
   source .venv/bin/activate   # macOS/Linux
   `
2. Install dependencies:
   `ash
   pip install -r requirements.txt
   `
3. Start the development server:
   `ash
   flask --app app run --debug
   `

## Available Routes

- / – Home page
- /hobbies – Static hobbies page
- /test_execute_function – Demonstrates server-triggered actions via AJAX

## Deploying to Vercel

1. Push this project to a GitHub repository (main branch recommended).
2. Install the Vercel CLI and link the project (or connect the repo in the Vercel dashboard):
   `ash
   npm i -g vercel
   vercel login
   vercel link
   `
3. Deploy:
   `ash
   vercel --prod
   `
   Vercel reads ercel.json, builds the Flask app with @vercel/python, and routes all traffic to pp.py.

Once you redesign new features, add the routes/templates and redeploy.
