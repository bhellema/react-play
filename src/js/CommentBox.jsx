var React = require('react');
var $ = require('jquery');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

var CommentBox = React.createClass({
    displayName: 'CommentBox',
    propTypes: {
        url: React.PropTypes.string
    },
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data:data});
            }.bind(this),
            error: function(xhr, status, err) {
                throw Error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleCommentSubmit: function(comment) {
        // optimize the user experience and not make them wait for the responsible
        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});

        // Comment out the POST for simple demo purposes, the above code will add
        // the new comment to the data source.

        /*$.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                // ignore this as the server doesn't actually send us anything back in this sample
                // this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                // rollback the commment change
                this.setState({data: newComments});
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });*/
    },

    /* executed once to setup the initial state of the component */
    getInitialState: function() {
        return { data: [] };
    },

    /* componentDidMount is called after the first time the component is rendered */
    componentDidMount: function() {
        this.loadCommentsFromServer();
        //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
});

module.exports = CommentBox;
