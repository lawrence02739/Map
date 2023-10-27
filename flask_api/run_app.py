from mongodb.config import app


if __name__ == '__main__':
    # app.run(host="0.0.0.0", port=8080, debug=True, threaded=True)
    app.run(host="127.0.0.1", port=5000, debug=True, threaded=True)