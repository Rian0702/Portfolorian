function HomeConfig($stateProvider){
  'ngInject';

  $stateProvider
  .state('app.home',{
    url:'/',
    templateUrl:'home/home.html',
    title: 'Home'
  })
}

export default HomeConfig;
