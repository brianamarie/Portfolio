/**
 * Created by Briana on 1/24/16.
 */
var Leaders = React.createClass({
    render: function() {
        return (
            <div className="leaderboard">
                Hello, world!
            </div>
        )
    }
});


var showPage = function(){
    React.render(<Leaders />, document.getElementById('mount'));
};

showPage();
