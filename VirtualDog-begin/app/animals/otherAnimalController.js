var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        class OtherAnimalController {
            constructor($rootScope, eventNames) {
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.otherAnimals = [];
                this.lastAction = '';
                this.intializeAnimalList(eventNames);
            }
            performAction() {
                // in future may keep track of last action so we can respond back and forth
                this.lastAction = this.selectedAnimal.defaultAction;
                this.$rootScope.$broadcast(this.selectedAnimal.defaultAction, this.selectedAnimal);
            }
            intializeAnimalList(eventNames) {
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
            }
        }
        OtherAnimalController.$inject = ['$rootScope', 'eventNames'];
        virtdog.OtherAnimalController = OtherAnimalController;
        virtdog.getModuleOtherAnimal().controller('otherAnimalController', OtherAnimalController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXJBbmltYWxDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3RoZXJBbmltYWxDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQXdDaEI7QUF4Q0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBd0N4QjtJQXhDaUIsV0FBQSxPQUFPO1FBQ3ZCLE1BQWEscUJBQXFCO1lBTWhDLFlBQW9CLFVBQWdDLEVBQVUsVUFBc0I7Z0JBQWhFLGVBQVUsR0FBVixVQUFVLENBQXNCO2dCQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBTDdFLGlCQUFZLEdBQWMsRUFBRSxDQUFDO2dCQUU3QixlQUFVLEdBQVcsRUFBRSxDQUFDO2dCQUk3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUVNLGFBQWE7Z0JBQ2xCLDJFQUEyRTtnQkFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JGLENBQUM7WUFFTyxtQkFBbUIsQ0FBQyxVQUFzQjtnQkFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BCO29CQUNFLGFBQWEsRUFBRSxVQUFVLENBQUMsT0FBTztvQkFDakMsWUFBWSxFQUFFLFdBQVc7b0JBQ3pCLFdBQVcsRUFBRSxFQUFFO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BCO29CQUNFLGFBQWEsRUFBRSxVQUFVLENBQUMsVUFBVTtvQkFDcEMsWUFBWSxFQUFFLG9CQUFvQjtvQkFDbEMsV0FBVyxFQUFFLEVBQUU7aUJBQ2hCLENBQUMsQ0FBQztnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEI7b0JBQ0UsYUFBYSxFQUFFLFVBQVUsQ0FBQyxPQUFPO29CQUNqQyxZQUFZLEVBQUUsa0JBQWtCO29CQUNoQyxXQUFXLEVBQUUsRUFBRTtpQkFDaEIsQ0FBQyxDQUFDO2dCQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsQ0FBQzs7UUEvQk0sNkJBQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUxuQyw2QkFBcUIsd0JBcUNqQyxDQUFBO1FBQ0QsUUFBQSxvQkFBb0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUMsRUF4Q2lCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQXdDeEI7QUFBRCxDQUFDLEVBeENTLE9BQU8sS0FBUCxPQUFPLFFBd0NoQiJ9