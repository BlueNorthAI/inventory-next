// "use client"

// import { useState } from "react";
// import { ShadcnDatePicker } from "shadcn-datepi
// import "react-datepicker/dist/react-datepicker.css";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState(30);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [wealthData, setWealthData] = useState([10000, 15000, 20000, 25000, 30000]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Age:", age);
//     console.log("Selected Date:", selectedDate);
//   };

//   const data = {
//     labels: ["2018", "2019", "2020", "2021", "2022"],
//     datasets: [
//       {
//         label: "Wealth",
//         data: wealthData,
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="date">Select Date:</label>
//         <ShadcnDatePicker
//           selected={selectedDate}
//           onChange={(date) => setSelectedDate(date)}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
