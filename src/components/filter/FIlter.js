import React, { Component } from "react";
import {BsList} from "react-icons/bs"
import {MdWindow} from "react-icons/md"
import "./Filter.css";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter-container">
        <div className="filter-left">35 Campaigns</div>
        <div className="filter-right">
          <select className="filter-select" name="date">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <select className="filter-select" name="status">
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="planning">Planning</option>
            <option value="draft">Draft</option>
          </select>
          <button className="filter-btn"><MdWindow style={{"color": "white", "background": "black", "opacity": 0.8}}/></button>
          <button className="filter-btn"><BsList style={{"border": "2px solid #000", "opacity": 0.8}}/></button>
        </div>
      </div>
    );
  }
}