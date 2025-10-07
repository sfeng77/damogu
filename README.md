# The Purrtotype Lab

A small Flask site for experiments, hobbies, and cozy updates. The layout includes a hero landing page, a Markdown-powered notes section, and a simple function demo for future tinkering.

## Features

- Hero landing section with social links and a dark/light theme toggle
- Notes hub that renders Markdown files from the content/ directory into pages
- Styled hobby cards and reusable UI components built on Bootstrap 5
- Test page that showcases triggering server actions via AJAX
- Ready-to-deploy configuration for Vercel (including favicons and PWA manifest)

## Requirements

- Python 3.8+

## Local Setup

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
4. Visit http://127.0.0.1:5000/ to see the site.

## Writing New Notes

1. Add a Markdown file to the content/ folder, e.g. content/my-update.md.
2. Put a # Heading on the first line (used as the page title).
3. Write the rest of the note in Markdown. Code blocks, tables, and inline code are supported.
4. The note appears automatically:
   - List view: http://127.0.0.1:5000/notes/
   - Detail page: http://127.0.0.1:5000/notes/my-update/

## Available Routes

- / – Landing page and hero section
- /notes/ – List of all Markdown notes
- /notes/<slug>/ – Individual note rendered from Markdown
- /test_execute_function – Button page that calls server functions via AJAX

## Deploying to Vercel

1. Push this project to a GitHub repository (main branch recommended).
2. Link the repo in Vercel or use the CLI:
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
4. Manage environment variables (if needed later) under *Project Settings → Environment Variables*.

## Customisation Tips

- Edit 	emplates/index.html to update your name, introduction, and social handles.
- Adjust colours and spacing in static/css/main.css to evolve the visual identity.
- Drop new Markdown files in content/ whenever you want to publish another note.
- Replace favicons in static/favicon/ to match your personal branding.

Happy building! If you add bigger features, keep the pattern: create a route, a template, some CSS, and a Markdown file when appropriate.
