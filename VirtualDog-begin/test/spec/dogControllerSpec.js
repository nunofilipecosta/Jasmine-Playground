/// <reference path="../../typings/index.d.ts" />
var vdog = dogsrus.virtdog;
// todo: major refactoring, add event tests
describe('dogController test', () => {
    beforeEach(angular.mock.module('app.dog'));
    describe('the dogController', () => {
        let $rootScope, $controller, $interval, dogConfig, 
        //eventNames: vdog.EventNames,
        dogConstructorParams;
        dogConfig = {
            appTitle: 'Virtual Dog Demo',
            otherDogs: [],
            startDog: {},
            version: '0.0.1'
        };
        //eventNames = vdog.eventNames;
        beforeEach(() => {
            angular.mock.module('app.dog');
            inject(($injector) => {
                // we need to construct every time so set up for that
                $controller = $injector.get('$controller');
                $rootScope = $injector.get('$rootScope');
                $interval = $injector.get('$interval');
                dogConstructorParams = {
                    $rootScope: $rootScope,
                    $interval: $interval,
                    dogConfig: dogConfig,
                    // this was changed too
                    eventNames: vdog.eventNames
                };
            });
        });
        describe('new', () => {
            // todo: add a beforeEach and move startdog settings and instantiation here
            it('construction test', () => {
                dogConfig.startDog.age = 99;
                dogConfig.startDog.barkSound = 'testbark';
                dogConfig.startDog.breed = 'testbreed';
                dogConfig.startDog.chewUrgeInterval = 1000 * 1 * 1 * 1;
                dogConfig.startDog.coatStyle = 'testCoatStyle';
                dogConfig.startDog.defaultAction = 'testDefaultAction';
                dogConfig.startDog.dogLonelyDuration = 1000 * 2 * 1 * 1;
                dogConfig.startDog.dogLonelyEndurance = 1000 * 3 * 1 * 1;
                dogConfig.startDog.dogSleepDuration = 1000 * 4 * 1 * 1;
                dogConfig.startDog.dogTiredInterval = 1000 * 5 * 1 * 1;
                dogConfig.startDog.earState = 'testEarState';
                dogConfig.startDog.earStyle = 'testEarStyle';
                dogConfig.startDog.familiarName = 'testFamiliarName';
                dogConfig.startDog.motherNature1Interval = 1000 * 6 * 1 * 1;
                dogConfig.startDog.motherNature2Interval = 1000 * 7 * 1 * 1;
                dogConfig.startDog.speciesName = 'testSpeciesName';
                dogConfig.startDog.startupBlog = 'testStartupBlog';
                dogConfig.startDog.tailState = dogsrus.virtdog.DogTailState.tucked;
                dogConfig.startDog.tailStyle = 'testTailStyle';
                let sut = $controller('dogController', dogConstructorParams);
                expect(sut.age).toEqual(dogConfig.startDog.age);
                expect(sut.barkSound).toEqual(dogConfig.startDog.barkSound);
                expect(sut.breed).toEqual(dogConfig.startDog.breed);
                expect(sut.chewUrgeInterval).toEqual(dogConfig.startDog.chewUrgeInterval);
                expect(sut.coatStyle).toEqual(dogConfig.startDog.coatStyle);
                expect(sut.defaultAction).toEqual(dogConfig.startDog.defaultAction);
                expect(sut.dogLonelyDuration).toEqual(dogConfig.startDog.dogLonelyDuration);
                expect(sut.dogLonelyEndurance).toEqual(dogConfig.startDog.dogLonelyEndurance);
                expect(sut.dogSleepDuration).toEqual(dogConfig.startDog.dogSleepDuration);
                expect(sut.dogTiredInterval).toEqual(dogConfig.startDog.dogTiredInterval);
                expect(sut.earState).toEqual(dogConfig.startDog.earState);
                expect(sut.earStyle).toEqual(dogConfig.startDog.earStyle);
                expect(sut.familiarName).toEqual(dogConfig.startDog.familiarName);
                expect(sut.motherNature1Interval).toEqual(dogConfig.startDog.motherNature1Interval);
                expect(sut.motherNature2Interval).toEqual(dogConfig.startDog.motherNature2Interval);
                expect(sut.speciesName).toEqual(dogConfig.startDog.speciesName);
                expect(sut.startupBlog).toEqual(dogConfig.startDog.startupBlog);
                expect(sut.tailState).toEqual(dogConfig.startDog.tailState);
                expect(sut.tailStyle).toEqual(dogConfig.startDog.tailStyle);
            });
            it('other stuff happens when new', () => {
                pending('add other constructor tests');
            });
        });
        // todo: need to test feed event
        // todo: need to test thow event
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nQ29udHJvbGxlclNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2dDb250cm9sbGVyU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQsSUFBTyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUU5QiwyQ0FBMkM7QUFDM0MsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUNsQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBRWpDLElBQUksVUFBZ0MsRUFDbEMsV0FBa0MsRUFDbEMsU0FBOEIsRUFDOUIsU0FBZ0M7UUFDaEMsOEJBQThCO1FBQzlCLG9CQUtDLENBQUM7UUFFSixTQUFTLEdBQUc7WUFDVixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFhLEVBQUU7WUFDdkIsT0FBTyxFQUFFLE9BQU87U0FDakIsQ0FBQztRQUNGLCtCQUErQjtRQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLENBQUMsU0FBbUMsRUFBRSxFQUFFO2dCQUM3QyxxREFBcUQ7Z0JBQ3JELFdBQVcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUF3QixhQUFhLENBQUMsQ0FBQztnQkFDbEUsVUFBVSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQXVCLFlBQVksQ0FBQyxDQUFDO2dCQUMvRCxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBc0IsV0FBVyxDQUFDLENBQUM7Z0JBRTVELG9CQUFvQixHQUFHO29CQUNyQixVQUFVLEVBQUUsVUFBVTtvQkFDdEIsU0FBUyxFQUFFLFNBQVM7b0JBQ3BCLFNBQVMsRUFBRSxTQUFT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