import React, { Component } from 'react';

export default class LeaderboardTable extends Component {

  constructor(props) {
    super(props);

    this.users = null;
    this.state = {
      loading: true,
      arrowOn: "recent"
    }
  }

  fetchUsers(userType) {
    this.setState({loading: true});
    fetch(userType === "recent" ? 'https://fcctop100.herokuapp.com/api/fccusers/top/recent' : 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then((response) => {
      return response.json();
    }).then((json) => {
      this.users = json;
      this.setState({loading: !(this.users)});

    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })

    this.setState({arrowOn: userType});
  }

  componentDidMount() {
    this.fetchUsers("recent");
  }

  render() {

    return (
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="index" style={{width: "60px"}}>#</th>
              <th style={{width: "400px"}}>Camper Name</th>

              <th style={{width: "400px"}}>
                <a href="#" onClick={(e) => this.fetchUsers("recent")}>
                  Points in past 30 days
                </a>
                {this.state.arrowOn === "recent" ? <span className="arrowDown">▼</span> : null}
                </th>

              <th style={{width: "300px"}}>
                <a href="#" onClick={(e) => this.fetchUsers("alltime")}>
                  All time points
                </a>
                {this.state.arrowOn === "alltime" ? <span className="arrowDown">▼</span> : null}
              </th>

            </tr>
          </thead>
          <tbody>
            {!this.state.loading ?
              this.users.map((user, index) =>
                <tr key={index + 1}>
                  <td className="index">{index + 1}</td>
                  <td>
                    <img src={user.img}/>
                    {user.username}
                  </td>
                  <td>{user.recent}</td>
                  <td>{user.alltime}</td>
                </tr>
              ) : ""
            }
          </tbody>
        </table>
        {this.state.loading ?
          <div className="container">
            <h3 style={{textAlign: "center"}}>Loading Users...</h3>
          </div> : ""
        }
      </div>
    );
  }
}
