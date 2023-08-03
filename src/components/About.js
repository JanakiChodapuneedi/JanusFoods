import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component{
constructor(props){
  super(props);
  console.log("parent constructor");
}

render(){
 console.log("parent render")
  return (
    <div>
      <h1> About</h1>
      <h2>
        This is a food ordering app which is similar to home page of swigggy
      </h2>
      <UserClass name="first child  (Class)" location="kanuru (class)" />
    </div>
  );
}
};

export default About;
