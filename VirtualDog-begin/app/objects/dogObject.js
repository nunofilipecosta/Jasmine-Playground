var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        let DogSpitState;
        (function (DogSpitState) {
            DogSpitState[DogSpitState["noSpit"] = 0] = "noSpit";
            DogSpitState[DogSpitState["someSpit"] = 1] = "someSpit";
            DogSpitState[DogSpitState["soggyAndSlimy"] = 2] = "soggyAndSlimy";
        })(DogSpitState = virtdog.DogSpitState || (virtdog.DogSpitState = {}));
        let ObjectState;
        (function (ObjectState) {
            ObjectState[ObjectState["mintCondition"] = 0] = "mintCondition";
            ObjectState[ObjectState["littleBitChewed"] = 1] = "littleBitChewed";
            ObjectState[ObjectState["veryChewed"] = 2] = "veryChewed";
            ObjectState[ObjectState["structurallyDamaged"] = 3] = "structurallyDamaged";
            ObjectState[ObjectState["shredded"] = 4] = "shredded";
        })(ObjectState = virtdog.ObjectState || (virtdog.ObjectState = {}));
        let ChewExperience;
        (function (ChewExperience) {
            ChewExperience[ChewExperience["painful"] = 0] = "painful";
            ChewExperience[ChewExperience["fair"] = 1] = "fair";
            ChewExperience[ChewExperience["good"] = 2] = "good";
            ChewExperience[ChewExperience["great"] = 3] = "great";
            ChewExperience[ChewExperience["squeaky"] = 4] = "squeaky";
        })(ChewExperience = virtdog.ChewExperience || (virtdog.ChewExperience = {}));
        class DogObject {
            constructor(name, chewy, edible, chewExperience = ChewExperience.good) {
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
            getSpitStateText() {
                return DogSpitState[this.spitState];
            }
            getStateText() {
                return ObjectState[this.state];
            }
            chewOn() {
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
            }
        }
        virtdog.DogObject = DogObject;
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9nT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQWdHaEI7QUFoR0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBZ0d4QjtJQWhHaUIsV0FBQSxPQUFPO1FBQ3ZCLElBQVksWUFJWDtRQUpELFdBQVksWUFBWTtZQUN0QixtREFBTSxDQUFBO1lBQ04sdURBQVEsQ0FBQTtZQUNSLGlFQUFhLENBQUE7UUFDZixDQUFDLEVBSlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFJdkI7UUFFRCxJQUFZLFdBTVg7UUFORCxXQUFZLFdBQVc7WUFDckIsK0RBQWEsQ0FBQTtZQUNiLG1FQUFlLENBQUE7WUFDZix5REFBVSxDQUFBO1lBQ1YsMkVBQW1CLENBQUE7WUFDbkIscURBQVEsQ0FBQTtRQUNWLENBQUMsRUFOVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU10QjtRQUVELElBQVksY0FNWDtRQU5ELFdBQVksY0FBYztZQUN4Qix5REFBTyxDQUFBO1lBQ1AsbURBQUksQ0FBQTtZQUNKLG1EQUFJLENBQUE7WUFDSixxREFBSyxDQUFBO1lBQ0wseURBQU8sQ0FBQTtRQUNULENBQUMsRUFOVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQU16QjtRQUVELE1BQWEsU0FBUztZQVlwQixZQUNTLElBQVksRUFDWixLQUFjLEVBQ2QsTUFBZSxFQUNkLGlCQUFpQixjQUFjLENBQUMsSUFBSTtnQkFIckMsU0FBSSxHQUFKLElBQUksQ0FBUTtnQkFDWixVQUFLLEdBQUwsS0FBSyxDQUFTO2dCQUNkLFdBQU0sR0FBTixNQUFNLENBQVM7Z0JBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQXNCO2dCQWZ2QyxjQUFTLEdBQVksS0FBSyxDQUFDO2dCQUMzQixrQkFBYSxHQUFZLEtBQUssQ0FBQztnQkFDL0IsVUFBSyxHQUFZLEtBQUssQ0FBQztnQkFDdkIs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