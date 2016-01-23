var CommentForm = React.createClass({
    getInitialState: function() {
      return {text: ''};
    },
    rawMarkup: function() {
        var rawMarkup = marked(this.state.text.toString(), {sanitize:true});
        return { __html: rawMarkup };
    },
    handleTextChange: function(e) {
      this.setState({text: e.target.value});
    },
    render: function() {
       return (
           <div className="container">
                <div className="col-xs-6">
                   <form className="commentForm">
                        <input
                            type="text"
                            placeholder="Say something"
                            value={this.state.text}
                            onChange={this.handleTextChange}
                        />
                    </form>
                </div>
                <div className="col-xs-6">
                    <div id="markedText">
                        <span dangerouslySetInnerHTML={this.rawMarkup()} />
                    </div>
                </div>
           </div>
       )
   }
});

var CommentBox = React.createClass({
    render: function(){
        return(
            <div className = "commentBox">
                <CommentForm />
            </div>
        );
    }
});

var showPage = function(){
        React.render(<CommentBox />, document.getElementById('markdown'));
};

showPage();
