/**
 * Created by Briana on 1/24/16.
 */
var AllTime = React.createClass({
    //will return json of alltime
    render: function() {
        return (
            <div className="allTime">
            Hello,  all time!
            </div>
        )
    }
});

var Recent = React.createClass({
    render: function() {
        return (
            <div className = "recently">
                <h1> Hello recently. </h1>
            </div>
        )
    }
});

var Leader = React.createClass({
    render: function() {
        return (
            <div className="leader">
                <h2 className="leaderUsername">
                    {this.props.username}
                </h2>
                    <img src={this.props.img} />
                    <h5> Recent points: {this.props.recent} </h5>
                    <h5> All time points: {this.props.alltime} </h5>
            </div>
        );
    }
});

var LeaderBox = React.createClass({
    //box that will display currently selected data
    render: function() {
        console.log('leaderbox working');
        var leaderNodes = this.props.data.map(function(user){
            return(
                <Leader
                    username={user.username}
                    key={user.id}
                    img={user.img}
                    recent={user.recent}
                    alltime={user.alltime}>

                </Leader>
           )
        });
        return (
            <div className="leaderBox">
                {leaderNodes}
            </div>
        )
    }
});

var LeaderFrame = React.createClass({
    //would encase everything, including button that would change data displayed
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
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
        console.log(this.state.data);
        return (
            <div className="leaderboard">
                <Recent />
                <AllTime />
                <LeaderBox data={this.state.data} />
                <button className="alltime"> See best of all time! </button>
                <button className = "recentTime"> See best of recent times! </button>
            </div>
        )
    }
});




var showPage = function(){
    React.render(<LeaderFrame url='http://fcctop100.herokuapp.com/api/fccusers/top/recent' />, document.getElementById('mount'));
};

showPage();
