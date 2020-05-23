"use strict";
/// <reference path="../typings/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
var toeknee;
(function (toeknee) {
    var cors;
    (function (cors) {
        class CorsPassthru {
            // todo: pass in destination url root and url validation (for if test below)
            constructor() {
                this.Client = require('node-rest-client').Client;
                this.Promise = require('bluebird');
                this.restClient = new this.Client();
                this.initiate();
            }
            startServer() {
                this.server.listen(8200);
                console.log('Server running at ' + this.server.localAddress + ':' + this.server.localPort);
            }
            initiate() {
                this.server = Http.createServer((request, response) => this.passThrough(request, response));
            }
            passThrough(request, response) {
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
            }
            getAsync(url) {
                return new this.Promise((resolve, reject) => {
                    let args = {
                        requestConfig: {
                            timeout: 10000
                        },
                        responseConfig: {
                            timeout: 10000
                        }
                    };
                    // todo: make this more generic
                    let destinationUrl = 'https://api.nasa.gov' + url;
                    console.log('Destination: ' + destinationUrl);
                    let returnData = '';
                    let req = this.restClient.get(destinationUrl, function (data, response) {
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
            }
        }
        cors.CorsPassthru = CorsPassthru;
    })(cors = toeknee.cors || (toeknee.cors = {}));
})(toeknee || (toeknee = {}));
new toeknee.cors.CorsPassthru().startServer();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueXNlcnYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW55c2Vydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQThDOztBQUU5Qyw2QkFBOEI7QUFFOUIsSUFBVSxPQUFPLENBa0ZoQjtBQWxGRCxXQUFVLE9BQU87SUFBQyxJQUFBLElBQUksQ0FrRnJCO0lBbEZpQixXQUFBLElBQUk7UUFDcEIsTUFBYSxZQUFZO1lBTXZCLDRFQUE0RTtZQUM1RTtnQkFOUSxXQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxZQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QixlQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBS3JDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBRU0sV0FBVztnQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0YsQ0FBQztZQUVPLFFBQVE7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5RixDQUFDO1lBRU8sV0FBVyxDQUFDLE9BQTZCLEVBQUUsUUFBNkI7Z0JBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6Qiw2Q0FBNkM7Z0JBQzdDLDhCQUE4QjtnQkFDOUIsc0RBQXNEO2dCQUN0RCxJQUFh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