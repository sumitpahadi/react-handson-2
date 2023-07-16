import React, { Component } from "react";
import "../App.css";

export class Classcom extends Component {
  state = {
    Name: "",
    Dept: "",
    Rating: "",
    Empdata: [],
  };

  changehandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.Name);
    event.preventDefault();
  };

  clickhandle = (event) => {
    event.preventDefault();
    let newobject = {
      name: this.state.Name,
      dept: this.state.Dept,
      rating: this.state.Rating,
    };
    let updatedEmpdata = [...this.state.Empdata, newobject];
    this.setState({ Empdata: updatedEmpdata });
    console.log(this.state.Empdata);
  };

  render() {
    return (
      <>
        <div className="top-container">
          <form>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              name="Name"
              value={this.state.Name}
              onChange={this.changehandle}
              required
            />
            <br />
            <label htmlFor="dept">Deptpartment :</label>
            <input
              type="text"
              id="dept"
              placeholder="Enter dept"
              name="Dept"
              value={this.state.Dept}
              onChange={this.changehandle}
              required
            />
            <br />
            <label htmlFor="rating">Rating :</label>
            <input
              type="text"
              id="rating"
              placeholder="Enter rating"
              name="Rating"
              value={this.state.Rating}
              onChange={this.changehandle}
              required
            />
            <br />

            <button onClick={this.clickhandle}>button</button>
          </form>
        </div>
        
        <div className="container">
          <div className="container-1">

          <div className="content">

          {this.state.Empdata.map((item, index) => (
            <div key={index}>
              <span>
                Name: {item.name} | Dept: {item.dept} | Rating {item.rating}
              </span>
            </div>
          ))}
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Classcom;
