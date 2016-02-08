var Leader = React.createClass({
    render: function() {
        return (
            <div className="leader row">
                <div className="col-xs-1">
                    <h5>{this.props.rank}</h5>
                </div>
                <div className="col-xs-2">
                    <img src={this.props.img} className="center-block img-responsive" />
                </div>
                <div className="col-xs-5">
                    <h2 className="leaderUsername">
                        {this.props.username}
                    </h2>
                </div>
                <div className="col-xs-2">
                    <h5>{this.props.recent} </h5>
                </div>
                <div className="col-xs-2">
                    <h5>{this.props.alltime} </h5>
                </div>
            </div>
        );
    }
});

var LeaderBox = React.createClass({
    //box that will display currently selected data
    render: function() {
        var leaderNodes = this.props.data.map(function(user, rank){
            return(
                <Leader
                    rank={rank+1}
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
                <div className="container">
                    <row>
                        <div className="col-xs-1">
                            <h4>Rank</h4>
                        </div>
                        <div className="col-xs-7">
                            <h4>User</h4>
                        </div>
                        <div className="col-xs-2">
                            <button id="alltime" className="btn btn-default" onClick={this.handleChangeAlltime}> Points - all time</button>
                        </div>
                        <div className="col-xs-2">
                            <button id = "recentTime" className="btn btn-default" onClick={this.handleChangeRecent}> Points - 30 days </button>
                        </div>
                    </row>
                </div>
                <div className="container">
                    <LeaderBox data={this.state.data} />
                </div>
            </div>
        )
    }
});

var showPage = function(){
    React.render(<LeaderFrame />, document.getElementById('mount'));
};

showPage();