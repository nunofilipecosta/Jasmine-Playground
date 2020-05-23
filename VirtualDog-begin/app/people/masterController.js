var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        class MasterAction {
            constructor(actionName, actionFunc) {
                this.actionName = actionName;
                this.actionFunc = actionFunc;
            }
        }
        virtdog.MasterAction = MasterAction;
        class MasterController {
            constructor($rootScope, eventNames) {
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.speciesName = 'Homo Sapiens';
                this.masterActions = [];
                this.masterObjects = [];
                this.throwSomething = (object) => this.$rootScope.$broadcast(this.eventNames.masterThrow, object);
                this.feedTheDog = (food) => this.$rootScope.$broadcast(this.eventNames.masterFeed, food);
                this.familiarName = 'Dillon';
                this.initializeLists();
            }
            // --------------------- private stuff down here -------------------------------
            initializeLists() {
                this.masterActions.push(new MasterAction('Throw Object', this.throwSomething));
                this.masterActions.push(new MasterAction('Feed', this.feedTheDog));
                let dogObject = new virtdog.DogObject('Babe Ruth autographed baseball', true, false);
                dogObject.bounces = true;
                dogObject.expensive = true;
                dogObject.irreplaceable = true;
                dogObject.monetaryValue = 100000;
                dogObject.chewLimit = 15;
                this.masterObjects.push(dogObject);
                dogObject = new virtdog.DogObject('ball', true, false);
                dogObject.bounces = true;
                dogObject.chewLimit = 100;
                this.masterObjects.push(dogObject);
                dogObject = new virtdog.DogObject('Frisbee', true, false);
                dogObject.flies = true;
                dogObject.chewLimit = 20;
                this.masterObjects.push(dogObject);
                this.masterObjects.push(new virtdog.DogObject('stick', true, false));
                this.masterObjects.push(new virtdog.DogObject('dog food', true, true));
                this.masterObjects.push(new virtdog.DogObject('table scraps', true, true));
            }
        }
        MasterController.$inject = ['$rootScope', 'eventNames'];
        virtdog.MasterController = MasterController;
        virtdog.getModulePeople().controller('masterController', MasterController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hc3RlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBMkRoQjtBQTNERCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0EyRHhCO0lBM0RpQixXQUFBLE9BQU87UUFDdkIsTUFBYSxZQUFZO1lBQ3ZCLFlBQ1MsVUFBa0IsRUFDbEIsVUFBNkM7Z0JBRDdDLGVBQVUsR0FBVixVQUFVLENBQVE7Z0JBQ2xCLGVBQVUsR0FBVixVQUFVLENBQW1DO1lBQ2xELENBQUM7U0FDTjtRQUxZLG9CQUFZLGVBS3hCLENBQUE7UUFFRCxNQUFhLGdCQUFnQjtZQVczQixZQUFvQixVQUFnQyxFQUFVLFVBQXNCO2dCQUFoRSxlQUFVLEdBQVYsVUFBVSxDQUFzQjtnQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO2dCQVY3RSxnQkFBVyxHQUFXLGNBQWMsQ0FBQztnQkFLckMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO2dCQUVuQyxrQkFBYSxHQUFnQixFQUFFLENBQUM7Z0JBUWhDLG1CQUFjLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFM0QsZUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBUjdELElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO2dCQUM3QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsQ0FBQztZQVFELGdGQUFnRjtZQUN4RSxlQUFlO2dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFFbkUsSUFBSSxTQUFTLEdBQUcsSUFBSSxRQUFBLFNBQVMsQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdFLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDM0IsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLFNBQVMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUNqQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRW5DLFNBQVMsR0FBRyxJQUFJLFFBQUEsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixTQUFTLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRW5DLFNBQVMsR0FBRyxJQUFJLFFBQUEsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRW5DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksUUFBQSxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQUEsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFBLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckUsQ0FBQzs7UUF0Q00sd0JBQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQVZuQyx3QkFBZ0IsbUJBaUQ1QixDQUFBO1FBQ0QsUUFBQSxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBM0RpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUEyRHhCO0FBQUQsQ0FBQyxFQTNEUyxPQUFPLEtBQVAsT0FBTyxRQTJEaEIifQ==