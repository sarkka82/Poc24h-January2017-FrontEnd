// Imports
import angular from 'angular';
import headerModule from './header/header.module';
import routes from './layout.routes';

/**
 * @ngInject
 */
export default angular
  .module('app.layout', [
    headerModule,
  ])
  .run(routes)
  .name;
