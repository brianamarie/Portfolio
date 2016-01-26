/**
 * Created by Briana on 1/24/16.
 */
var topThirtyDays = 'http://fcctop100.herokuapp.com/api/fccusers/top/recent';
var topEver = 'http://fcctop100.herokuapp.com/api/fccusers/top/alltime.';

var Leaders = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: 'http://fcctop100.herokuapp.com/api/fccusers/top/recent',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div className="leaderboard">
                Hello, world!
                {this.state}
            </div>
        )
    }
});


var showPage = function(){
    React.render(<Leaders />, document.getElementById('mount'));
};

showPage();
