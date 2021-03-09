/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';


class RegisterApp extends PolymerElement {
  static get properties () {
    return {
      UserName: {
        type: String,
        value: 'SRILEKHA' ,
        observer:"_change"
      },
      Password: {
        type: String,
        value: ""
       
      },
    };
    
  }
  _change(){
    console.log(this.UserName);
  }
  // _show(){
  //  window.alert("dont enter values");
  // }
  

  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
    <style >
    .card {
      margin: 24px;
      padding: 16px;
      color: #757575;
      border-radius: 5px;
      background-color: #fff;
      
      }
      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
        text-align: center;
      }

    }
  </style>
  <app-location route="{{route}}"></app-location>

  <h1>Employee Details</h1>
    <div class="card">
    <paper-input always-float-label label="Employee Name" value= "{{name}}" required auto-validate error-message="fill Employee Name" char-counter maxlength="10"></paper-input>
    <paper-input always-float-label label="Designation"value= "{{designation}}"  required auto-validate error-message="fill Designation " char-counter maxlength="10"></paper-input>
    <paper-input always-float-label label="Email ID" value= "{{mail}}" required auto-validate error-message="fill Email ID" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></paper-input>
    <paper-input always-float-label label="Address" value= "{{address}}" required auto-validate error-message="fill Address"></paper-input>
    <paper-input always-float-label label="Employee ID" value= "{{id}}" required auto-validate error-message="fill Employee ID"></paper-input>
    <paper-input  value="{{phone}}" always-float-label label="Phone" required auto-validate error-message="enter mobile number!" auto-validate allowed-pattern="[0-9]" maxlength="10"></paper-input>
    <paper-input always-float-label label="Pincode" value= "{{pin}}" required auto-validate error-message="fill Pincode" auto-validate allowed-pattern="[0-9]" maxlength="6"></paper-input>
    
    
    <paper-button raised class="indigo" on-click="handleClick">register</paper-button>
    <paper-button raised class="indigo" on-click="Click">cancel</paper-button>
    
  
    </div>

    `;
  }
  handleClick(){
  if (this.name=='' || this.designation=='' || this.email==''|| this.address=='' || this.id==''|| this.phone=='' || this.pin=='')
  {
    alert("enter correct details" )
  }
 
  else{
  this.set('route.path','/logintab')
}
  }
   Click()
  {
     this.set('route.path','/loginpage');
   }
}

// Register the element with the browser.
customElements.define('register-app', RegisterApp);
