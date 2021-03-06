import angular from 'angular';

import appConfig from './config/app.config';
import appRun from './config/app.run';
import constants from './config/app.constants';

import 'jquery';
import 'angular-ui-router';
import 'angular-jwt';
import 'angular-storage';
import 'angular-lock/dist/angular-lock';
import 'angular-loggly-logger';
import 'angular-file-upload';
import 'angular-clipboard';
import './layout';
import './home';
import './services';
import './config/app.templates';
import './portfolio';
import './view';


import 'bootstrap/dist/js/bootstrap.js';



const requires = [
    'auth0.lock',
    'angular-storage',
    'angular-jwt',
    'logglyLogger',
    'angular-clipboard',
    'angularFileUpload',
    'ui.router',
    'templates',
    'app.layout',
    'app.home',
    'app.view',
    'app.services',
    'app.portfolio',
]


window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants',constants);
angular.module('app').run(appRun);
angular.module('app').config(appConfig);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
