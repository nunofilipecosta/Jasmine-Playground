var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var PersonAction = /** @class */ (function () {
            function PersonAction(actionName, actionFunc) {
                this.actionName = actionName;
                this.actionFunc = actionFunc;
            }
            return PersonAction;
        }());
        virtdog.PersonAction = PersonAction;
        var PeopleController = /** @class */ (function () {
            function PeopleController($rootScope, eventNames) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.people = [];
                this.personActions = [];
                this.commandStay = function (person) {
                    return _this.$rootScope.$broadcast(_this.eventNames.commandStay, person);
                };
                this.commandShake = function (person) {
                    return _this.$rootScope.$broadcast(_this.eventNames.commandShake, person);
                };
                this.runAway = function (person) {
                    return _this.$rootScope.$broadcast(_this.eventNames.animalRun, person);
                };
                this.pet = function (person) {
                    return _this.$rootScope.$broadcast(_this.eventNames.personPet, person);
                };
                this.initializeLists();
            }
            // --------------------- private stuff down here -------------------------------
            PeopleController.prototype.initializeLists = function () {
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
            };
            PeopleController.$inject = ['$rootScope', 'eventNames'];
            return PeopleController;
        }());
        virtdog.PeopleController = PeopleController;
        virtdog.getModulePeople().controller('peopleController', PeopleController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVvcGxlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlb3BsZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBK0RoQjtBQS9ERCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0ErRHhCO0lBL0RpQixXQUFBLE9BQU87UUFDdkI7WUFDRSxzQkFDUyxVQUFrQixFQUNsQixVQUE2QztnQkFEN0MsZUFBVSxHQUFWLFVBQVUsQ0FBUTtnQkFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUM7WUFDbEQsQ0FBQztZQUNQLG1CQUFDO1FBQUQsQ0FBQyxBQUxELElBS0M7UUFMWSxvQkFBWSxlQUt4QixDQUFBO1FBRUQ7WUFRRSwwQkFBb0IsVUFBZ0MsRUFBVSxVQUFzQjtnQkFBcEYsaUJBRUM7Z0JBRm1CLGVBQVUsR0FBVixVQUFVLENBQXNCO2dCQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBUDdFLFdBQU0sR0FBYyxFQUFFLENBQUM7Z0JBSXZCLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztnQkFPbkMsZ0JBQVcsR0FBRyxVQUFDLE1BQU07b0JBQzFCLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO2dCQUEvRCxDQUErRCxDQUFDO2dCQUUzRCxpQkFBWSxHQUFHLFVBQUMsTUFBTTtvQkFDM0IsT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7Z0JBQWhFLENBQWdFLENBQUM7Z0JBRTVELFlBQU8sR0FBRyxVQUFDLE1BQU07b0JBQ3RCLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO2dCQUE3RCxDQUE2RCxDQUFDO2dCQUV6RCxRQUFHLEdBQUcsVUFBQyxNQUFNO29CQUNsQixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztnQkFBN0QsQ0FBNkQsQ0FBQztnQkFiOUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLENBQUM7WUFjRCxnRkFBZ0Y7WUFDeEUsMENBQWUsR0FBdkI7Z0JBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2Q7b0JBQ0UsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztvQkFDeEMsWUFBWSxFQUFFLGdCQUFnQjtvQkFDOUIsV0FBVyxFQUFFLGNBQWM7aUJBQzVCLENBQ0YsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZDtvQkFDRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO29CQUN4QyxZQUFZLEVBQUUsY0FBYztvQkFDNUIsV0FBVyxFQUFFLGNBQWM7aUJBQzVCLENBQ0YsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZDtvQkFDRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO29CQUN4QyxZQUFZLEVBQUUsYUFBYTtvQkFDM0IsV0FBVyxFQUFFLGNBQWM7aUJBQzVCLENBQ0YsQ0FBQztZQUNKLENBQUM7WUE3Q00sd0JBQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztZQThDaEQsdUJBQUM7U0FBQSxBQXJERCxJQXFEQztRQXJEWSx3QkFBZ0IsbUJBcUQ1QixDQUFBO1FBQ0QsUUFBQSxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBL0RpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUErRHhCO0FBQUQsQ0FBQyxFQS9EUyxPQUFPLEtBQVAsT0FBTyxRQStEaEIifQ==