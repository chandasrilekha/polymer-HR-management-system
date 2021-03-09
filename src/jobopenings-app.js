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
import './nav-page.js';

class JobopeningsApp extends PolymerElement {
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
    <style include="shared-styles">
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

    
  </style>
  <app-location route="{{route}}"></app-location>
  <nav-page></nav-page>

  <h1>Job openings</h1>
    <div class="card">
    <paper-input always-float-label label="Number" value= "{{number}}"  required auto-validate error-message="fill Number"  auto-validate allowed-pattern="[0-9]" maxlength="6"></paper-input>
    <paper-input always-float-label label="Job Title" value= "{{jobdetail}}" required auto-validate error-message="fill Job Title" char-counter maxlength="10"></paper-input>
    <paper-input always-float-label label="Vacancy Name" value= "{{vacancy}}" required auto-validate error-message="fill Vacancy Name"  auto-validate allowed-pattern="[0-9]" maxlength="6"></paper-input>
    <paper-input always-float-label label="Hiring Manager" value= "{{manager}}" required auto-validate error-message="fill Hiring Manager" char-counter maxlength="10"></paper-input>
    <paper-input always-float-label label="Number of Poisitions" value= "{{position}}" required auto-validate error-message="fill Number of Poisitions"  auto-validate allowed-pattern="[0-9]" maxlength="6"></paper-input>
    <paper-input always-float-label label="Description" value= "{{description}}" required auto-validate error-message="fill Description" char-counter maxlength="10"></paper-input>
    <paper-input always-float-label label="Checkme out" value= "{{checkme}}" required auto-validate error-message="fill Checkme out" char-counter maxlength="10"></paper-input>
    
    
    <paper-button raised class="indigo" on-click="handleClick">Submit</paper-button>
    <paper-button raised class="indigo" on-click="Click">cancel</paper-button>
    
  
  
    </div>

    `;
  }
  handleClick()
   {

    if (this.number=='' || this.jobdetail=='' || this.vacancy=='' || this.manager=='' || this.position==''|| this.description=='' || this.checkme=='')
    {
      alert("enter correct details" )
    }
   
    else{
    this.set('route.path','/loginpage')
  }
    }
  
   

}

// Register the element with the browser.
customElements.define('jobopenings-app', JobopeningsApp);
