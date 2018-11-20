/// <reference path="../../typings/index.d.ts" />
var vdog = dogsrus.virtdog;
// todo: major refactoring, add event tests
describe('dogController test', function () {
    beforeEach(angular.mock.module('app.dog'));
    describe('the dogController', function () {
        var $rootScope, $controller, $interval, dogConfig, 
        //eventNames: vdog.EventNames,
        dogConstructorParams;
        dogConfig = {
            appTitle: 'Virtual Dog Demo',
            otherDogs: [],
            startDog: {},
            version: '0.0.1'
        };
        //eventNames = vdog.eventNames;
        beforeEach(function () {
            angular.mock.module('app.dog');
            inject(function ($injector) {
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
        describe('new', function () {
            // todo: add a beforeEach and move startdog settings and instantiation here
            it('construction test', function () {
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
                var sut = $controller('dogController', dogConstructorParams);
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
            it('other stuff happens when new', function () {
                pending('add other constructor tests');
            });
        });
        // todo: need to test feed event
        // todo: need to test thow event
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nQ29udHJvbGxlclNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2dDb250cm9sbGVyU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQsSUFBTyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUU5QiwyQ0FBMkM7QUFDM0MsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzdCLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzNDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtRQUU1QixJQUFJLFVBQWdDLEVBQ2xDLFdBQWtDLEVBQ2xDLFNBQThCLEVBQzlCLFNBQWdDO1FBQ2hDLDhCQUE4QjtRQUM5QixvQkFLQyxDQUFDO1FBRUosU0FBUyxHQUFHO1lBQ1YsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBYSxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUM7UUFDRiwrQkFBK0I7UUFDL0IsVUFBVSxDQUFDO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLFVBQUMsU0FBbUM7Z0JBQ3pDLHFEQUFxRDtnQkFDckQsV0FBVyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQXdCLGFBQWEsQ0FBQyxDQUFDO2dCQUNsRSxVQUFVLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBdUIsWUFBWSxDQUFDLENBQUM7Z0JBQy9ELFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFzQixXQUFXLENBQUMsQ0FBQztnQkFFNUQsb0JBQW9CLEdBQUc7b0JBQ3JCLFVBQVUsRUFBRSxVQUFVO29CQUN0QixTQUFTLEVBQUUsU0FBUztvQkFDcEIsU0FBUyxFQUFFLFNBQVM7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsVUFBVSxFQUFFLElBQUksQ0FB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