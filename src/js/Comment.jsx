var React = require('react');

var Comment = React.createClass({
    displayName: 'Comment',
    propTypes: {
        author: React.PropTypes.string,
        children: React.PropTypes.string
    },
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children.toString()}
            </div>
        );
    }
});

module.exports = Comment;
