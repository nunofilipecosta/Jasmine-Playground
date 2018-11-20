var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var DogDomainController = /** @class */ (function () {
            function DogDomainController($rootScope, dogPlaces, eventNames) {
                this.$rootScope = $rootScope;
                this.dogPlaces = dogPlaces;
                this.eventNames = eventNames;
                this.placeObjects = [];
                this.places = [];
                this.initializeDomain();
            }
            DogDomainController.prototype.domainSelected = function (domain) {
                this.$rootScope.$broadcast(this.eventNames.changeDomain, domain);
            };
            // default initialization is home
            DogDomainController.prototype.initializeDomain = function () {
                this.place = this.dogPlaces.home;
                this.places.push(this.dogPlaces.home);
                this.places.push(this.dogPlaces.backYard);
                this.places.push(this.dogPlaces.frontYard);
                this.places.push(this.dogPlaces.park);
                this.places.push(this.dogPlaces.bathroom);
                this.placeObjects.push(new virtdog.DogObject('Really Nice Couch', true, false));
                this.placeObjects[0].expensive = true;
                this.placeObjects[0].monetaryValue = 2000;
            };
            DogDomainController.$inject = ['$rootScope', 'dogPlaces', 'eventNames'];
            return DogDomainController;
        }());
        virtdog.DogDomainController = DogDomainController;
        virtdog.getModuleDogDomain().controller('dogDomainController', DogDomainController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nRG9tYWluQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvZ0RvbWFpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBK0JoQjtBQS9CRCxXQUFVLE9BQU87SUFBQyxJQUFBLE9BQU8sQ0ErQnhCO0lBL0JpQixXQUFBLE9BQU87UUFDdkI7WUFNRSw2QkFBb0IsVUFBZ0MsRUFBUyxTQUFvQixFQUFVLFVBQXNCO2dCQUE3RixlQUFVLEdBQVYsVUFBVSxDQUFzQjtnQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBTDFHLGlCQUFZLEdBQWdCLEVBQUUsQ0FBQztnQkFFL0IsV0FBTSxHQUFnQixFQUFFLENBQUM7Z0JBSTlCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLENBQUM7WUFFTSw0Q0FBYyxHQUFyQixVQUFzQixNQUFpQjtnQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkUsQ0FBQztZQUVELGlDQUFpQztZQUN6Qiw4Q0FBZ0IsR0FBeEI7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BCLElBQUksUUFBQSxTQUFTLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUNoRCxDQUFDO2dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzVDLENBQUM7WUF0Qk0sMkJBQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUE7WUF1QjVELDBCQUFDO1NBQUEsQUE1QkQsSUE0QkM7UUE1QlksMkJBQW1CLHNCQTRCL0IsQ0FBQTtRQUNELFFBQUEsa0JBQWtCLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM5RSxDQUFDLEVBL0JpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUErQnhCO0FBQUQsQ0FBQyxFQS9CUyxPQUFPLEtBQVAsT0FBTyxRQStCaEIifQ==