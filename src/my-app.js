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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';
//import './login-app.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a {
          color: black;
          font-weight: bold;
          display:inline;

        }
        
      </style>
<!--------------app route------------------------->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
     
<!-----------------------iron page--------------------------------->
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
         <login-page name="loginpage"></login-page>
          <my-home name="home"></my-home>
          <register-app name="register"></register-app>
            
            <services-page name="services"></services-page>
            <emp-data new-data={{newData}} name="emp"></emp-data>
           <jobopenings-app name="jobopenings"></jobopenings-app>
            <my-view404 name="view404"></my-view404>
            <nav-page name="navbar"></nav-page>
            <form-data new-data={{newData}} name="formdata"></form-data>
          </iron-pages>
       
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      newData:{
        type:Object,
        value:{}
      }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'home';
    } else if (['home','emp','loginpage' , 'navpage','register','jobopenings', 'services', 'formdata'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'loginpage';
    }

  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'home':
        import('./my-home.js');
        break;
      case 'emp':
        import('./emp-data.js');
        break;
        case 'loginpage':
          import('./login-page.js');
          break;
          case 'formdata':
          import('./form-data.js');
          break;
       
          case 'navpage':
            import('./nav-page.js');
            break;
              
          case 'register':
          import('./register-app.js');
          break;
          case 'jobopenings':
          import('./jobopenings-app.js');
          break;
          case 'services':
            import('./services-page.js');
            break;
    }
  }
}

window.customElements.define('my-app', MyApp);
