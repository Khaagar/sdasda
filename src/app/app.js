import angular from 'angular';
import ngMaterial from 'angular-material';
import LocalStorageModule from 'angular-local-storage';
import uirouter from 'angular-ui-router';


import '../../node_modules/angular-material/angular-material.css';
import './style.css';

//CONTROLLERS
import EditDialogController from './components/home/editDialog/editDialogController'


//COMPONENTS
import HeaderComponent from './components/common/header/headerComponent';
import FooterComponent from './components/common/footer/footerComponent';
import HomeComponent from './components/home/homeComponent';
import TableComponent from './components/table/tableComponent';
import ManageComponent from './components/manage/manageComponent';


//SERVICES
import HomeService from './components/home/homeService';
import HeaderService from './components/common/header/headerService';
import TableService from './components/table/tableService';
import ManageService from './components/manage/manageService';
import BooksService from './components/services/booksService';
import AuthorsService from './components/services/authorsService'
import UpdateService from './components/services/updateService'


export default angular.module('app', [ngMaterial, LocalStorageModule, uirouter])

.config(function($stateProvider, $urlRouterProvider) {
     
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url: '/home',
        component: 'myHome'
    })
    .state('manage',{
        url: '/manage',
        component: 'myManage'
    })
    .state('manage.authors',{
        url: '/authors',
        component: 'manageAuthorComponent'
    })    
    .state('manage.books',{
        url: '/books',
        component: 'manageBooksComponent'
    })
    
    ;
}).config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('./icons/mdi.svg');
})
                    .controller('editDialogController', EditDialogController)
                    
                    .component('myHeader', HeaderComponent)
                    .component('myHome', HomeComponent)
                    .component('myFooter', FooterComponent)
                    .component('myTable', TableComponent)
                    .component('myManage',ManageComponent)

                    .service('HomeService',HomeService)
                    .service('HeaderService',HeaderService)
                    .service('TableService',TableService)
                    .service('ManageService',ManageService)
                    .service('BooksService',BooksService)
                    .service('AuthorsService',AuthorsService)
                    .service('UpdateService',UpdateService)
                    
                    .run(function(UpdateService){
                        if (localStorage.length==0){
                            UpdateService.setData();
                        }
                    });



