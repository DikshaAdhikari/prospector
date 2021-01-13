import React from "react";
import './sidebar.css';

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
            <div className='iconsA'>
              <img src="./images/Address-book-icon.svg" alt="ad-book" />
              <img src="./images/paper-plane.svg" alt="plane" />
              <img src="./images/inbox.svg" alt="inbox" />
              <img src="./images/prospects.svg" alt="prospects" />
              <img src="./images/automation.svg" alt="automation" />
              <img src="./images/report.svg" alt="report" />
          </div>
            <div className='iconsB'>
                <img src="./images/billing.svg" alt="billing" />
                <img src="./images/integration.svg" alt="integration" />
                <img src="./images/noti.svg" alt="noti" />
                <img src="./images/profile.svg" alt="profile" />
            </div>
            </div>
        </>
    );
  }
  export default Sidebar;