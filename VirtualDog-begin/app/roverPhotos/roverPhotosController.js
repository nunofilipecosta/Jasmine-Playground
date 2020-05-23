'use strict';
var dogsrus;
(function (dogsrus) {
    var virtdog;
    (function (virtdog) {
        class RoverPhotosController {
            constructor(roverPhotoDataService, roverConfig) {
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
            getPhotos(currentCamera) {
                this.roverPhotoDataService.getPhotos(this.photoDate, currentCamera).then((data) => {
                    this.photosToDroolOver = data.photos;
                    this.photosToDroolOver.forEach(photo => {
                        this.roverPhotoUrl = photo.img_src;
                        this.cameras = photo.rover.cameras;
                    });
                }, (reason) => { this.roverError = reason; });
            }
        }
        RoverPhotosController.$inject = ['roverPhotoDataService', 'roverConfig'];
        virtdog.RoverPhotosController = RoverPhotosController;
        virtdog.getModuleRoverPhotos().controller('roverPhotosController', RoverPhotosController);
    })(virtdog = dogsrus.virtdog || (dogsrus.virtdog = {}));
})(dogsrus || (dogsrus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm92ZXJQaG90b3NDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm92ZXJQaG90b3NDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsT0FBTyxDQWdDaEI7QUFoQ0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxPQUFPLENBZ0N4QjtJQWhDaUIsV0FBQSxPQUFPO1FBQ3ZCLE1BQWEscUJBQXFCO1lBV2hDLFlBQW9CLHFCQUE0QyxFQUFVLFdBQXdCO2dCQUE5RSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO2dCQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO2dCQVYzRixTQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNWLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFFdkIsVUFBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ25CLGNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqSSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7Z0JBS3hCLGdFQUFnRTtnQkFDaEUsa0NBQWtDO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELHdFQUF3RTtZQUNqRSxTQUFTLENBQUMsYUFBcUI7Z0JBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDaEYsSUFBSSxDQUFDLGlCQUFpQixHQUFTLElBQUssQ0FBQyxNQUFNLENBQUM7b0JBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDckMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7O1FBbEJNLDZCQUFPLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQVYvQyw2QkFBcUIsd0JBNkJqQyxDQUFBO1FBQ0QsUUFBQSxvQkFBb0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUMsRUFoQ2lCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQWdDeEI7QUFBRCxDQUFDLEVBaENTLE9BQU8sS0FBUCxPQUFPLFFBZ0NoQiJ9