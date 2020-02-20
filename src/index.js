import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import IndustriesPage from './views/Industries/ourIndustries';
import BrandsPage from './views/Brands/ourBrands';

import VisionPage from './views/Company/vision';
import FounderPage from './views/Company/founder';
import BoardPage from './views/Company/Board/board';
import ManagementPage from './views/Company/Management/management';

import PressPage from './views/Media/Press/press';
import GalleryPage from './views/Media/Gallery/galleryPage';

import ContactPage from './views/Contact/contact';

import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const routing = (
    <Router>
      <div>
        <Route exact  path="/" component={App} />
        <Route path="/Our-Industries" component={IndustriesPage} />
        <Route path="/Our-Brands" component={BrandsPage} />

        <Route path="/Our-Vision" component={VisionPage} />
        <Route path="/Our-Founder" component={FounderPage} />
        <Route path="/Board-of-Directors" component={BoardPage} />
        <Route path="/Our-Management-Team" component={ManagementPage} />

        <Route path="/Press" component={PressPage} /> 
        <Route path="/Gallery" component={GalleryPage} /> 

        <Route path="/Contact" component={ContactPage} />     
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
