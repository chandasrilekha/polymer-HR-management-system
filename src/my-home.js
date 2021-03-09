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

import '@polymer/iron-image/iron-image.js';
import '@polymer/app-route/app-route.js';
import './nav-page.js';

class MyHome extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
    :host {
      display: block;

      padding: 10px;
    }
    iron-image {
      width: 350px;
      height: 200px;
      background-color: lightgray;
    }
   
  </style>
  
  
  <app-location route="{{route}}"></app-location>
  <nav-page></nav-page><br><br>
  <h4>Welcome </h4>
  <iron-image sizing="contain" fade src= "../images/manifest/a.jpg"" ></iron-image>
<iron-image sizing="contain" fade src="../images/manifest/b.png"></iron-image>
<iron-image sizing="contain" fade src= "../images/manifest/c.jpg"></iron-image>
<h4>The hiring process is the process of reviewing applications, selecting the right candidates to interview, testing candidates, choosing between candidates to make the hiring decision and performing various pre-employment tests and checks.</h4>
`;
}
}


window.customElements.define('my-home', MyHome);
