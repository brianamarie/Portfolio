var MarkdownForm = React.createClass({
    getInitialState: function() {
      return {text: ''};
    },
    rawMarkup: function() {
        var rawMarkup = marked(this.state.text.toString(),
            {
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
            }
        );
        return { __html: rawMarkup };
    },
    handleTextChange: function(e) {
      this.setState({text: e.target.value});
    },
    render: function() {
       return (
           <div className="container">
                <div className="col-xs-6">
                   <form className="markdownRaw">
                        <textarea
                            placeholder="Write your *markup* here!"
                            value={this.state.text}
                            onChange={this.handleTextChange}>
                        </textarea>
                    </form>
                </div>
                <div className="col-xs-6">
                    <div className="markedText">
                        <span dangerouslySetInnerHTML={this.rawMarkup()} />
                    </div>
                </div>
           </div>
       )
   }
});


var showPage = function(){
        React.render(<MarkdownForm />, document.getElementById('markdown'));
};

showPage();
