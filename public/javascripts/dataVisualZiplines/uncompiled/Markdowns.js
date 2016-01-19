var HelloWorld = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function(){
        $('#userInput').html();
    },
    render: function(){
        return(
            <p>Hello!!! </p>
        );
    }
});



React.render(<HelloWorld data = {[]} />, document.getElementById('markdown'));