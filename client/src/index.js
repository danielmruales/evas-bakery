import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import CateringProvider from "./CateringProvider"


ReactDOM.render(<CateringProvider>
                 <BrowserRouter>
                    <App />
                </BrowserRouter>   
                </CateringProvider> ,document.getElementById('root'));


