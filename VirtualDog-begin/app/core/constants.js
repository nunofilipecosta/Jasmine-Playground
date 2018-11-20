var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        virtdog.eventNames = {
            dogBark: 'dogBark',
            dogChase: 'dogChase',
            catMeow: 'catMeow',
            catBO: 'catBO',
            catMove: 'catMove',
            catHiss: 'catHiss',
            decapitate: 'decapitate',
            masterCall: 'masterCall',
            masterThrow: 'masterThrow',
            masterFeed: 'masterFeed',
            masterTake: 'masterTake',
            motherNatureCalls1: 'motherNatureCalls1',
            motherNatureCalls2: 'motherNatureCalls2',
            hunger: 'hunger',
            chewUrge: 'chewUrge',
            exhaustion: 'exhaustion',
            loneliness: 'loneliness',
            excitement: 'excitement',
            layAround: 'layAround',
            animalRun: 'animalRun',
            personPet: 'personPet',
            personThreaten: 'personThreaten',
            commandSit: 'sit',
            commandLayDown: 'lay down',
            commandStay: 'stay',
            commandShake: 'shake',
            changeDomain: 'changeDomain'
        };
        virtdog.roverConfig = {
            roverUrl: 'http://localhost:8200//mars-photos/api/v1/rovers/curiosity/photos',
            apiKey: 'DEMO_KEY',
            camera: 'FHAZ',
            earthDate: '2014-8-26',
            roverName: 'curiosity',
            alternateUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
        };
        virtdog.dogPlaces = {
            home: { name: 'home', imagePath: 'zeusinside.jpg', indoors: true, placeObjects: [] },
            frontYard: { name: 'front yard', imagePath: 'zeusfrontyard.jpg', indoors: false, placeObjects: [] },
            backYard: { name: 'back yard', imagePath: 'zeusbackyard.jpg', indoors: false, placeObjects: [] },
            park: { name: 'park', imagePath: 'zeuspark.jpg', indoors: false, placeObjects: [] },
            bathroom: { name: 'bathroom', imagePath: 'fireplug.jpg', indoors: false, placeObjects: [] }
        };
        virtdog.getModuleCore().constant('eventNames', virtdog.eventNames);
        virtdog.getModuleCore().constant('roverConfig', virtdog.roverConfig);
        virtdog.getModuleCore().constant('dogPlaces', virtdog.dogPlaces);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQXNEaEI7QUF0REQsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBc0R4QjtJQXREaUIsV0FBQSxPQUFPO1FBQ1osa0JBQVUsR0FBRztZQUN0QixPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLEVBQUUsVUFBVTtZQUNwQixPQUFPLEVBQUUsU0FBUztZQUNsQixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLGtCQUFrQixFQUFFLG9CQUFvQjtZQUN4QyxrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMsTUFBTSxFQUFFLFFBQVE7WUFDaEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsVUFBVSxFQUFFLFlBQVk7WUFDeEIsVUFBVSxFQUFFLFlBQVk7WUFDeEIsVUFBVSxFQUFFLFlBQVk7WUFDeEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQyxVQUFVLEVBQUUsS0FBSztZQUNqQixjQUFjLEVBQUUsVUFBVTtZQUMxQixXQUFXLEVBQUUsTUFBTTtZQUNuQixZQUFZLEVBQUUsT0FBTztZQUNyQixZQUFZLEVBQUUsY0FBYztTQUM3QixDQUFDO1FBR1MsbUJBQVcsR0FBRztZQUN2QixRQUFRLEVBQUUsbUVBQW1FO1lBQzdFLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLFdBQVc7WUFDdEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsWUFBWSxFQUFFLGlFQUFpRTtTQUNoRixDQUFDO1FBR1MsaUJBQVMsR0FBRztZQUNyQixJQUFJLEVBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7WUFDL0YsU0FBUyxFQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO1lBQzlHLFFBQVEsRUFBYSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRTtZQUMzRyxJQUFJLEVBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO1lBQzlGLFFBQVEsRUFBYSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7U0FDdkcsQ0FBQztRQUdGLFFBQUEsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxRQUFBLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELFFBQUEsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFBLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELFFBQUEsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFBLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUMsRUF0RGlCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQXNEeEI7QUFBRCxDQUFDLEVBdERTLE9BQU8sS0FBUCxPQUFPLFFBc0RoQiJ9