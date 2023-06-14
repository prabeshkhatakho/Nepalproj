import React, {useState} from 'react'
import { SidebarData } from "./SidebarData";
import './sidebar.css'; // Import the CSS file


function Sidebar() {

  

  return (
    <>
      <div className='Left-Sidebar' >
      <ul>
          {SidebarData.map((val,key) => {
              return (
                  <li key = {key} onClick={()=> {window.location.pathname = val.link}}>
                      {""}
                      <div>{val.icon}</div>{""}
                      <div>
                          {val.title}
                      </div>

                  </li>
              )
      })}
      </ul>
        
      </div>
      <div className='Right-Sidebar'>
        <ul>
          <ol>
            <div>
              Right sidebar
            </div>
          </ol>
        </ul>
       
      </div>

      

    </>
  )
}

export default Sidebar;
