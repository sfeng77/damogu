# Personal Hobby Site

A small Flask application that serves a personal homepage, polished hobby showcase, and a simple function execution demo. The stack stays intentionally light so you can iterate quickly.

## Features

- Hero landing section with personal introduction and social handles
- Styled hobbies grid using Bootstrap 5 cards and custom CSS
- Test page that demonstrates triggering server-side Python functions via AJAX
- Ready-to-deploy configuration for Vercel

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

- / � Home page with intro, highlights, and social links
- /hobbies � Curated grid of hobbies
- /test_execute_function � Demonstrates server-triggered actions via AJAX

## Customisation Tips

- Update 	emplates/index.html with your real name plus Instagram and Xiaohongshu handles/URLs.
- Tweak colours and layout in static/css/main.css to match your personal branding.
- Expand the hobbies list or add new sections as you build out more content.

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

When you are ready to add new features, create the routes/templates, commit, and redeploy.
