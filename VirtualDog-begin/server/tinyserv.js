"use strict";
/// <reference path="../typings/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var Http = require("http");
var toeknee;
(function (toeknee) {
    var cors;
    (function (cors) {
        var CorsPassthru = /** @class */ (function () {
            // todo: pass in destination url root and url validation (for if test below)
            function CorsPassthru() {
                this.Client = require('node-rest-client').Client;
                this.Promise = require('bluebird');
                this.restClient = new this.Client();
                this.initiate();
            }
            CorsPassthru.prototype.startServer = function () {
                this.server.listen(8200);
                console.log('Server running at ' + this.server.localAddress + ':' + this.server.localPort);
            };
            CorsPassthru.prototype.initiate = function () {
                var _this = this;
                this.server = Http.createServer(function (request, response) { return _this.passThrough(request, response); });
            };
            CorsPassthru.prototype.passThrough = function (request, response) {
                console.log(request.url);
                // todo: for now only redirect the nasa stuff
                // in future make this generic
                // maybe config so we can either do JSON or other data
                if (request.url.indexOf('mars-photos') > 0) {
                    this.getAsync(request.url).then(function (data) {
                        response.writeHead(200, {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': 'X-Requested-With'
                        });
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                        .catch(function (err) {
                        response.statusCode = 500;
                        response.end();
                    });
                }
                else {
                    response.end();
                }
                ;
            };
            CorsPassthru.prototype.getAsync = function (url) {
                var _this = this;
                return new this.Promise(function (resolve, reject) {
                    var args = {
                        requestConfig: {
                            timeout: 10000
                        },
                        responseConfig: {
                            timeout: 10000
                        }
                    };
                    // todo: make this more generic
                    var destinationUrl = 'https://api.nasa.gov' + url;
                    console.log('Destination: ' + destinationUrl);
                    var returnData = '';
                    var req = _this.restClient.get(destinationUrl, function (data, response) {
                        console.log('Destination resolved');
                        resolve(data);
                    });
                    req.on('requestTimeout', function (req) {
                        console.log('request has expired');
                        req.abort();
                        reject('request expired');
                    });
                    req.on('responseTimeout', function (res) {
                        console.log('response has expired');
                        reject('response expired');
                    });
                    req.on('error', function (err) {
                        console.log('request error', err);
                        reject('request error' + err);
                    });
                });
            };
            return CorsPassthru;
        }());
        cors.CorsPassthru = CorsPassthru;
    })(cors = toeknee.cors || (toeknee.cors = {}));
})(toeknee || (toeknee = {}));
new toeknee.cors.CorsPassthru().startServer();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueXNlcnYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW55c2Vydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQThDOztBQUU5QywyQkFBOEI7QUFFOUIsSUFBVSxPQUFPLENBa0ZoQjtBQWxGRCxXQUFVLE9BQU87SUFBQyxJQUFBLElBQUksQ0FrRnJCO0lBbEZpQixXQUFBLElBQUk7UUFDcEI7WUFNRSw0RUFBNEU7WUFDNUU7Z0JBTlEsV0FBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsWUFBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUIsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUtyQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUVNLGtDQUFXLEdBQWxCO2dCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdGLENBQUM7WUFFTywrQkFBUSxHQUFoQjtnQkFBQSxpQkFFQztnQkFEQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQyxPQUFPLEVBQUUsUUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztZQUM5RixDQUFDO1lBRU8sa0NBQVcsR0FBbkIsVUFBb0IsT0FBNkIsRUFBRSxRQUE2QjtnQkFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLDZDQUE2QztnQkFDN0MsOEJB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