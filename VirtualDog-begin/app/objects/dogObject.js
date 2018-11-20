var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var DogSpitState;
        (function (DogSpitState) {
            DogSpitState[DogSpitState["noSpit"] = 0] = "noSpit";
            DogSpitState[DogSpitState["someSpit"] = 1] = "someSpit";
            DogSpitState[DogSpitState["soggyAndSlimy"] = 2] = "soggyAndSlimy";
        })(DogSpitState = virtdog.DogSpitState || (virtdog.DogSpitState = {}));
        var ObjectState;
        (function (ObjectState) {
            ObjectState[ObjectState["mintCondition"] = 0] = "mintCondition";
            ObjectState[ObjectState["littleBitChewed"] = 1] = "littleBitChewed";
            ObjectState[ObjectState["veryChewed"] = 2] = "veryChewed";
            ObjectState[ObjectState["structurallyDamaged"] = 3] = "structurallyDamaged";
            ObjectState[ObjectState["shredded"] = 4] = "shredded";
        })(ObjectState = virtdog.ObjectState || (virtdog.ObjectState = {}));
        var ChewExperience;
        (function (ChewExperience) {
            ChewExperience[ChewExperience["painful"] = 0] = "painful";
            ChewExperience[ChewExperience["fair"] = 1] = "fair";
            ChewExperience[ChewExperience["good"] = 2] = "good";
            ChewExperience[ChewExperience["great"] = 3] = "great";
            ChewExperience[ChewExperience["squeaky"] = 4] = "squeaky";
        })(ChewExperience = virtdog.ChewExperience || (virtdog.ChewExperience = {}));
        var DogObject = /** @class */ (function () {
            function DogObject(name, chewy, edible, chewExperience) {
                if (chewExperience === void 0) { chewExperience = ChewExperience.good; }
                this.name = name;
                this.chewy = chewy;
                this.edible = edible;
                this.chewExperience = chewExperience;
                this.expensive = false;
                this.irreplaceable = false;
                this.flies = false;
                this.bounces = false;
                this.monetaryValue = 0;
                this.spitState = DogSpitState.noSpit;
                this.shredable = false;
                this.impervious = false;
                this.chewLimit = 0;
                this.state = ObjectState.mintCondition;
                if (!chewy && chewExperience > ChewExperience.fair) {
                    chewExperience = ChewExperience.fair;
                }
            }
            DogObject.prototype.getSpitStateText = function () {
                return DogSpitState[this.spitState];
            };
            DogObject.prototype.getStateText = function () {
                return ObjectState[this.state];
            };
            DogObject.prototype.chewOn = function () {
                if (this.spitState < DogSpitState.soggyAndSlimy) {
                    this.spitState++;
                }
                if (this.impervious) {
                    return this.chewExperience;
                }
                this.monetaryValue /= 2;
                this.expensive = this.monetaryValue > 100;
                if (this.chewLimit > 0) {
                    this.chewLimit--;
                    if (this.state === ObjectState.mintCondition) {
                        this.state++;
                    }
                    else if (this.chewLimit < 10 && this.state === ObjectState.littleBitChewed) {
                        this.state++;
                        if (this.chewExperience !== ChewExperience.squeaky
                            && this.chewExperience > ChewExperience.good) {
                            this.chewExperience--;
                        }
                    }
                    else if (this.chewLimit < 5 && this.state === ObjectState.veryChewed) {
                        this.state++;
                        if (this.chewExperience !== ChewExperience.squeaky
                            && this.chewExperience > ChewExperience.fair) {
                            this.chewExperience--;
                        }
                        else if (this.chewExperience === ChewExperience.squeaky
                            && this.chewLimit === 0) {
                            this.chewExperience = ChewExperience.fair;
                        }
                    }
                }
                if (this.state === ObjectState.veryChewed) {
                    if (this.shredable) {
                        this.state++;
                    }
                    else {
                        this.state += 2;
                    }
                }
                else if (this.state < ObjectState.structurallyDamaged) {
                    this.state++;
                }
                return this.chewExperience;
            };
            return DogObject;
        }());
        virtdog.DogObject = DogObject;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9nT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQWdHaEI7QUFoR0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBZ0d4QjtJQWhHaUIsV0FBQSxPQUFPO1FBQ3ZCLElBQVksWUFJWDtRQUpELFdBQVksWUFBWTtZQUN0QixtREFBTSxDQUFBO1lBQ04sdURBQVEsQ0FBQTtZQUNSLGlFQUFhLENBQUE7UUFDZixDQUFDLEVBSlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFJdkI7UUFFRCxJQUFZLFdBTVg7UUFORCxXQUFZLFdBQVc7WUFDckIsK0RBQWEsQ0FBQTtZQUNiLG1FQUFlLENBQUE7WUFDZix5REFBVSxDQUFBO1lBQ1YsMkVBQW1CLENBQUE7WUFDbkIscURBQVEsQ0FBQTtRQUNWLENBQUMsRUFOVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU10QjtRQUVELElBQVksY0FNWDtRQU5ELFdBQVksY0FBYztZQUN4Qix5REFBTyxDQUFBO1lBQ1AsbURBQUksQ0FBQTtZQUNKLG1EQUFJLENBQUE7WUFDSixxREFBSyxDQUFBO1lBQ0wseURBQU8sQ0FBQTtRQUNULENBQUMsRUFOVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQU16QjtRQUVEO1lBWUUsbUJBQ1MsSUFBWSxFQUNaLEtBQWMsRUFDZCxNQUFlLEVBQ2QsY0FBb0M7Z0JBQXBDLCtCQUFBLEVBQUEsaUJBQWlCLGNBQWMsQ0FBQyxJQUFJO2dCQUhyQyxTQUFJLEdBQUosSUFBSSxDQUFRO2dCQUNaLFVBQUssR0FBTCxLQUFLLENBQVM7Z0JBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUztnQkFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7Z0JBZnZDLGNBQVMsR0FBWSxLQUFLLENBQUM7Z0JBQzNCLGtCQUFhLEdBQVksS0FBSyxDQUFDO2dCQUMvQixVQUFLLEdBQVksS0FB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