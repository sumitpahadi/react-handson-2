// import React, { Component } from "react";
// import "../App.css";

// export class Classcom extends Component {
//   state = {
//     Name: "",
//     Dept: "",
//     Rating: "",
//     Empdata: [],
//   };

//   changehandle = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//     // console.log(this.state.Name);
//     event.preventDefault();
//   };

//   clickhandle = (event) => {
//     event.preventDefault();
//     let newobject = {
//       name: this.state.Name,
//       dept: this.state.Dept,
//       rating: this.state.Rating,
//     };
//     this.state.Empdata.push(newobject)
//     this.setState({ Empdata: this.state.Empdata });
//     console.log(this.state.Empdata);
//   };

//   render() {
//     return (
//       <>
//         <div className="top-container">
//           <form>
//             <label htmlFor="name">Name :</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter name"
//               name="Name"
//               value={this.state.Name}
//               onChange={this.changehandle}
//               required
//             />
//             <br />
//             <label htmlFor="dept">Deptpartment :</label>
//             <input
//               type="text"
//               id="dept"
//               placeholder="Enter dept"
//               name="Dept"
//               value={this.state.Dept}
//               onChange={this.changehandle}
//               required
//             />
//             <br />
//             <label htmlFor="rating">Rating :</label>
//             <input
//               type="text"
//               id="rating"
//               placeholder="Enter rating"
//               name="Rating"
//               value={this.state.Rating}
//               onChange={this.changehandle}
//               required
//             />
//             <br />

//             <button onClick={this.clickhandle}>button</button>
//           </form>
//         </div>
        
//         <div className="container">
//           <div className="container-1">

//           <div className="content">

//           {this.state.Empdata.map((item, index) => (
//             <div key={index}>
//               <span>
//                 Name: {item.name} | Dept: {item.dept} | Rating {item.rating}
//               </span>
//             </div>
//           ))}
//           </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Classcom;



import React, { useState } from "react";
import "../App.css";

const FunctionalComponent = () => {
  const [Name, setName] = useState("");
  const [Dept, setDept] = useState("");
  const [Rating, setRating] = useState("");
  const [Empdata, setEmpdata] = useState([]);

  const changehandle = (event) => {
    const { name, value } = event.target;
    if (name === "Name") setName(value);
    else if (name === "Dept") setDept(value);
    else if (name === "Rating") setRating(value);
  };

  const clickhandle = (event) => {
    event.preventDefault();
    const newobject = {
      name: Name,
      dept: Dept,
      rating: Rating,
    };
    setEmpdata([...Empdata, newobject]);
    console.log(Empdata);
  };

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
            value={Name}
            onChange={changehandle}
            required
          />
          <br />
          <label htmlFor="dept">Department :</label>
          <input
            type="text"
            id="dept"
            placeholder="Enter department"
            name="Dept"
            value={Dept}
            onChange={changehandle}
            required
          />
          <br />
          <label htmlFor="rating">Rating :</label>
          <input
            type="number"
            id="rating"
            placeholder="Enter rating"
            name="Rating"
            value={Rating}
            onChange={changehandle}
            required
          />
          <br />

          <button onClick={clickhandle}>Submit</button>
        </form>
      </div>

      <div className="container">
        <div className="container-1">
          <div className="content">
            {Empdata.map((item, index) => (
              <div key={index}>
                <span>
                  Name: {item.name} | Department: {item.dept} | Rating: {item.rating}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionalComponent;



// import React from 'react';
// import {Component} from 'react';

// class FormClass extends Component{
//     state={
//         Name:'',
//         DeptName:'',
//         Rate:' ',
//         EmpData: []
//     }
//     changeHandle=(e)=>{
//         this.setState({[e.target.name] : e.target.value})
//     }
//     clickHandle=()=>{
//         let newObj={
//             Name: this.state.Name,
//             DeptName:this.state.DeptName
//         }
//         this.state.EmpData.push(newObj);
//         this.setState({EmpData: this.state.EmpData})
//         console.log(this.state.EmpData);
//     }
//     render()
//     {
//         return(
//         <div >
           
//          <form id='FormBox'>
//              <label id='name1' htmlFor='name'>Name :</label>
//             <input 
//             id='name' 
//             type='text' 
//             placeholder='Enter Name'
//             name='Name' 
//             value={this.state.Name} onChange={this.changeHandle} required /> <br/>
//             <label id='dept1' htmlFor='Dept'>Department :</label>
//             <input 
//             id='dept' 
//             type='text' 
//             placeholder='Enter Dept Name' name='DeptName' 
//             value={this.state.DeptName} onChange={this.changeHandle} required />
//             <br/>
//             <label id='rate1' htmlFor='Rate'>Rating :</label>
//             <input 
//             id='rate' 
//             type="number"
//             min="1"
//             max="5"
//             placeholder='Enter Rating' 
//             name='Rate' 
//             value={this.state.Rate} onChange={this.changeHandle} required />
//             <br/>
//              <button type='button'  onClick={this.clickHandle}>Submit</button>
//          </form>
      
//          {this.state.EmpData.map((item,index)=>{
//           return(
//           <div id='contentbox'>
//            <span id='content'> Name: {item.Name} 
//            || Department : {item.DeptName} || Rate: {item.Rate}</span>
//         </div>
//     )
//   })}      
//      </div> 

//   )
//     }
// }
//  export default FormClass;