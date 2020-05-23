var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        class PersonAction {
            constructor(actionName, actionFunc) {
                this.actionName = actionName;
                this.actionFunc = actionFunc;
            }
        }
        virtdog.PersonAction = PersonAction;
        class PeopleController {
            constructor($rootScope, eventNames) {
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.people = [];
                this.personActions = [];
                this.commandStay = (person) => this.$rootScope.$broadcast(this.eventNames.commandStay, person);
                this.commandShake = (person) => this.$rootScope.$broadcast(this.eventNames.commandShake, person);
                this.runAway = (person) => this.$rootScope.$broadcast(this.eventNames.animalRun, person);
                this.pet = (person) => this.$rootScope.$broadcast(this.eventNames.personPet, person);
                this.initializeLists();
            }
            // --------------------- private stuff down here -------------------------------
            initializeLists() {
                this.personActions.push(new PersonAction('Command Zeus to Stay', this.commandStay));
                this.personActions.push(new PersonAction('Command Zeus to Shake', this.commandShake));
                this.personActions.push(new PersonAction('Run Away', this.runAway));
                this.personActions.push(new PersonAction('Pet Zeus', this.pet));
                this.people.push({
                    defaultAction: this.eventNames.personPet,
                    familiarName: 'The Alpha Male',
                    speciesName: 'Homo Sapiens'
                });
                this.people.push({
                    defaultAction: this.eventNames.personPet,
                    familiarName: 'The She Wolf',
                    speciesName: 'Homo Sapiens'
                });
                this.people.push({
                    defaultAction: this.eventNames.animalRun,
                    familiarName: 'The Mailman',
                    speciesName: 'Homo Sapiens'
                });
            }
        }
        PeopleController.$inject = ['$rootScope', 'eventNames'];
        virtdog.PeopleController = PeopleController;
        virtdog.getModulePeople().controller('peopleController', PeopleController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVvcGxlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlb3BsZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBK0RoQjtBQS9ERCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0ErRHhCO0lBL0RpQixXQUFBLE9BQU87UUFDdkIsTUFBYSxZQUFZO1lBQ3ZCLFlBQ1MsVUFBa0IsRUFDbEIsVUFBNkM7Z0JBRDdDLGVBQVUsR0FBVixVQUFVLENBQVE7Z0JBQ2xCLGVBQVUsR0FBVixVQUFVLENBQW1DO1lBQ2xELENBQUM7U0FDTjtRQUxZLG9CQUFZLGVBS3hCLENBQUE7UUFFRCxNQUFhLGdCQUFnQjtZQVEzQixZQUFvQixVQUFnQyxFQUFVLFVBQXNCO2dCQUFoRSxlQUFVLEdBQVYsVUFBVSxDQUFzQjtnQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO2dCQVA3RSxXQUFNLEdBQWMsRUFBRSxDQUFDO2dCQUl2QixrQkFBYSxHQUFtQixFQUFFLENBQUM7Z0JBT25DLGdCQUFXLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFM0QsaUJBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUU1RCxZQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFekQsUUFBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBYjlELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixDQUFDO1lBY0QsZ0ZBQWdGO1lBQ3hFLGVBQWU7Z0JBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNwRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDdEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRWhFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNkO29CQUNFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7b0JBQ3hDLFlBQVksRUFBRSxnQkFBZ0I7b0JBQzlCLFdBQVcsRUFBRSxjQUFjO2lCQUM1QixDQUNGLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2Q7b0JBQ0UsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztvQkFDeEMsWUFBWSxFQUFFLGNBQWM7b0JBQzVCLFdBQVcsRUFBRSxjQUFjO2lCQUM1QixDQUNGLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2Q7b0JBQ0UsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztvQkFDeEMsWUFBWSxFQUFFLGFBQWE7b0JBQzNCLFdBQVcsRUFBRSxjQUFjO2lCQUM1QixDQUNGLENBQUM7WUFDSixDQUFDOztRQTdDTSx3QkFBTyxHQUFHLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBUG5DLHdCQUFnQixtQkFxRDVCLENBQUE7UUFDRCxRQUFBLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUEvRGlCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQStEeEI7QUFBRCxDQUFDLEVBL0RTLE9BQU8sS0FBUCxPQUFPLFFBK0RoQiJ9