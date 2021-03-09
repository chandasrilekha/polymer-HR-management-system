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

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-route.js';

class Navbar extends PolymerElement {
  static get template() {
    return html`
      <style>
     
      .press {
          display: block;  
          padding: 0;     
          margin: 0;      
          width: 100%; 
          background-color:black; 
        
      }
    
    .press li {
          display: inline-block; 
          width: 10%;  
          color:white;         
          text-align: center; 
          
    }
    .press-logo paper-button
        {
          font-size:15px;
        }
   
    
    @media (max-width: 960px) and (min-width: 501px) {
        .press li { 
          width: 50%;
        } /* Show 2 logos per row on medium devices (tablets, phones in landscape) */
    }
    
    @media (max-width: 500px) {
        .press li {
           width: 100%; 
          } /* On small screens, show one logo per row */
    }
      </style>
      <app-location route="{{route}}"></app-location>

            
                  <ul class="press">
                    <li>
                      <div class="press-logo">
                      <paper-button toggles raised class="green"  on-click="service">Services</paper-button>
                    

                      </div>
                     
                    </li><li>
                      <div class="press-logo">
                      <paper-button toggles raised class="green" on-click="job">job openings</paper-button>
                      </div>
                     
                    </li><li>
                      <div class="press-logo">
                      <paper-button toggles raised class="green" on-click="emp">employee</paper-button>
                      </div>
                     
                    </li>
                    <li>
                    <div class="press-logo">
                    <paper-button toggles raised class="green" on-click="add">Add employee</paper-button
                    </div>
                    
                  </li><li>
                      <div class="press-logo">
                      <paper-button toggles raised class="green" on-click="logout">logout</paper-button
                      </div>
                      
                    </li>
                    
                  </ul>
         








    `;
  }
 
  service(){
    this.set( 'route.path', '/services' )
  }
  
  emp(){
    this.set( 'route.path', '/emp' )
  }
  
  job(){
    this.set( 'route.path', '/jobopenings' )
  }
  add(){
    this.set( 'route.path', '/formdata' )
  }
  logout(){
    this.set( 'route.path', '/loginpage' )
    location.reload();
  }
  Click()
  {
     this.set('route.path','/loginpage');
   }
}

window.customElements.define('nav-page', Navbar);
