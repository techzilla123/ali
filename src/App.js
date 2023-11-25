import React from 'react'
import "./App.css"
import bluee from "./Images/Vector 1.png"
import ble from "./Images/Rectangle 1241.png"
import hum from "./Images/Header Lady 1.png"
import star from "./Images/Frame 4.png"
import stat1 from "./Images/Frame 5.png"
import eli from "./Images/Ellipse 45.png"
import eli1 from "./Images/Rectangle 1244.png"
import ic1 from "./Images/icons8-wall-clock-24 (1) 1.png"
import ic2 from "./Images/icons8-wall-clock-24 (1) 2.png"
import ic3 from "./Images/icons8-wall-clock-24 (1) 3.png"

const App = () => {
  return (
    <div className='page-wrap'><img className='hwww' src={bluee} alt=''></img><header className='hww'>
      <h1 className='logo'>Your Logo</h1>
      <div className='we'>
      <h1 className='log1'>Home </h1>
      <h1 className='log2'>About us  </h1>
      <h1 className='log3'>Service </h1>
      <h1 className='log4'>Courses </h1>
  
  <h1 className='log6'>    <img src={ble} className='ble' alt=''></img><h1 className='gw'>Contact</h1>  </h1>
  <div> <div className='hum1'> <img className='hum1' src={star} alt=''/></div>
  <div> <img className='hum2' src={stat1} alt=''/></div>
    <img className='hum' src={hum} alt=''/>
  
    
    {/* <div className='line1'>ww</div> */}
    <div className='xr'><div className='line2'><img src={eli} alt=''/></div>
    </div>
    
    <div className='rs'><h1 className='her'>A revolutionary
way to educate.</h1>
<p className='pot'>“Online education is electronically supported learning that
 relies on the Internet for teacher/student interaction and
 the distribution of class materials.”</p>
 <button className='buts'>Get Started</button></div>
    <div>
    <div className='rx'> <img className='x1' src={eli1} alt=''/>
      <img className='x2' src={eli1} alt=''/> 
      <img className='x3' src={eli1} alt=''/> 
      </div>
      <div className='xr2'> <img className='xr2' src={ic1} alt=''/> 
      <h1 className='xh1'>60,0000+
      <h1 className='xh11'>Hours Content</h1></h1></div> 
      <div className='xr3'> <img className='xr2' src={ic2} alt=''/> 
      <h1 className='xh1'>10,0000+
      <h1 className='xh11'>Student  </h1></h1></div> 
      <div className='xr4'> <img className='xr2' src={ic3} alt=''/> 
      <h1 className='xh12'>112+
      <h1 className='xh112'>Country</h1></h1></div> 
      <div>

      </div>
      <div className='ne'>
        <input className='name' placeholder='Name'/>
        <input className='email' placeholder='Email'/>
        <button className='sub' type='submit' value="submit"/>

        </div>

        <div>
        
        </div>
    </div>
  </div>
      </div>
      </header><div>
    
    </div></div>
  )
}

export default App;