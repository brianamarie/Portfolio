var HelloWorld = React.createClass({
    render: function () {
        return Hello;
    }
});

React.renderComponent(React.createElement(MarkedText, null), document.getElementByID("mount"));