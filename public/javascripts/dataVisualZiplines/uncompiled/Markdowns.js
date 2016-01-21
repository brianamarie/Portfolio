var UserInput = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    render: function(){
        return(
            <p>Hello... </p>
        );
    }
});


var HelloWorld = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    render: function(){
        return(
            <p>Hello... </p>
        );
    }
});

var showPage = function(){
        React.render(<HelloWorld data = {[]} />, document.getElementById('markdown'));
};

showPage();
