import React from "react";
import "./MemberNames.css";
const allNames = [
  [
    "Abhijeet K.G.",
    "Abhilasha Y.",
    "Abhishek S.S.",
    "Aditi",
    "Animesh V.",
    "Anshu K.",
    "Anshul U.V.",
    "Anup T.",
    "Aryan S.",
    "Aryansh T.",
    "Ashutosh G.",
    "Ayush C.",
    "Ayush S.",
    "Divyam V.",
    "Geetika S.",
    "Harsh V.B.",
    "Hitesh K.",
    "Jana A.",
    "Jujjavarapu A.C.",
    "Kajol",
    "Kandukuri S.",
    "Lakshmi K.P.",
    "Manish S.",
    "Manshi K.",
    "Muskan G.",
    "Nandan K.",
    "Palak A.",
    "Pawan K.S.",
    "Peddi M.C.",
    "Penumala P.B.",
    "Sahil T.",
    "Shubham S.",
    "Shyam Sunder S.",
    "Sonakshi J.",
    "Tandle R.R.",
    "Tushar P.S.",
    "Vicky B.",
    "Vinita M.",
  ],
  [
    "Abhay Y.",
    "Abhijeet.",
    "Abhinav M.",
    "Abhishek R.",
    "Adarsh R.",
    "Akhand P. Y.",
    "Aman K. Y.",
    "Aman S.",
    "Ankit K.",
    "Anshika S.",
    "Anshu S. C.",
    "Anulika P.",
    "Anushka S.",
    "Arin G.",
    "Arpit S.",
    "Aryan A.",
    "Ashish P.",
    "Ashwani K. S.",
    "Ayush A.",
    "Ayush S.",
    "Ayush S.",
    "Bhabani S. P.",
    "Bhargav B.",
    "Bhargav P. N.",
    "Bhupendra K. M.",
    "Biswarup D.",
    "Chetan V.",
    "Deepankar S.",
    "Devansh J.",
    "Devesh S.",
    "Dhruv.",
    "Gunjit D.",
    "Gurmeet.",
    "Harsh P.",
    "Indresh K.",
    "Ishan P.",
    "Kalpik M.",
    "Krishna G.",
    "Lakhadive M. R.",
    "Manish.",
    "Mansi A. P.",
    "Manvi S.",
    "Mayank S.",
    "Mithilesh K.",
    "Mukesh K.",
    "Muskan P.",
    "Nandini B.",
    "Nimish P.",
    "Nishkarsh S.",
    "Param S.",
    "Pinku V.",
    "Prachi P.",
    "Prakhar Y.",
    "Pratham C.",
    "Pratik N.",
    "Prem P.",
    "Priyaranjan K. K.",
    "Radhika S. R.",
    "Rahul P. S.",
    "Ravikoti D.",
    "Rishabh K. T.",
    "Saatwiik S.",
    "Sachin O.",
    "Sagar K.",
    "Sanjeev V.",
    "Sarthak A.",
    "Sarthak G.",
    "Saurabh K.",
    "Shibanshee R.",
    "Shreyash K.",
    "Shridhar K.",
    "Singh R. B.",
    "Sonal K.",
    "Suryansh M.",
    "Sutirtha B.",
    "Suyash V.",
    "Swastik M.",
    "Tanmay Y.",
    "Tejbahadur R.",
    "Vineet S.",
    "Vinod B.",
    "Vishal Y.",
    "Vishu R.",
    "Vivek S.",
    "Yash S.",
  ],
  [
    "Aakash S.",
    "Abhay R. S.",
    "Abhijeet M.",
    "Abhishek S.",
    "Achintya S.",
    "Aditya M.",
    "Aekansh G.",
    "Akanksha P.",
    "Akshat A.",
    "Aman M. S.",
    "Amartya S.",
    "Anubhav B.",
    "Anurag P.",
    "Archit T.",
    "Arnav S.",
    "Arpit G.",
    "Aryan C.",
    "Aryan M.",
    "Avdhesh.",
    "Ayush .K",
    "Ayush R.",
    "Deepak Y.",
    "Divyanshu G.",
    "Gaurav K. M.",
    "Harsh P.",
    "Jatin K.",
    "Jatin S.",
    "Jatin S.",
    "Jayesh S.",
    "Kush G.",
    "Kushal.",
    "Manvendra",
    "Moksh T.",
    "Mugdha C.",
    "Naisarg R. P.",
    "Narendra",
    "Navneet P.",
    "Nitin",
    "Parna M.",
    "Piyush K.",
    "Prakhar S.",
    "Prithvi D.",
    "Reshma K.",
    "Saloni S.",
    "Satyam C.",
    "Shefali J.",
    "Shikha K.",
    "Shinjan T.",
    "Shreyas G.",
    "Shubham P.",
    "Shubhendra T.",
    "Sumit D.",
    "Sumit S.",
    "Sunil P.",
    "Supriya K.",
    "Supriya S.",
    "Utkarsh S.",
    "Vedaant G.",
    "Vijyant V. S.",
    "Vipul A.",
    "Virat P.",
  ],
];



//   function getRandomNames(count) {
//     const shuffledNames = [...allNames];
//     const randomNames = [];
  
//     for (let i = 0; i < count; i++) {
//       const randomIndex = Math.floor(Math.random() * shuffledNames.length);
//       randomNames.push(shuffledNames.splice(randomIndex, 1)[0]);
//     }
  
//     return randomNames;
//   }
  
//   function MemberNames() {
//     const [names, setNames] = useState(getRandomNames(19));
  
//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         setNames(getRandomNames(10));
//       }, `${800}`); // Change names every 5 seconds (adjust as needed)
  
//       return () => clearInterval(intervalId);
//     }, []);
  
//     return (
//       <div className="big-rectangle" style={{ height: '25vh', position: 'relative', width: '100%', overflow: 'hidden'}}>
//         {names.map((name, index) => (
//           <span
//             key={index}
//             className="name"
//             style={{
//               position: 'absolute',
//               top: `${(index/5)*30 + Math.random()*20}%`, // Random left position within 0-
//               left: `${(index%5)*19 + Math.random()*10}%`
//             }}
//           >
//             {name}
//           </span>
//         ))}
//       </div>
//     );
//   }    
const MemberNames = () => {
    return (
      <div className="member-names-container">
        {allNames.map((post, index) => {
          return (
            <div key={index} className="name-list">
              <h1>Year {4 - index}</h1>
              <ul>
                {post.map((name, index) => {
                  return <li key={index}>{name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default MemberNames;
  
  