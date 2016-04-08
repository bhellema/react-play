// main.jsx
var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./CommentBox');

ReactDOM.render(
    <CommentBox url='/api/comments.json' pollInterval={2000}/>,
    document.getElementById('content')
);
