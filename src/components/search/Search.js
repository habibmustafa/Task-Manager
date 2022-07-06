import React, { Component } from 'react';
import {IoSearchOutline} from "react-icons/io5"
import "./Search.css"

export default class Search extends Component {
  render() {
    return (
      <div className='search-create'>
        <div className="serach__input-container">
          <button className='search__submit'><IoSearchOutline  /></button>
          <input className='search__input' type="text" placeholder='Search Categories'/>
        </div>
        <button className='create__btn'>Create</button>
      </div>
    )
  }
}