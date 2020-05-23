var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        class DogDomainController {
            constructor($rootScope, dogPlaces, eventNames) {
                this.$rootScope = $rootScope;
                this.dogPlaces = dogPlaces;
                this.eventNames = eventNames;
                this.placeObjects = [];
                this.places = [];
                this.initializeDomain();
            }
            domainSelected(domain) {
                this.$rootScope.$broadcast(this.eventNames.changeDomain, domain);
            }
            // default initialization is home
            initializeDomain() {
                this.place = this.dogPlaces.home;
                this.places.push(this.dogPlaces.home);
                this.places.push(this.dogPlaces.backYard);
                this.places.push(this.dogPlaces.frontYard);
                this.places.push(this.dogPlaces.park);
                this.places.push(this.dogPlaces.bathroom);
                this.placeObjects.push(new virtdog.DogObject('Really Nice Couch', true, false));
                this.placeObjects[0].expensive = true;
                this.placeObjects[0].monetaryValue = 2000;
            }
        }
        DogDomainController.$inject = ['$rootScope', 'dogPlaces', 'eventNames'];
        virtdog.DogDomainController = DogDomainController;
        virtdog.getModuleDogDomain().controller('dogDomainController', DogDomainController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nRG9tYWluQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvZ0RvbWFpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBK0JoQjtBQS9CRCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0ErQnhCO0lBL0JpQixXQUFBLE9BQU87UUFDdkIsTUFBYSxtQkFBbUI7WUFNOUIsWUFBb0IsVUFBZ0MsRUFBUyxTQUFvQixFQUFVLFVBQXNCO2dCQUE3RixlQUFVLEdBQVYsVUFBVSxDQUFzQjtnQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBTDFHLGlCQUFZLEdBQWdCLEVBQUUsQ0FBQztnQkFFL0IsV0FBTSxHQUFnQixFQUFFLENBQUM7Z0JBSTlCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLENBQUM7WUFFTSxjQUFjLENBQUMsTUFBaUI7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLENBQUM7WUFFRCxpQ0FBaUM7WUFDekIsZ0JBQWdCO2dCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEIsSUFBSSxRQUFBLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ2hELENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDNUMsQ0FBQzs7UUF0Qk0sMkJBQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUE7UUFML0MsMkJBQW1CLHNCQTRCL0IsQ0FBQTtRQUNELFFBQUEsa0JBQWtCLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM5RSxDQUFDLEVBL0JpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUErQnhCO0FBQUQsQ0FBQyxFQS9CUyxPQUFPLEtBQVAsT0FBTyxRQStCaEIifQ==