import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TimeNow from './components/TimeNow'
import ATM from './components/ATM'
import Hobby from './components/Hobby';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <div>
                <TimeNow/>
                <ATM/>
                <Hobby/>
        </div>
);
