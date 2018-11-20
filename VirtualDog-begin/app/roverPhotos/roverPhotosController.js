'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        var RoverPhotosController = /** @class */ (function () {
            function RoverPhotosController(roverPhotoDataService, roverConfig) {
                this.roverPhotoDataService = roverPhotoDataService;
                this.roverConfig = roverConfig;
                this.data = {};
                this.photosToDroolOver = [];
                this.today = new Date();
                this.photoDate = this.today.getFullYear().toString() + '-' + this.today.getMonth().toString() + '-' + this.today.getDate().toString();
                this.roverCamera = '';
                this.roverPhotoUrl = '';
                // since there is a lag on photo upload from Mars (imagine that)
                // get photos from a few weeks ago
                this.today.setTime(this.today.getTime() - ((24 * 60 * 60 * 1000) * 84));
                this.photoDate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate().toString();
                this.roverCamera = this.roverConfig.camera;
                this.getPhotos(this.roverCamera);
            }
            // todo: interface out the photo object and other objects from rest call
            RoverPhotosController.prototype.getPhotos = function (currentCamera) {
                var _this = this;
                this.roverPhotoDataService.getPhotos(this.photoDate, currentCamera).then(function (data) {
                    _this.photosToDroolOver = data.photos;
                    _this.photosToDroolOver.forEach(function (photo) {
                        _this.roverPhotoUrl = photo.img_src;
                        _this.cameras = photo.rover.cameras;
                    });
                }, function (reason) { _this.roverError = reason; });
            };
            RoverPhotosController.$inject = ['roverPhotoDataService', 'roverConfig'];
            return RoverPhotosController;
        }());
        virtdog.RoverPhotosController = RoverPhotosController;
        virtdog.getModuleRoverPhotos().controller('roverPhotosController', RoverPhotosController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm92ZXJQaG90b3NDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm92ZXJQaG90b3NDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsT0FBTyxDQWdDaEI7QUFoQ0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBZ0N4QjtJQWhDaUIsV0FBQSxPQUFPO1FBQ3ZCO1lBV0UsK0JBQW9CLHFCQUE0QyxFQUFVLFdBQXdCO2dCQUE5RSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO2dCQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO2dCQVYzRixTQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNWLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFFdkIsVUFBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ25CLGNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqSSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7Z0JBS3hCLGdFQUFnRTtnQkFDaEUsa0NBQWtDO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELHdFQUF3RTtZQUNqRSx5Q0FBUyxHQUFoQixVQUFpQixhQUFxQjtnQkFBdEMsaUJBUUM7Z0JBUEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7b0JBQzVFLEtBQUksQ0FBQyxpQkFBaUIsR0FBUyxJQUFLLENBQUMsTUFBTSxDQUFDO29CQUM1QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSzt3QkFDbEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUNuQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUUsVUFBQyxNQUFNLElBQU8sS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBbEJNLDZCQUFPLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztZQW1CNUQsNEJBQUM7U0FBQSxBQTdCRCxJQTZCQztRQTdCWSw2QkFBcUIsd0JBNkJqQyxDQUFBO1FBQ0QsUUFBQSxvQkFBb0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUMsRUFoQ2lCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQWdDeEI7QUFBRCxDQUFDLEVBaENTLE9BQU8sS0FBUCxPQUFPLFFBZ0NoQiJ9