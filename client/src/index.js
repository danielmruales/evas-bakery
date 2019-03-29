import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import GlobalData from "./GlobalData"


ReactDOM.render(<GlobalData>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>   
                </GlobalData> ,document.getElementById('root'));


