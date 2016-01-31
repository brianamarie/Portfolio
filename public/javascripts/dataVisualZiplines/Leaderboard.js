/**
 * Created by Briana on 1/24/16.
 */
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
            url: 'http://fcctop100.herokuapp.com/api/fccusers/top/alltime',
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
    handleChangeRecent: function(event) {
        console.log('recent');
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
    handleChangeAlltime: function(event) {
        console.log('alltime');
        $.ajax({
            url: 'http://fcctop100.herokuapp.com/api/fccusers/top/alltime',
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
                <button id="alltime" onClick={this.handleChangeAlltime}> See best of all time! </button>
                <button id = "recentTime" onClick={this.handleChangeRecent}> See best of recent times! </button>
                <LeaderBox data={this.state.data} />
            </div>
        )
    }
});

var showPage = function(){
    React.render(<LeaderFrame />, document.getElementById('mount'));
};

showPage();
