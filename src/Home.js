import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import logo from "./logo2.png";
import bvlogo from "./bvlogo.jpg";
import "./App.css";
import "./home.css";

function Home() {
const navigate = useNavigate();

const handleClick = () => navigate("/table");
return (
<>
<div class="header" height="10%" width="10%">
   <table class="logo">
   <tr>
<td>
<img src={logo} alt="Logo" height="10%" width="45%" />
</td>
<td>
<img src={bvlogo} alt="bvlogo" height="10%" width="50%" id="bvlogo"/>
</td>
</tr>
</table>
</div>
<div className="container1">
<table className="t1">
<tr>
<td>
<button class="b1" onClick={handleClick}>Update </button>
</td>
<td>
<button class="b1">Search </button>
</td>
</tr>
</table>
</div>
</>
);
}
export default Home;


// import React from "react";
// import logo from "./logo2.png";
// import bvlogo from "./bvlogo.jpg";
// import { useNavigate } from "react-router-dom";
// import "./App.css";
// function Home()
// {
//   function Home() {
//     const navigate = useNavigate();
    
//     const handleClick = () => navigate("/table");
//   return(
//     <>
//     <div class="header" height="10%" width="10%">
//             <table class="logo" >
//              <tr> 
//               <td> <img src={logo} alt="Logo" height="10%" width="45%"/></td>
//               <td> <img src={bvlogo} alt="bvlogo" height="10%" width="50%" id="bvlogo"/>  </td>
//             </tr>
//             </table>
//     </div>
//     <div className="container1">
//     <table className="t1">
//       <tr> 
//         <td> <button   class="b1" onClick={handleClick}> ADD </button></td>
       
//         <td> <button  class="b1" >Search  </button></td>
//       </tr>
//     </table>
//     </div>
//     </>
//   )
// }
// }
// export default Home;
=======
import logo from "./logo2.png";
import bvlogo from "./bvlogo.jpg";
import "./App.css";
function Home()
{
  return(
    <>
    <div class="header" height="10%" width="10%">
            <table class="logo" >
             <tr> 
              <td> <img src={logo} alt="Logo" height="10%" width="45%"/></td>
              <td> <img src={bvlogo} alt="bvlogo" height="10%" width="50%" id="bvlogo"/>  </td>
            </tr>
            </table>
    </div>
    <div className="container1">
    <table className="t1">
      <tr> 
        <td> <button   class="b1"> ADD </button></td>
        <td> <button  class="b1"> Edit </button> </td>
        <td> <button  class="b1" > Delete </button>  </td>
        <td> <button  class="b1" >Search  </button></td>
      </tr>
    </table>
    </div>
    </>
  )
}
export default Home;
>>>>>>> a7c89bab5535aa3c03d3e02cb24edc9b501be7dd
