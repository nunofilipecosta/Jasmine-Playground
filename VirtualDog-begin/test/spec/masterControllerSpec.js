/// <reference path="../../typings/index.d.ts" />
describe('In the file masterCOntroller.ts', () => {
    describe('the masterContrller', () => {
        let sut, $rootScope, $controller, masterControllerParams = {
            //  $rootScope: ng.IRootScopeService,
            eventName: dogsrus.virtdog.eventNames
        };
        sut = $controller('masterController', masterControllerParams);
        beforeEach(() => {
            console.log('Before each');
            angular.mock.module('app.people');
            inject(($injector) => {
                $controller = $injector.get('$controller');
                $rootScope = $injector.get('$rootScope');
                // masterControllerParams = {
                //   // $rootScope: $rootScope,
                //   // eventNames: vdog.eventNames
                // };
            });
            sut = $controller('masterController', masterControllerParams);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyQ29udHJvbGxlclNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXN0ZXJDb250cm9sbGVyU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFFakQsUUFBUSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsRUFBRTtJQUMvQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO1FBQ25DLElBQUksR0FBc0MsRUFDMUMsVUFBZ0MsRUFDaEMsV0FBa0MsRUFDbEMsc0JBQXNCLEdBQUc7WUFDdkIscUNBQXFDO1lBQ25DLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVU7U0FDeEMsQ0FBQztRQUNGLEdBQUcsR0FBRyxXQUFXLENBQW1DLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFFaEcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLENBQUMsU0FBbUMsRUFBRSxFQUFFO2dCQUM3QyxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBd0IsYUFBYSxDQUFDLENBQUM7Z0JBQ2xFLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUF1QixZQUFZLENBQUMsQ0FBQztnQkFFL0QsNkJBQTZCO2dCQUM3QiwrQkFBK0I7Z0JBQy9CLG1DQUFtQztnQkFDbkMsS0FBSztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRUgsR0FBRyxHQUFHLFdBQVcsQ0FBbUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUNsRyxDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=