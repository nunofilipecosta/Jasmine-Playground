/// <reference path="../../typings/index.d.ts" />

describe('In the file masterCOntroller.ts', () => {
  describe('the masterContrller', () => {
    let sut:  dogsrus.virtdog.MasterController,
    $rootScope: ng.IRootScopeService,
    $controller: ng.IControllerService,
    masterControllerParams = {
      //  $rootScope: ng.IRootScopeService,
        eventName: dogsrus.virtdog.eventNames
    };
    sut = $controller<dogsrus.virtdog.MasterController>('masterController', masterControllerParams);

    beforeEach(() => {
      console.log('Before each');
      angular.mock.module('app.people');
      inject(($injector: ng.auto.IInjectorService) => {
        $controller = $injector.get<ng.IControllerService>('$controller');
        $rootScope = $injector.get<ng.IRootScopeService>('$rootScope');

        // masterControllerParams = {
        //   // $rootScope: $rootScope,
        //   // eventNames: vdog.eventNames
        // };
      });

      sut = $controller<dogsrus.virtdog.MasterController>('masterController', masterControllerParams);
    });
    describe('constructor', () => {
      it('should do something', () => {
        expect(sut.familiarName).toEqual('Dillon');
      });
    });
    describe('thowSomething method', () => {
      console.log('');
    });
    describe('feed the dog method', () => {
      console.log('');
    });
  });

  describe('the MasterAction object', () => {
    console.log('');
  });
});
