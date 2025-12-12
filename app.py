from pathlib import Path

from flask import Flask, abort, jsonify, render_template, request, url_for
from markdown import markdown

from test_execution_buttons import function1, function2

app = Flask(__name__)
CONTENT_DIR = Path(app.root_path) / "content"

def _parse_markdown_file(path: Path):
    text = path.read_text(encoding="utf-8")
    if text.startswith("\ufeff"):
        text = text.lstrip("\ufeff")
    lines = text.splitlines()

    title = next(
        (
            line.lstrip("\ufeff# ").strip()
            for line in lines
            if line.lstrip("\ufeff").startswith("# ")
        ),
        path.stem.replace("-", " ").title(),
    )
    summary = next(
        (
            line.lstrip("\ufeff").strip()
            for line in lines
            if line and not line.lstrip("\ufeff").startswith("#")
        ),
        "",
    )

    html = markdown(
        text,
        extensions=[
            "fenced_code",
            "tables",
            "abbr",
            "attr_list",
        ],
        output_format="html5",
    )
    return {
        "slug": path.stem,
        "title": title,
        "summary": summary,
        "html": html,
    }

def get_all_articles():
    if not CONTENT_DIR.exists():
        return []
    paths = sorted(
        CONTENT_DIR.glob("*.md"),
        key=lambda p: p.stat().st_mtime,
        reverse=True
    )
    return [
        _parse_markdown_file(path)
        for path in paths
    ]

def get_article(slug: str):
    path = CONTENT_DIR / f"{slug}.md"
    if not path.exists():
        return None
    return _parse_markdown_file(path)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/worldcup26/predictor')
def worldcup26_predictor():
    """
    Interactive bracket builder for FIFA World Cup 2026.
    Groups/fixtures are kept client-side to stay easy to update while qualifiers finish.
    """
    return render_template('worldcup26_predictor.html')

@app.route('/notes/')
def notes_index():
    articles = get_all_articles()
    return render_template('notes/index.html', articles=articles)

@app.route('/notes/<slug>/')
def notes_detail(slug):
    article = get_article(slug)
    if not article:
        abort(404)
    return render_template('notes/detail.html', article=article)

@app.route('/test_execute_function')
def test_execute_function():
    return render_template('test_execute_function.html')

@app.route('/execute_function', methods=['POST'])
def execute_function():
    function_name = request.form['function_name']
    if function_name == 'function1':
        output = function1()
    elif function_name == 'function2':
        output = function2()
    else:
        output = "Function not found"
    return jsonify({'output': output})

if __name__ == '__main__':
    app.run(debug=True)
