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
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';


class LoginPage extends PolymerElement {
  static get template() {
    return html`
    <style >
    {
    .card {
      margin: auto;
      padding: 16px;
      color: #757575;
      border-radius: 5px;
      background-color: #fff;
      width:50%;
      margin-top: 60px;  
     
     
      }
     
      cursor: default;
    }
  
   
  
  @media screen and (max-width: 350px)  {
    .card{
      width: 100%;
    }
  
  }
  @media screen and (max-width: 600px) {
    .card{
      width: 88%;
    }
  }

  </style>
  <div class="main">
  <app-location route="{{route}}"></app-location>
<br><br>
    <div class="card"> 
    <h2 align=center>Login</h2>
    
    <!-- including user input details-->

<paper-input label="Username"required auto-validate error-message="fill Username!" value="{{Username}}"></paper-input>
<paper-input label="password input" type="password" value="{{password}}" max-length="10"></paper-input>
    <paper-button toggles raised class="green" on-click="submit">submit</paper-button><br>
    <h4>New user please register</h4>
    <paper-button toggles raised class="green" on-click="redirect">Register</paper-button>
  
    </div><br><br>
    
   </div>
  
    `;
  }
  //event listner clicking
  submit(){
    
      if (this.Username=='' || this.password=='' )
      {
        alert("fill the name and password" )
      }
      else if(this.Username!= 'srilekha' || this.password!= 'sri'){
        alert("enter correct details")
      }
      
      else{
      this.set('route.path','/home')
    }
  }
  //redirect event click
  redirect(){
    this.set('route.path','/register')
  }
}


window.customElements.define('login-page', LoginPage);
