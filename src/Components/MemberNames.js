import React from "react";
import "./MemberNames.css";
const allNames = [
    [
        "Ayush S.",
        "Jujjavarapu A.C.",
        "Geetika S.",
        "Manshi K.",
        "Muskan G.",
        "Palak A.",
        "Sonakshi J.",
        "Vinita M.",
        "Anshu K.",
        "Aditi",
        "Harsh V.B.",
        "Shyam Sunder S.",
        "Manish S.",
        "Vicky B.",
        "Sahil T.",
        "Shubham S.",
        "Jana A.",
        "Abhijeet K.G.",
        "Anup T.",
        "Aryan S.",
        "Divyam V.",
        "Pawan K.S.",
        "Abhishek S.S.",
        "Kandukuri S.",
        "Hitesh K.",
        "Animesh V.",
        "Aryansh T.",
        "Ayush C.",
        "Tandle R.R.",
        "Tushar P.S.",
        "Abhilasha Y.",
        "Peddi M.C.",
        "Ashutosh G.",
        "Nandan K.",
        "Kajol",
        "Anshul U.V.",
        "Penumala P.B.",
        "Lakshmi K.P."
    ],
    [
        "Mithilesh K.",
        "Deepankar S.",
        "Tanmay Y.",
        "Devansh J.",
        "Ashwani K S.",
        "Arin G.",
        "Shridhar K.",
        "Aman S.",
        "Yash S.",
        "Singh R B.",
        "Aryan A.",
        "Ayush A.",
        "Kalpik M.",
        "Ashish P.",
        "Pinku V.",
        "Abhijeet.",
        "Abhinav M.",
        "Priyaranjan K K.",
        "Rahul P S.",
        "Bhupendra K M.",
        "Prem P.",
        "Suyash V.",
        "Bhargav P N.",
        "Param S.",
        "Swastik M.",
        "Vishal Y.",
        "Mukesh K.",
        "Tejbahadur R.",
        "Sachin O.",
        "Anshu S C.",
        "Bhargav B.",
        "Bhabani S P.",
        "Biswarup D.",
        "Sutirtha B.",
        "Vivek S.",
        "Suryansh M.",
        "Nishkarsh S.",
        "Mayank S.",
        "Devesh S.",
        "Nandini B.",
        "Anushka S.",
        "Muskan P.",
        "Anulika P.",
        "Shibanshee R.",
        "Prachi P.",
        "Sagar K.",
        "Vinod B.",
        "Saatwiik S.",
        "Prakhar Y.",
        "Ayush S.",
        "Sanjeev VA.",
        "Nimish P.",
        "Gurmeet.",
        "MANSI A P.",
        "Shreyash K.",
        "Adarsh R.",
        "Ishan P.",
        "Ayush S.",
        "Sarthak A.",
        "Ravikoti D.",
        "Chetan V.",
        "Anshika S.",
        "Arpit S.",
        "Saurabh K.",
        "Indresh K.",
        "Vishu R.",
        "Aman K Y.",
        "Harsh P.",
        "Ankit K.",
        "Vineet S.",
        "Akhand P Y.",
        "Pratik N.",
        "Radhika S R.",
        "Krishna G.",
        "Abhishek R.",
        "Pratham C.",
        "Rishabh K T.",
        "Sarthak G.",
        "Dhruv.",
        "LAKHADIVE M R.",
        "MANVI S.",
        "Gunjit D.",
        "Abhay Y.",
        "Manish.",
        "Sonal K."
    ],
    [
        "Arpit G",
        "Abhijeet M",
        "Prithvi D",
        "Vedaant G",
        "Achintya S",
        "Vipul A",
        "Shinjan T",
        "Sumit D",
        "Nitin",
        "Kush G",
        "Avdhesh",
        "Aman M S",
        "Aditya M",
        "Ayush R",
        "Sumit S",
        "Deepak Y",
        "Vijyant V S",
        "Arnav S",
        "Parna M",
        "Akshat A",
        "Piyush K",
        "Kushal",
        "Jatin K",
        "Gaurav K M",
        "Navneet P",
        "Naisarg R P",
        "Jayesh S",
        "Aekansh G",
        "Harsh P",
        "Shefali J",
        "Prakhar S",
        "Akanksha P",
        "Utkarsh S",
        "Virat P",
        "Divyanshu G",
        "Aakash S",
        "Satyam C",
        "Aryan M",
        "Abhay R S",
        "Abhishek S",
        "Supriya S",
        "Supriya K",
        "Shreyas G",
        "Shubham P",
        "Shubhendra T",
        "Reshma K",
        "Saloni S",
        "Mugdha C",
        "Shikha K",
        "Narendra",
        "Aryan C",
        "Jatin S",
        "Sunil P",
        "Jatin S",
        "Manvendra",
        "Moksh T",
        "Archit T",
        "Anubhav B",
        "Anurag P",
        "Amartya S",
        "Ayush K"
    ]
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
  
  