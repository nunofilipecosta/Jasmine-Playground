var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var OtherAnimalController = /** @class */ (function () {
            function OtherAnimalController($rootScope, eventNames) {
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.otherAnimals = [];
                this.lastAction = '';
                this.intializeAnimalList(eventNames);
            }
            OtherAnimalController.prototype.performAction = function () {
                // in future may keep track of last action so we can respond back and forth
                this.lastAction = this.selectedAnimal.defaultAction;
                this.$rootScope.$broadcast(this.selectedAnimal.defaultAction, this.selectedAnimal);
            };
            OtherAnimalController.prototype.intializeAnimalList = function (eventNames) {
                this.otherAnimals.push({
                    defaultAction: eventNames.catHiss,
                    familiarName: 'Alley Cat',
                    speciesName: ''
                });
                this.otherAnimals.push({
                    defaultAction: eventNames.decapitate,
                    familiarName: 'No Ordinary Rabbit',
                    speciesName: ''
                });
                this.otherAnimals.push({
                    defaultAction: eventNames.dogBark,
                    familiarName: 'Little Noisy Dog',
                    speciesName: ''
                });
                this.performAction = this.performAction.bind(this);
            };
            OtherAnimalController.$inject = ['$rootScope', 'eventNames'];
            return OtherAnimalController;
        }());
        virtdog.OtherAnimalController = OtherAnimalController;
        virtdog.getModuleOtherAnimal().controller('otherAnimalController', OtherAnimalController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXJBbmltYWxDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3RoZXJBbmltYWxDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQXdDaEI7QUF4Q0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBd0N4QjtJQXhDaUIsV0FBQSxPQUFPO1FBQ3ZCO1lBTUUsK0JBQW9CLFVBQWdDLEVBQVUsVUFBc0I7Z0JBQWhFLGVBQVUsR0FBVixVQUFVLENBQXNCO2dCQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBTDdFLGlCQUFZLEdBQWMsRUFBRSxDQUFDO2dCQUU3QixlQUFVLEdBQVcsRUFBRSxDQUFDO2dCQUk3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUVNLDZDQUFhLEdBQXBCO2dCQUNFLDJFQUEyRTtnQkFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JGLENBQUM7WUFFTyxtREFBbUIsR0FBM0IsVUFBNEIsVUFBc0I7Z0JBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNwQjtvQkFDRSxhQUFhLEVBQUUsVUFBVSxDQUFDLE9BQU87b0JBQ2pDLFlBQVksRUFBRSxXQUFXO29CQUN6QixXQUFXLEVBQUUsRUFBRTtpQkFDaEIsQ0FBQyxDQUFDO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNwQjtvQkFDRSxhQUFhLEVBQUUsVUFBVSxDQUFDLFVBQVU7b0JBQ3BDLFlBQVksRUFBRSxvQkFBb0I7b0JBQ2xDLFdBQVcsRUFBRSxFQUFFO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BCO29CQUNFLGFBQWEsRUFBRSxVQUFVLENBQUMsT0FBTztvQkFDakMsWUFBWSxFQUFFLGtCQUFrQjtvQkFDaEMsV0FBVyxFQUFFLEVBQUU7aUJBQ2hCLENBQUMsQ0FBQztnQkFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUEvQk0sNkJBQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztZQWdDaEQsNEJBQUM7U0FBQSxBQXJDRCxJQXFDQztRQXJDWSw2QkFBcUIsd0JBcUNqQyxDQUFBO1FBQ0QsUUFBQSxvQkFBb0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUMsRUF4Q2lCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQXdDeEI7QUFBRCxDQUFDLEVBeENTLE9BQU8sS0FBUCxPQUFPLFFBd0NoQiJ9