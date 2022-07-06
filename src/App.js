import React, { Component } from 'react';
import Aside from './components/aside/Aside';
import "./App.css"
import Search from './components/search/Search';
import Filter from './components/filter/Filter';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <aside className='aside'>
                    <Aside />
                </aside>
                <main className="main">
                    <Search />
                    <Filter />
                </main>
            </div>
        );
    }
}

export default App;