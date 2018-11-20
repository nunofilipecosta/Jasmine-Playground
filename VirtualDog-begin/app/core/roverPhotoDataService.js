var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var RoverPhotoDataService = /** @class */ (function () {
            function RoverPhotoDataService($http, roverConfig) {
                this.$http = $http;
                this.roverConfig = roverConfig;
            }
            RoverPhotoDataService.prototype.getPhotos = function (earthDate, camera) {
                if (earthDate === void 0) { earthDate = this.roverConfig.earthDate; }
                if (camera === void 0) { camera = this.roverConfig.camera; }
                var roverHttpConfig = {
                    method: 'GET',
                    params: {
                        'earth_date': earthDate,
                        'camera': camera,
                        'api_key': this.roverConfig.apiKey,
                        'preventIECache': new Date().getTime()
                    },
                    url: this.roverConfig.roverUrl
                };
                return this.$http(roverHttpConfig).then(function (results) {
                    return results.data;
                }, function (response) {
                    return response;
                });
            };
            RoverPhotoDataService.$inject = ['$http', 'roverConfig'];
            return RoverPhotoDataService;
        }());
        virtdog.RoverPhotoDataService = RoverPhotoDataService;
        virtdog.getModuleCore().service('roverPhotoDataService', RoverPhotoDataService);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm92ZXJQaG90b0RhdGFTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm92ZXJQaG90b0RhdGFTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQTBCaEI7QUExQkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBMEJ4QjtJQTFCaUIsV0FBQSxPQUFPO1FBQ3ZCO1lBRUUsK0JBQW9CLEtBQXNCLEVBQVUsV0FBd0I7Z0JBQXhELFVBQUssR0FBTCxLQUFLLENBQWlCO2dCQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQUksQ0FBQztZQUUxRSx5Q0FBUyxHQUFoQixVQUFpQixTQUE4QyxFQUFFLE1BQXdDO2dCQUF4RiwwQkFBQSxFQUFBLFlBQW9CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUztnQkFBRSx1QkFBQSxFQUFBLFNBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTtnQkFDdkcsSUFBSSxlQUFlLEdBQXNCO29CQUN2QyxNQUFNLEVBQUUsS0FBSztvQkFDYixNQUFNLEVBQUU7d0JBQ04sWUFBWSxFQUFFLFNBQVM7d0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO3dCQUNsQyxnQkFBZ0IsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtxQkFDdkM7b0JBQ0QsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUTtpQkFDL0IsQ0FBQztnQkFFRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNyQyxVQUFDLE9BQU87b0JBQ04sT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUN0QixDQUFDLEVBQUUsVUFBQyxRQUFRO29CQUNWLE9BQU8sUUFBUSxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7WUFyQk0sNkJBQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztZQXNCNUMsNEJBQUM7U0FBQSxBQXZCRCxJQXVCQztRQXZCWSw2QkFBcUIsd0JBdUJqQyxDQUFBO1FBQ0QsUUFBQSxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUMxRSxDQUFDLEVBMUJpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUEwQnhCO0FBQUQsQ0FBQyxFQTFCUyxPQUFPLEtBQVAsT0FBTyxRQTBCaEIifQ==