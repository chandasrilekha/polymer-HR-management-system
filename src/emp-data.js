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
import '@polymer/app-route/app-route.js';
import '@polymer/paper-button/paper-button.js';
import './nav-page.js';

class  Emp extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        #content {
          position:relative;
          background:white;
          padding:50px 0 0px 0;
        }table, td, th {  
          border: 1px solid #ddd;
          text-align: left;
        }
        
        table {
          border-collapse: collapse;
          width: 100%;
         
        }
        
        th, td {
          padding: 15px;
        }
        
      </style>
      <app-location route="{{route}}"></app-location>
      <nav-page></nav-page>
  <br>
      <h1>Employee Details</h1>
      <table >
      <thead>
     
        <tr>
        <th scope="col">Employee Name</th>
        <th scope="col">Designation</th>
        <th scope="col">Email ID</th>
        <th scope="col">Address</th>
        <th scope="col">Employee ID </th>
        <th scope="col">Phone Number</th>
        
        </tr>
      </thead>
      <tbody>
      <tr>
      <th scope="col">[[newData.fname]]</th>
      <th scope="col">[[newData.designation]]</th>
      <th scope="col">[[newData.email]]</th>
      <th scope="col">[[newData.address]]</th>
      <th scope="col">[[newData.id]] </th>
      <th scope="col">[[newData.phone]]</th>
      
      </tr>
        <tr>
        <th scope="row">Mani Shankar</th>
        <td>Associate IT Manager</td>
        <td>mani@gmail.com</td>
        <td> vidya nagar</td>
        <td>20211</td>
        <td>9876543219</td>
        
        </tr>

        <tr>
        <th scope="row">Sainath</th>
        <td>Associate IT Manager</td>
        <td>saii@gmail.com</td>
        <td> sai nagar</td>
        <td>20212</td>
        <td>9234566678</td>
        
        </tr>

        <tr>
        <th scope="row">Thamil</th>
        <td>Associate IT Manager</td>
        <td>mani@gmail.com</td>
        <td> sr nagar</td>
        <td>20213</td>
        <td>9234566678</td>
        
        </tr>

        <tr>
        <th scope="row">Niranjan</th>
        <td>Associate IT Manager</td>
        <td>niranjan@gmail.com</td>
        <td> sai street</td>
        <td>20214</td>
        <td>9234566678</td>
        
        </tr>

        <tr>
        <th scope="row">Mahesh</th>
        <td>Associate IT Manager</td>
        <td>Mahi@gmail.com</td>
        <td> sr Nagar</td>
        <td>20215</td>
        <td>9234566666</td>
       
        </tr>

        <tr>
        <th scope="row">Rishitha</th>
        <td>Associate IT Manager</td>
        <td>rishi@gmail.com</td>
        <td> gandhi street</td>
        <td>20216</td>
        <td>9239956667</td>
       
        </tr>

        <tr>
        <th scope="row">Uneeth</th>
        <td>Associate IT Manager</td>
        <td>Unetth@gmail.com</td>
        <td> super bazar</td>
        <td>20217</td>
        <td>9234566678</td>
       
        </tr>

        <tr>
        <th scope="row">Srilekha</th>
        <td>Associate IT Manager</td>
        <td>sri@gmail.com</td>
        <td>vivekanda street</td>
        <td>20218</td>
        <td>9234566678</td>
       
        </tr>

        <tr>
        <th scope="row">Samarth</th>
        <td>Associate IT Manager</td>
        <td>sam@gmail.com</td>
        <td> sai3 street</td>
        <td>20219</td>
        <td>9234566678</td>
        
        </tr>

        <tr>
        <th scope="row">Reshmi</th>
        <td>Associate IT Manager</td>
        <td>reshmi@gmail.com</td>
        <td> vidya nagar</td>
        <td>202110</td>
        <td>9234566678</td>
        
        </tr>

        <tr>
        <th scope="row">Bhanu</th>
        <td>Associate IT Manager</td>
        <td>banu@gmail.com</td>
        <td> sai street</td>
        <td>202111</td>
        <td>9234566678</td>
        
        </tr>

        <tr>
        <th scope="row">Naveen</th>
        <td>Associate IT Manager</td>
        <td>naveen@gmail.com</td>
        <td> sai street</td>
        <td>202112</td>
        <td>9234566678</td>
       
        </tr>

        <tr>
        <th scope="row">Uttej</th>
        <td>Associate IT Manager</td>
        <td>uttej@gmail.com</td>
        <td> sai street</td>
        <td>202113</td>
        <td>9234566678</td>
       
        </tr>

        
        <tr>
        <th scope="row">vishnu</th>
        <td>Associate IT Manager</td>
        <td>vishnu@gmail.com</td>
        <td> sai street</td>
        <td>202114</td>
        <td>9234566678</td>
      
        </tr>
       
      </tbody>
      </table>
  
 
    `;
  }
  static get properties() {
    return {
     //-----------------------------student name------------------>
      
      
      newData:{
        type:Object,
        value:{},
        notify:true 
      }
    };
  
  }


}

window.customElements.define('emp-data', Emp);
