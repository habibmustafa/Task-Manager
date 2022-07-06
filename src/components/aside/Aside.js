import React, { Component } from "react";
import { TbLayoutDashboard, TbHeartRateMonitor } from "react-icons/tb";
import { VscListSelection } from "react-icons/vsc";
import { BsPersonCheck } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import "./Aside.css";

class Aside extends Component {
  render() {
    return (
      <>
        <div className="logo">
          <img
            src="https://www.shareicon.net/download/2016/06/23/613989_manager.ico"
            alt="logo"
          />
        </div>
        <ul className="menu">
          <li className="menu-item">
            <TbLayoutDashboard /> <span>Dashboard</span>
          </li>
          <li className="menu-item">
            <TbHeartRateMonitor /> <span>Campaigns</span>
          </li>
          <li className="menu-item">
            <VscListSelection /> <span>Lists</span>
          </li>
          <li className="menu-item">
            <BsPersonCheck /> <span>Subscribers</span>
          </li>
          <li className="menu-item">
            <FiSettings /> <span>Settings</span>
          </li>
        </ul>
      </>
    );
  }
}

export default Aside;