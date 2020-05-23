'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        class DogController {
            constructor($rootScope, $interval, dogConfig, eventNames) {
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
                this.bark = (numberOfBarks) => {
                    let totalBarkText = '';
                    for (let x = 0; x < numberOfBarks; x++) {
                        totalBarkText += `${this.barkSound} `;
                    }
                    this.blog(totalBarkText, false);
                };
                this.chewOnSomething = () => {
                    if (this.chewObjects.length) {
                        this.chewObjects.sort((chewObject1, chewObject2) => {
                            return chewObject1.expensive > chewObject2.expensive
                                ? -1
                                : chewObject1.expensive < chewObject2.expensive
                                    ? 1
                                    : chewObject1.irreplaceable
                                        ? -1
                                        : 0;
                        });
                    }
                    for (let x = 0; x < this.chewObjects.length; x++) {
                        if (this.chewObjects[x].chewy) {
                            let description = '';
                            if (this.chewObjects[x].chewOn() === virtdog.ChewExperience.squeaky) {
                                this.chewOnSomethingSqueaky(description, this.chewObjects[x]);
                            }
                            else {
                                description = `Suddenly I got an urge to chew!
            I happily chewed on the ${this.chewObjects[x].name}!
            The ${this.chewObjects[x].name} is now
            ${this.chewObjects[x].getSpitStateText()} and
            ${this.chewObjects[x].getStateText()}
            ${((this.chewObjects[x].monetaryValue < 1)
                                    ? '.'
                                    : (` and is now worth $
                ${Math.round(this.chewObjects[x].monetaryValue)}.`))}`
                                    .replace(/\s+/g, ' ');
                            }
                            this.blog(description);
                            return;
                        }
                    }
                };
                this.decapitateHandler = (event) => {
                    this.stopChewing();
                    this.tailState = virtdog.DogTailState.tucked;
                    this.blog('Oh no! Not the rab...');
                };
                this.eat = (event, food) => {
                    let blogEntry = `My master just fed me ${food.name}`;
                    if (food.edible) {
                        if (food.name === 'dog food') {
                            blogEntry += '! I ignored it for an hour, dumped it out on the floor, then ate the ' +
                                `${food.name} one piece at a time!`;
                            this.tailState = virtdog.DogTailState.wagging;
                        }
                        else {
                            blogEntry += `! I devoured the ${food.name} immediately ` +
                                'and looked back up at him with a hungry face.';
                            this.tailState = virtdog.DogTailState.wagging;
                        }
                    }
                    else {
                        blogEntry += `? I sniffed the ${food.name} and tilted my head.`;
                        this.tailState = virtdog.DogTailState.elevated;
                    }
                    this.blog(blogEntry);
                };
                this.fetch = (event, fetchObject) => {
                    let blogEntry = `My master just threw a ${fetchObject.name}. ` +
                        `I ran like mad to grab the ${fetchObject.name}`;
                    if (fetchObject.flies) {
                        blogEntry += ' and leapt like Air Jordan, snatching in mid flight!';
                    }
                    else {
                        blogEntry += ' snapping it up far sooner than imaginable!';
                    }
                    if (fetchObject.chewy && !this.chewObjects.some((chewObject) => {
                        return chewObject.name === fetchObject.name;
                    })) {
                        this.chewObjects.push(fetchObject);
                    }
                    if (fetchObject.chewOn() === virtdog.ChewExperience.squeaky) {
                        this.chewOnSomethingSqueaky(blogEntry, fetchObject);
                    }
                    else {
                        blogEntry += ` I gave the ${fetchObject.name} a good chew or two and dropped it.`;
                    }
                    this.blog(blogEntry);
                };
                this.getExcited = (someAnimal) => {
                    let description = someAnimal.familiarName +
                        ' wants to play with me!!! I wag my tail vigorously whine and jump up!!!';
                    this.blog(description, true);
                };
                this.getPetted = (event, person) => {
                    this.tailState = virtdog.DogTailState.wagging;
                    let description = person.familiarName +
                        ' just gave me a good petting! I smile and look at ' +
                        `${person.familiarName} with my big dog eyes look!`;
                    this.blog(description, true);
                };
                this.giveChase = (someAnimal) => {
                    this.tailState = virtdog.DogTailState.wagging;
                    let description = `I just chased ${someAnimal.familiarName} ` +
                        `through the ${this.dogDomain.name}!!!`;
                    this.blog(description, true);
                };
                this.respondToCommand = (event, somePerson) => {
                    let description = `${somePerson.familiarName} just told me to ${event.name}! `;
                    if (somePerson.familiarName === 'The Mailman') {
                        this.giveChase(somePerson);
                        this.blog(description, false);
                        return;
                    }
                    if (event.name === this.eventNames.commandStay) {
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
                    this.blog(description, true);
                };
                this.setDogDomain = (dogDomain) => {
                    this.dogDomain = dogDomain;
                };
                this.initializeDog(this.dogConfig.startDog);
                this.initializeEvents();
                this.initializeLists();
                this.blog(this.startupBlog);
            }
            testBark() {
                this.bark(3);
            }
            getTailStateText() {
                return virtdog.DogTailState[this.tailState];
            }
            // --------------------- private stuff down here -------------------------------
            initializeDog(dogToCopy) {
                // todo: not all dog props are being transfered
                this.familiarName = dogToCopy.familiarName;
                this.barkSound = dogToCopy.barkSound;
                this.age = dogToCopy.age;
                this.startupBlog = dogToCopy.startupBlog;
                this.chewUrgeInterval = dogToCopy.chewUrgeInterval;
            }
            initializeEvents() {
                this.chewPromise = this.$interval(this.chewOnSomething, this.chewUrgeInterval, 0, true);
                this.$rootScope.$on(this.eventNames.masterThrow, this.fetch);
                this.$rootScope.$on(this.eventNames.masterFeed, this.eat);
                this.$rootScope.$on(this.eventNames.decapitate, this.decapitateHandler);
                this.$rootScope.$on(this.eventNames.catHiss, (e, a) => this.bark(10));
                this.$rootScope.$on(this.eventNames.personPet, this.getPetted);
                this.$rootScope.$on(this.eventNames.animalRun, (e, arg) => this.giveChase(arg));
                this.$rootScope.$on(this.eventNames.changeDomain, (e, arg) => this.setDogDomain(arg));
                this.$rootScope.$on(this.eventNames.commandStay, this.respondToCommand);
                this.$rootScope.$on(this.eventNames.commandShake, this.respondToCommand);
                this.$rootScope.$on(this.eventNames.dogBark, (e, a) => this.getExcited);
            }
            initializeLists() {
                this.blogPreface.push('Guess what! ');
                this.blogPreface.push('Ha! ');
                this.blogPreface.push('Nice! ');
                this.blogPreface.push('You\'ll never believe this! ');
                this.blogPreface.push('OMG! ');
                this.blogPreface.push('So I\'m laying here. ');
                for (let x = 0; x < this.dogConfig.otherDogs.length; x++) {
                    this.dogList.push(this.dogConfig.otherDogs[x]);
                }
                this.dogList.push(this.dogConfig.startDog);
            }
            // todo: may not always want to add datestamp to blog
            // e.g. if want we want to blog multiple times on one event 
            blog(blogEntry, addPreface = true) {
                if (blogEntry !== '') {
                    if (addPreface) {
                        blogEntry = this.blogPreface[Math.floor((Math.random() * this.blogPreface.length))] + blogEntry;
                    }
                    blogEntry = `${new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}: ${blogEntry}`;
                    this.blogContent = `${blogEntry}\r\n${this.blogContent}`;
                }
            }
            // todo: implement this with button, make public?
            blogAboutMe() {
                this.blog(`Hi, my name is ${this.familiarName} and
        I am a ${this.breed}. I have a ${this.coatStyle} coat,
        ears that are ${this.earStyle}
        and a tail that is ${this.tailStyle}, 
        I am ${this.age} years old,
        and when I bark it sounds like this: ${this.barkSound}.
        I get the urge to chew about every
        ${this.chewUrgeInterval / (1000)} seconds, 
        but mostly I ${this.defaultAction}. I get lonely after 
        ${this.dogLonelyEndurance / (1000 * 60 * 60)} hours,
        and I will complain loudly about it for 
        ${this.dogLonelyDuration / (1000 * 60)} minutes. I get sleepy every 
        ${this.dogTiredInterval / (1000 * 60 * 60)} hours
        and sleep for ${this.dogSleepDuration / (1000 * 60 * 60)}.
        Right now my ears are ${this.earState}
        and my tail is ${this.getTailStateText()}.`
                    .replace(/\s+/g, ' '));
            }
            chewOnSomethingSqueaky(blogEntry, chewObject) {
                blogEntry += ` I chewed on the ${chewObject.name} and heard it squeak!` +
                    'Ok this is way too much fun!!!';
                for (let i = 0; i < this.squeakyOcdChewCount; i++) {
                    if (chewObject.chewOn() === virtdog.ChewExperience.squeaky) {
                        blogEntry += ' Chomp, SQEAK!';
                    }
                    else {
                        blogEntry += ' Chomp... Hey it stopped squeaking, let me try again!';
                    }
                }
            }
            displayConfusion(event, args) {
                this.blog(`I tilt my head at ${event.name}, akward...`);
            }
            stopChewing() {
                this.$interval.cancel(this.chewPromise);
            }
        }
        DogController.$inject = ['$rootScope', '$interval', 'dogConfig', 'eventNames'];
        virtdog.DogController = DogController;
        virtdog.getModuleDog().controller('dogController', DogController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvZ0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxPQUFPLENBNFJoQjtBQTVSRCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0E0UnhCO0lBNVJpQixXQUFBLE9BQU87UUFDdkIsTUFBYSxhQUFhO1lBaUN4QixZQUNVLFVBQWdDLEVBQ2hDLFNBQThCLEVBQzlCLFNBQTJCLEVBQzNCLFVBQXNCO2dCQUh0QixlQUFVLEdBQVYsVUFBVSxDQUFzQjtnQkFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO2dCQUMzQixlQUFVLEdBQVYsVUFBVSxDQUFZO2dCQXBDekIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLGdCQUFXLEdBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsZ0JBQVcsR0FBZ0IsRUFBRSxDQUFDO2dCQUU5QixjQUFTLEdBQWMsSUFBSSxDQUFDO2dCQUM1QixZQUFPLEdBQVcsRUFBRSxDQUFDO2dCQUU1QixPQUFPO2dCQUNBLFFBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ1IsY0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDZixVQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDZixzQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDeEMscUJBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxxQkFBZ0IsR0FB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