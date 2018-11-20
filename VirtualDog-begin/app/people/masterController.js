var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var MasterAction = /** @class */ (function () {
            function MasterAction(actionName, actionFunc) {
                this.actionName = actionName;
                this.actionFunc = actionFunc;
            }
            return MasterAction;
        }());
        virtdog.MasterAction = MasterAction;
        var MasterController = /** @class */ (function () {
            function MasterController($rootScope, eventNames) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.eventNames = eventNames;
                this.speciesName = 'Homo Sapiens';
                this.masterActions = [];
                this.masterObjects = [];
                this.throwSomething = function (object) {
                    return _this.$rootScope.$broadcast(_this.eventNames.masterThrow, object);
                };
                this.feedTheDog = function (food) {
                    return _this.$rootScope.$broadcast(_this.eventNames.masterFeed, food);
                };
                this.familiarName = 'Dillon';
                this.initializeLists();
            }
            // --------------------- private stuff down here -------------------------------
            MasterController.prototype.initializeLists = function () {
                this.masterActions.push(new MasterAction('Throw Object', this.throwSomething));
                this.masterActions.push(new MasterAction('Feed', this.feedTheDog));
                var dogObject = new virtdog.DogObject('Babe Ruth autographed baseball', true, false);
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
            };
            MasterController.$inject = ['$rootScope', 'eventNames'];
            return MasterController;
        }());
        virtdog.MasterController = MasterController;
        virtdog.getModulePeople().controller('masterController', MasterController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hc3RlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBMkRoQjtBQTNERCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0EyRHhCO0lBM0RpQixXQUFBLE9BQU87UUFDdkI7WUFDRSxzQkFDUyxVQUFrQixFQUNsQixVQUE2QztnQkFEN0MsZUFBVSxHQUFWLFVBQVUsQ0FBUTtnQkFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUM7WUFDbEQsQ0FBQztZQUNQLG1CQUFDO1FBQUQsQ0FBQyxBQUxELElBS0M7UUFMWSxvQkFBWSxlQUt4QixDQUFBO1FBRUQ7WUFXRSwwQkFBb0IsVUFBZ0MsRUFBVSxVQUFzQjtnQkFBcEYsaUJBR0M7Z0JBSG1CLGVBQVUsR0FBVixVQUFVLENBQXNCO2dCQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBVjdFLGdCQUFXLEdBQVcsY0FBYyxDQUFDO2dCQUtyQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7Z0JBRW5DLGtCQUFhLEdBQWdCLEVBQUUsQ0FBQztnQkFRaEMsbUJBQWMsR0FBRyxVQUFDLE1BQU07b0JBQzdCLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO2dCQUEvRCxDQUErRCxDQUFDO2dCQUUzRCxlQUFVLEdBQUcsVUFBQyxJQUFJO29CQUN2QixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztnQkFBNUQsQ0FBNEQsQ0FBQztnQkFSN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixDQUFDO1lBUUQsZ0ZBQWdGO1lBQ3hFLDBDQUFlLEdBQXZCO2dCQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUVuRSxJQUFJLFNBQVMsR0FBRyxJQUFJLFFBQUEsU0FBUyxDQUFDLGdDQUFnQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0UsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDL0IsU0FBUyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQ2pDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFbkMsU0FBUyxHQUFHLElBQUksUUFBQSxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDL0MsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFbkMsU0FBUyxHQUFHLElBQUksUUFBQSxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEQsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFBLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksUUFBQSxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQUEsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRSxDQUFDO1lBdENNLHdCQUFPLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7WUF1Q2hELHVCQUFDO1NBQUEsQUFqREQsSUFpREM7UUFqRFksd0JBQWdCLG1CQWlENUIsQ0FBQTtRQUNELFFBQUEsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDckUsQ0FBQyxFQTNEaUIsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBMkR4QjtBQUFELENBQUMsRUEzRFMsT0FBTyxLQUFQLE9BQU8sUUEyRGhCIn0=