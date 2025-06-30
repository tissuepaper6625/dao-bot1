import uuid
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})

posts = {}       # {post_id: {...}}

# Helper functions
def generate_id():
    return str(uuid.uuid4())

def now():
    return datetime.now()

# health check route
@app.route("/", methods=["GET"])
def health_check():
    return jsonify({"message": "API Active"})

# Route: Mint Post
@app.route("/post", methods=["POST"])
def mint_post():
    data = request.json

    post_id = generate_id()
    post = {
        "id": post_id,
        "creator": data.get("creator"),
        "content_uri": data.get("content_uri"),  # e.g., ipfs://QmXYZ...
        "timestamp": now()
    }
    posts[post_id] = post
    return jsonify(post)

# Route: List all posts (optional for testing)
@app.route("/posts", methods=["GET"])
def list_posts():
    return jsonify(list(posts.values()))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

