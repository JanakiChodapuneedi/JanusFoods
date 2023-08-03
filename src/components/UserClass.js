import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("child constructor" );
  }
  async componentDidMount() {
    console.log("componentDidmount");
    const data = await fetch("https://api.github.com/users/JanakiChodapuneedi");
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
    console.log("child render");
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3> Location:{location}</h3>
        <h4> Contact: @janaki</h4>
      </div>
    );
  }
}
export default UserClass;
