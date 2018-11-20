var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        virtdog.dogConfiguration = {
            appTitle: 'Virtual Dog Demo',
            version: '1.0.0',
            startDog: {
                age: 9,
                barkSound: 'bark',
                breed: 'Malamute',
                chewUrgeInterval: 1000 * 20 * 1 * 1,
                coatStyle: 'thick and coarse',
                defaultAction: 'lay around',
                dogLonelyDuration: 1000 * 60 * 60 * 1,
                dogLonelyEndurance: 1000 * 60 * 60 * .06,
                dogSleepDuration: 1000 * 60 * 60 * 6,
                dogTiredInterval: 1000 * 60 * 60 * 2,
                earState: 'relaxed',
                earStyle: 'pointed and super soft',
                familiarName: 'Zeus',
                motherNature1Interval: 1000 * 60 * 60 * 4,
                motherNature2Interval: 1000 * 60 * 60 * 8,
                speciesName: 'canis familiaris',
                squeakyOcdChewCount: 10,
                startupBlog: 'I laid down and knocked my tail on the floor twice.',
                tailState: virtdog.DogTailState.elevated,
                tailStyle: 'curved and furry'
            },
            otherDogs: [{
                    age: 0.1,
                    barkSound: 'yip',
                    breed: 'Mongrel',
                    chewUrgeInterval: 1000 * 15,
                    coatStyle: '',
                    defaultAction: 'Lay around',
                    dogLonelyDuration: 1000 * 60 * 60 * 6,
                    dogLonelyEndurance: 1000 * 10,
                    dogSleepDuration: 1000 * 60 * 4,
                    dogTiredInterval: 1000 * 60 * 2,
                    earState: '',
                    earStyle: '',
                    familiarName: 'Puppy Trouble',
                    motherNature1Interval: 1000 * 60,
                    motherNature2Interval: 1000 * 60 * 60 * 1,
                    speciesName: 'Canis familiaris',
                    squeakyOcdChewCount: 3,
                    startupBlog: 'I wagged my tail, no I wagged my whole body! And while I did that I did my other favorite thing, I wet all over!',
                    tailState: virtdog.DogTailState.wagging,
                    tailStyle: ''
                }, {
                    age: 5,
                    barkSound: 'ruf',
                    breed: 'Labrador',
                    chewUrgeInterval: 1000 * 60 * 60 * 6,
                    coatStyle: '',
                    defaultAction: 'Lay around',
                    dogLonelyDuration: 1000 * 60 * 60 * 6,
                    dogLonelyEndurance: 1000 * 60 * 60 * 6,
                    dogSleepDuration: 1000 * 60 * 60 * 6,
                    dogTiredInterval: 1000 * 60 * 60 * 6,
                    earState: '',
                    earStyle: '',
                    familiarName: 'Rover',
                    motherNature1Interval: 1000 * 60 * 60 * 6,
                    motherNature2Interval: 1000 * 60 * 60 * 6,
                    speciesName: 'Canis familiaris',
                    squeakyOcdChewCount: 10,
                    startupBlog: 'I ran up to my master wagging my tail!',
                    tailState: virtdog.DogTailState.wagging,
                    tailStyle: ''
                }]
        };
        virtdog.getModuleCore().value('dogConfig', virtdog.dogConfiguration);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQXdFaEI7QUF4RUQsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBd0V4QjtJQXhFaUIsV0FBQSxPQUFPO1FBQ1osd0JBQWdCLEdBQUc7WUFDNUIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQVE7Z0JBQ2QsR0FBRyxFQUFFLENBQUM7Z0JBQ04sU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLEtBQUssRUFBRSxVQUFVO2dCQUNqQixnQkFBZ0IsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUNuQyxTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixhQUFhLEVBQUUsWUFBWTtnQkFDM0IsaUJBQWlCLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDckMsa0JBQWtCLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRztnQkFDeEMsZ0JBQWdCLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEMsZ0JBQWdCLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEMsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFlBQVksRUFBRSxNQUFNO2dCQUNwQixxQkFBcUIsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUN6QyxxQkFBcUIsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUN6QyxXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixtQkFBbUIsRUFBRSxFQUFFO2dCQUN2QixXQUFXLEVBQUUscURBQXFEO2dCQUNsRSxTQUFTLEVBQUUsUUFBQSxZ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