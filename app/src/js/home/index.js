import angular from 'angular';

let homeModule = angular.module('app.home',[]);

import homeConfig from './home.config';
homeModule.config(homeConfig);

export default homeModule;
