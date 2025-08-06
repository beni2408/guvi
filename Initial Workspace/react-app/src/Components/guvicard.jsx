// // import App from "../App";

// // import AcceptButton from "./Components/acceptbutton";
// // import Bottomcard from "./Components/bottomcard";
// // import GuviCard from "./Components/guvicard";
// // import MiddleContent from "./Components/middlecontent";
// // import TopContent from "./Components/topcontent";

// export default function GuviCard({ courseDetails }) {
//   function convertEpochToTime(epoch) {
//     let milliseconds = epoch * 1000;
//     let newDate = new Date(milliseconds);
//     return newDate.toLocaleTimeString().slice(0, 5);
//   }
//   function getType(type) {
//     if (type == "WE") {
//       return "Week End";
//     } else if (type == "WD") {
//       return "Weed Day";
//     } else {
//       return "NIL";
//     }
//   }

//   return (
//     <div className="guvi-card">
//       <TopContent
//         courseDetails={courseDetails}
//         convertEpochToTime={convertEpochToTime}
//       />
//       <MiddleContent courseDetails={courseDetails} />
//       <Bottomcard courseDetails={courseDetails} getType={getType} />
//     </div>
//   );
// }
