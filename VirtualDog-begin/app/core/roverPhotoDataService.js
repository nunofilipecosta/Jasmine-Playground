var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        class RoverPhotoDataService {
            constructor($http, roverConfig) {
                this.$http = $http;
                this.roverConfig = roverConfig;
            }
            getPhotos(earthDate = this.roverConfig.earthDate, camera = this.roverConfig.camera) {
                let roverHttpConfig = {
                    method: 'GET',
                    params: {
                        'earth_date': earthDate,
                        'camera': camera,
                        'api_key': this.roverConfig.apiKey,
                        'preventIECache': new Date().getTime()
                    },
                    url: this.roverConfig.roverUrl
                };
                return this.$http(roverHttpConfig).then((results) => {
                    return results.data;
                }, (response) => {
                    return response;
                });
            }
        }
        RoverPhotoDataService.$inject = ['$http', 'roverConfig'];
        virtdog.RoverPhotoDataService = RoverPhotoDataService;
        virtdog.getModuleCore().service('roverPhotoDataService', RoverPhotoDataService);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm92ZXJQaG90b0RhdGFTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm92ZXJQaG90b0RhdGFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQTBCaEI7QUExQkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBMEJ4QjtJQTFCaUIsV0FBQSxPQUFPO1FBQ3ZCLE1BQWEscUJBQXFCO1lBRWhDLFlBQW9CLEtBQXNCLEVBQVUsV0FBd0I7Z0JBQXhELFVBQUssR0FBTCxLQUFLLENBQWlCO2dCQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQUksQ0FBQztZQUUxRSxTQUFTLENBQUMsWUFBb0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO2dCQUN2RyxJQUFJLGVBQWUsR0FBc0I7b0JBQ3ZDLE1BQU0sRUFBRSxLQUFLO29CQUNiLE1BQU0sRUFBRTt3QkFDTixZQUFZLEVBQUUsU0FBUzt3QkFDdkIsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07d0JBQ2xDLGdCQUFnQixFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO3FCQUN2QztvQkFDRCxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO2lCQUMvQixDQUFDO2dCQUVGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3JDLENBQUMsT0FBTyxFQUFFLEVBQUU7b0JBQ1YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUN0QixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDZCxPQUFPLFFBQVEsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDOztRQXJCTSw2QkFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRC9CLDZCQUFxQix3QkF1QmpDLENBQUE7UUFDRCxRQUFBLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQzFFLENBQUMsRUExQmlCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQTBCeEI7QUFBRCxDQUFDLEVBMUJTLE9BQU8sS0FBUCxPQUFPLFFBMEJoQiJ9