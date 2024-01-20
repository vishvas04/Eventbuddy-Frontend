import { NavLink } from "react-router-dom";
const Navbar=()=>{
     return (
     <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-3'>
       <div className='container-fluid'>
         <a className='navbar-brand' href='#'>
           Event Buddy
         </a>
         <button
           className='navbar-toggler'
           type='button'
           data-bs-toggle='collapse'
           data-bs-target='#navbarSupportedContent'
           aria-controls='navbarSupportedContent'
           aria-expanded='false'
           aria-label='Toggle navigation'
         >
           <span className='navbar-toggler-icon'></span>
         </button>
         <div className='collapse navbar-collapse' id='navbarSupportedContent'>
           <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
             {/* link for home */}
             <li className='nav-item'>
               <NavLink className='nav-link' to=''>
                 Home
               </NavLink>
             </li>
             {/* link for users */}
             <li className='nav-item'>
               <NavLink className='nav-link' to='/user'>
                 UserProfile
               </NavLink>
               {/* <a href='/user' className="nav-link">User Profile</a> */}
             </li>
             {/* link for contactus */}
           </ul>
         </div>
       </div>
     </nav>
     );
     
}
export default Navbar;