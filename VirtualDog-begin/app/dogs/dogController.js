'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var DogController = /** @class */ (function () {
            function DogController($rootScope, $interval, dogConfig, eventNames) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.$interval = $interval;
                this.dogConfig = dogConfig;
                this.eventNames = eventNames;
                this.blogContent = '';
                this.blogPreface = [''];
                this.chewObjects = [];
                this.dogDomain = null;
                this.dogList = [];
                // IDog
                this.age = 0;
                this.barkSound = '';
                this.breed = '';
                this.chewUrgeInterval = 1000 * 60 * 60 * 6;
                this.coatStyle = '';
                this.dogLonelyDuration = 1000 * 60 * 60 * 6;
                this.dogLonelyEndurance = 1000 * 60 * 60 * 6;
                this.dogSleepDuration = 1000 * 60 * 60 * 6;
                this.dogTiredInterval = 1000 * 60 * 60 * 6;
                this.earState = '';
                this.earStyle = '';
                this.motherNature1Interval = 1000 * 60 * 60 * 6;
                this.motherNature2Interval = 1000 * 60 * 60 * 6;
                this.squeakyOcdChewCount = 1;
                this.startupBlog = '';
                this.tailState = virtdog.DogTailState.elevated;
                this.tailStyle = '';
                // IAnimal
                this.defaultAction = '';
                this.familiarName = '';
                this.speciesName = 'Canis familiaris';
                this.bark = function (numberOfBarks) {
                    var totalBarkText = '';
                    for (var x = 0; x < numberOfBarks; x++) {
                        totalBarkText += _this.barkSound + " ";
                    }
                    _this.blog(totalBarkText, false);
                };
                this.chewOnSomething = function () {
                    if (_this.chewObjects.length) {
                        _this.chewObjects.sort(function (chewObject1, chewObject2) {
                            return chewObject1.expensive > chewObject2.expensive
                                ? -1
                                : chewObject1.expensive < chewObject2.expensive
                                    ? 1
                                    : chewObject1.irreplaceable
                                        ? -1
                                        : 0;
                        });
                    }
                    for (var x = 0; x < _this.chewObjects.length; x++) {
                        if (_this.chewObjects[x].chewy) {
                            var description = '';
                            if (_this.chewObjects[x].chewOn() === virtdog.ChewExperience.squeaky) {
                                _this.chewOnSomethingSqueaky(description, _this.chewObjects[x]);
                            }
                            else {
                                description = ("Suddenly I got an urge to chew!\n            I happily chewed on the " + _this.chewObjects[x].name + "!\n            The " + _this.chewObjects[x].name + " is now\n            " + _this.chewObjects[x].getSpitStateText() + " and\n            " + _this.chewObjects[x].getStateText() + "\n            " + ((_this.chewObjects[x].monetaryValue < 1)
                                    ? '.'
                                    : (" and is now worth $\n                " + Math.round(_this.chewObjects[x].monetaryValue) + ".")))
                                    .replace(/\s+/g, ' ');
                            }
                            _this.blog(description);
                            return;
                        }
                    }
                };
                this.decapitateHandler = function (event) {
                    _this.stopChewing();
                    _this.tailState = virtdog.DogTailState.tucked;
                    _this.blog('Oh no! Not the rab...');
                };
                this.eat = function (event, food) {
                    var blogEntry = "My master just fed me " + food.name;
                    if (food.edible) {
                        if (food.name === 'dog food') {
                            blogEntry += '! I ignored it for an hour, dumped it out on the floor, then ate the ' +
                                (food.name + " one piece at a time!");
                            _this.tailState = virtdog.DogTailState.wagging;
                        }
                        else {
                            blogEntry += "! I devoured the " + food.name + " immediately " +
                                'and looked back up at him with a hungry face.';
                            _this.tailState = virtdog.DogTailState.wagging;
                        }
                    }
                    else {
                        blogEntry += "? I sniffed the " + food.name + " and tilted my head.";
                        _this.tailState = virtdog.DogTailState.elevated;
                    }
                    _this.blog(blogEntry);
                };
                this.fetch = function (event, fetchObject) {
                    var blogEntry = "My master just threw a " + fetchObject.name + ". " +
                        ("I ran like mad to grab the " + fetchObject.name);
                    if (fetchObject.flies) {
                        blogEntry += ' and leapt like Air Jordan, snatching in mid flight!';
                    }
                    else {
                        blogEntry += ' snapping it up far sooner than imaginable!';
                    }
                    if (fetchObject.chewy && !_this.chewObjects.some(function (chewObject) {
                        return chewObject.name === fetchObject.name;
                    })) {
                        _this.chewObjects.push(fetchObject);
                    }
                    if (fetchObject.chewOn() === virtdog.ChewExperience.squeaky) {
                        _this.chewOnSomethingSqueaky(blogEntry, fetchObject);
                    }
                    else {
                        blogEntry += " I gave the " + fetchObject.name + " a good chew or two and dropped it.";
                    }
                    _this.blog(blogEntry);
                };
                this.getExcited = function (someAnimal) {
                    var description = someAnimal.familiarName +
                        ' wants to play with me!!! I wag my tail vigorously whine and jump up!!!';
                    _this.blog(description, true);
                };
                this.getPetted = function (event, person) {
                    _this.tailState = virtdog.DogTailState.wagging;
                    var description = person.familiarName +
                        ' just gave me a good petting! I smile and look at ' +
                        (person.familiarName + " with my big dog eyes look!");
                    _this.blog(description, true);
                };
                this.giveChase = function (someAnimal) {
                    _this.tailState = virtdog.DogTailState.wagging;
                    var description = "I just chased " + someAnimal.familiarName + " " +
                        ("through the " + _this.dogDomain.name + "!!!");
                    _this.blog(description, true);
                };
                this.respondToCommand = function (event, somePerson) {
                    var description = somePerson.familiarName + " just told me to " + event.name + "! ";
                    if (somePerson.familiarName === 'The Mailman') {
                        _this.giveChase(somePerson);
                        _this.blog(description, false);
                        return;
                    }
                    if (event.name === _this.eventNames.commandStay) {
                        if (somePerson.familiarName === 'The Alpha Male') {
                            description += 'I stayed.';
                        }
                        else {
                            description += 'I ignored it.';
                        }
                    }
                    else {
                        description += 'I did it.';
                    }
                    _this.blog(description, true);
                };
                this.setDogDomain = function (dogDomain) {
                    _this.dogDomain = dogDomain;
                };
                this.initializeDog(this.dogConfig.startDog);
                this.initializeEvents();
                this.initializeLists();
                this.blog(this.startupBlog);
            }
            DogController.prototype.testBark = function () {
                this.bark(3);
            };
            DogController.prototype.getTailStateText = function () {
                return virtdog.DogTailState[this.tailState];
            };
            // --------------------- private stuff down here -------------------------------
            DogController.prototype.initializeDog = function (dogToCopy) {
                // todo: not all dog props are being transfered
                this.familiarName = dogToCopy.familiarName;
                this.barkSound = dogToCopy.barkSound;
                this.age = dogToCopy.age;
                this.startupBlog = dogToCopy.startupBlog;
                this.chewUrgeInterval = dogToCopy.chewUrgeInterval;
            };
            DogController.prototype.initializeEvents = function () {
                var _this = this;
                this.chewPromise = this.$interval(this.chewOnSomething, this.chewUrgeInterval, 0, true);
                this.$rootScope.$on(this.eventNames.masterThrow, this.fetch);
                this.$rootScope.$on(this.eventNames.masterFeed, this.eat);
                this.$rootScope.$on(this.eventNames.decapitate, this.decapitateHandler);
                this.$rootScope.$on(this.eventNames.catHiss, function (e, a) { return _this.bark(10); });
                this.$rootScope.$on(this.eventNames.personPet, this.getPetted);
                this.$rootScope.$on(this.eventNames.animalRun, function (e, arg) { return _this.giveChase(arg); });
                this.$rootScope.$on(this.eventNames.changeDomain, function (e, arg) { return _this.setDogDomain(arg); });
                this.$rootScope.$on(this.eventNames.commandStay, this.respondToCommand);
                this.$rootScope.$on(this.eventNames.commandShake, this.respondToCommand);
                this.$rootScope.$on(this.eventNames.dogBark, function (e, a) { return _this.getExcited; });
            };
            DogController.prototype.initializeLists = function () {
                this.blogPreface.push('Guess what! ');
                this.blogPreface.push('Ha! ');
                this.blogPreface.push('Nice! ');
                this.blogPreface.push('You\'ll never believe this! ');
                this.blogPreface.push('OMG! ');
                this.blogPreface.push('So I\'m laying here. ');
                for (var x = 0; x < this.dogConfig.otherDogs.length; x++) {
                    this.dogList.push(this.dogConfig.otherDogs[x]);
                }
                this.dogList.push(this.dogConfig.startDog);
            };
            // todo: may not always want to add datestamp to blog
            // e.g. if want we want to blog multiple times on one event 
            DogController.prototype.blog = function (blogEntry, addPreface) {
                if (addPreface === void 0) { addPreface = true; }
                if (blogEntry !== '') {
                    if (addPreface) {
                        blogEntry = this.blogPreface[Math.floor((Math.random() * this.blogPreface.length))] + blogEntry;
                    }
                    blogEntry = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) + ": " + blogEntry;
                    this.blogContent = blogEntry + "\r\n" + this.blogContent;
                }
            };
            // todo: implement this with button, make public?
            DogController.prototype.blogAboutMe = function () {
                this.blog(("Hi, my name is " + this.familiarName + " and\n        I am a " + this.breed + ". I have a " + this.coatStyle + " coat,\n        ears that are " + this.earStyle + "\n        and a tail that is " + this.tailStyle + ", \n        I am " + this.age + " years old,\n        and when I bark it sounds like this: " + this.barkSound + ".\n        I get the urge to chew about every\n        " + this.chewUrgeInterval / (1000) + " seconds, \n        but mostly I " + this.defaultAction + ". I get lonely after \n        " + this.dogLonelyEndurance / (1000 * 60 * 60) + " hours,\n        and I will complain loudly about it for \n        " + this.dogLonelyDuration / (1000 * 60) + " minutes. I get sleepy every \n        " + this.dogTiredInterval / (1000 * 60 * 60) + " hours\n        and sleep for " + this.dogSleepDuration / (1000 * 60 * 60) + ".\n        Right now my ears are " + this.earState + "\n        and my tail is " + this.getTailStateText() + ".")
                    .replace(/\s+/g, ' '));
            };
            DogController.prototype.chewOnSomethingSqueaky = function (blogEntry, chewObject) {
                blogEntry += " I chewed on the " + chewObject.name + " and heard it squeak!" +
                    'Ok this is way too much fun!!!';
                for (var i = 0; i < this.squeakyOcdChewCount; i++) {
                    if (chewObject.chewOn() === virtdog.ChewExperience.squeaky) {
                        blogEntry += ' Chomp, SQEAK!';
                    }
                    else {
                        blogEntry += ' Chomp... Hey it stopped squeaking, let me try again!';
                    }
                }
            };
            DogController.prototype.displayConfusion = function (event, args) {
                this.blog("I tilt my head at " + event.name + ", akward...");
            };
            DogController.prototype.stopChewing = function () {
                this.$interval.cancel(this.chewPromise);
            };
            DogController.$inject = ['$rootScope', '$interval', 'dogConfig', 'eventNames'];
            return DogController;
        }());
        virtdog.DogController = DogController;
        virtdog.getModuleDog().controller('dogController', DogController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvZ0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxPQUFPLENBNFJoQjtBQTVSRCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0E0UnhCO0lBNVJpQixXQUFBLE9BQU87UUFDdkI7WUFpQ0UsdUJBQ1UsVUFBZ0MsRUFDaEMsU0FBOEIsRUFDOUIsU0FBMkIsRUFDM0IsVUFBc0I7Z0JBSmhDLGlCQVdDO2dCQVZTLGVBQVUsR0FBVixVQUFVLENBQXNCO2dCQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7Z0JBQzNCLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBcEN6QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsZ0JBQVcsR0FBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QixnQkFBVyxHQUFnQixFQUFFLENBQUM7Z0JBRTlCLGNBQVMsR0FBYyxJQUFJLENBQUM7Z0JBQzVCLFlBQU8sR0FBVyxFQUFFLENBQUM7Z0JBRTVCLE9BQU87Z0JBQ0EsUUFBRyxHQUFHLENBQUMsQ0FBQztnQkFDUixjQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNmLFVBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ1gscUJBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxjQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNmLHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxxQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLHFCQUFnQixH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