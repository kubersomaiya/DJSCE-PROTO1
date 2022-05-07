// import React from 'react'
// import {ref , onValue, child} from 'firebase/database'
// import StartFirebase from './firebaseConfig'
// import { Table } from 'react-bootstrap'

// const db = StartFirebase()

// export default class Admin extends React.Component{

//   constructor(){
//     super()
//     this.state={
//       tableData : []
//     }
//   }

//   componentDidMount(){
//     const dbRef = ref(db , 'Personal Details')

//     onValue(dbRef , (snapshot)=>{
//       let records = []
//       snapshot.forEach(childSnapshot=>{
//         let keyname = childSnapshot.key
//         let data = childSnapshot.val()
//         records.push({"key":keyname,"data":data})
//       })
//       this.setState({tableData:records})
//     })
//   }

//   render(){
//     return(
//       <Table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>SAPID</th>
//             <th>First Name</th>
//             <th>Middle Name</th>
//             <th>Surname</th>
//             <th>Mother Name</th>
//             <th>Phone Number</th>
//             <th>EmailID</th>
//             <th>DOB</th>
//             <th>Address</th>
//             <th>Education Gap</th>
//             <th>Tenth Percentage</th>
//             <th>Twelfth Percentage</th>
//             <th>JEE</th>
//             <th>CET</th>
//             <th>SEM1</th>
//             <th>SEM2</th>
//             <th>SEM3</th>
//             <th>SEM4</th>
//             <th>SEM5</th>
//             <th>SEM6</th>
//           </tr>
//         </thead>

//         <tbody>
//           {this.state.tableData.map((row,index)=>{
//             return(
//               <tr>
//               <td>{index}</td>
//               <td>{row.key}</td>
//               <td>{row.data.SAPID}</td>
//               <td>{row.data.firstName}</td>
//               <td>{row.data.middleName}</td>
//               <td>{row.data.surname}</td>
//               <td>{row.data.motherName}</td>
//               <td>{row.data.phoneNo}</td>
//               <td>{row.data.emailID}</td>
//               <td>{row.data.DOB}</td>
//               <td>{row.data.address}</td>

//               <td>{row.data.educationGap}</td>
//               <td>{row.data.tenthPercent}</td>
//               <td>{row.data.twelfthPercent}</td>
//               <td>{row.data.JEE}</td>
//               <td>{row.data.CET}</td>
//               <td>{row.data.SEM1}</td>
//               <td>{row.data.SEM2}</td>
//               <td>{row.data.SEM3}</td>
//               <td>{row.data.SEM4}</td>
//               <td>{row.data.SEM5}</td>
//               <td>{row.data.SEM6}</td>
//             </tr>
//           )
//         })}
//         </tbody>
//       </Table>
//     )
//   }
// }
