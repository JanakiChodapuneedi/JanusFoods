import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);   
        this.state={
          count : 0,
        }   
        console.log("child constructor"+this.props.name);   
    }
    componentDidMount(){
      console.log("child didmount"+this.props.name)
    }
    render() {
      console.log("child render"+this.props.name);
      const {name,location} = this.props;
      const {count} = this.state;
    return (
      <div className="user-card">
        <h1>count: {count}</h1>
        <button onClick={()=>{
          this.setState({
            count: this.state.count+1
          })
        }}>Update count</button>
        <h2>Name: {name}</h2>
        <h3> Location:{location}</h3>
        <h4> Contact: @janaki</h4>
      </div>
    );
  }
}
 export default UserClass;