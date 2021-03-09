/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
//importing paper elements
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import './nav-page.js';

class Services extends PolymerElement {
  static get template() {
    return html`
    <style  include="shared-styles">
* {
    box-sizing: border-box;
  }
  
  body {
   
    padding: 20px;
    font-family: Arial;
  }
  
  
  .row {
    margin: 8px -16px;
  }
  
  /* Add padding BETWEEN each column */
  .row,
  .row > .column {
    padding: 8px;
  }
  
  /* Create four equal columns that floats next to each other */
  .column {
    float: left;
    width: 25%;
  }
  
  /* Clear floats after rows */ 
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Content */
  .content {
    font-size:17px;
    background-color:white;
    padding: 10px;
  }
  
  
  @media screen and (max-width: 900px) {
    .column {
      width: 50%;
    }
  }
  
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }

  }
  button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  .wrapper{
    
    margin-top:70px;
  }
  h2{
    margin-left:10px;
  }
  .footer{
    font-family: 'Nunito', sans-serif;
    position: relative;
    font-weight: 700;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: none;
    color:black;
    text-align: center;
  }
  @media (max-width: 960px) and (min-width: 501px) {
   
    .wrapper{
      margin:10px;
    }
}

@media (max-width: 500px) {
  
  .wrapper{
    margin:10px;
  }
}
 
 
  </style>
  <app-location route="{{route}}"></app-location>
  <nav-page></nav-page>
 
  <div class="wrapper">
  
<!--main content starts-->
<div class="row">
<div class="column">
  <div class="content">
  <h5 class="card-title">Time Managment</h5>
    <p>Time management is the process of planning and exercising conscious control of time spent on specific activities, especially to increase effectiveness, efficiency, and productivity. It involves a juggling act of various demands upon a person relating to work, social life, family.</p>
  </div>
</div><div class="column">
<div class="content">
<h5 class="card-title">Recruitment</h5>
<p class="card-text"> Choose Your Employee Recruitment Tool from the Premier Resource for Businesses! Browse over 7,000 Apps. Compare Top Business Apps. Free Trials. Over 1,000,000 Reviews. Increase Productivity. Save Time & Money. 800k Businesses Served.Save Time & Money 800k Businesses.</p>
</div>
</div>
<div class="column">
  <div class="content">
  <h5 class="card-title">System administration</h5>
  <p class="card-text">A system administrator, or sysadmin, is a person who is responsible for the upkeep, configuration, and reliable operation of computer systems; especially multi-user computers, such as servers. The system administrator seeks to ensure that the uptime such as servers.reliable operation</p>
  </div>
</div>
<div class="column">
  <div class="content">
  <h5 class="card-title">Request Desk</h5>
  <p class="card-text"> The numerous help desk tickets raised in your organization are organized and tracked in the Requests module. The Requests module enables you to handle tickets promptly, assign tickets to technicians, merge similar requests and so on.By keeping track of the outstanding  </p>

  </div>
</div>
</div>
<br><br><br><br><br><br>

    `;
  }
}


window.customElements.define('services-page', Services);
