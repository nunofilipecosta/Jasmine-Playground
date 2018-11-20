describe('In the file dogObject.js', function () {
    describe('the dogObject\'s', function () {
        var sut;
        beforeEach(function () {
            sut = new dogsrus.virtdog.DogObject('test', true, false);
        });
        describe('chewOn function', function () {
            describe('for an object with no dog spit', function () {
                it('should set spitState to someSpit', function () {
                    expect(sut.spitState).toEqual(dogsrus.virtdog.DogSpitState.noSpit);
                    sut.chewOn();
                    expect(sut.spitState).toEqual(dogsrus.virtdog.DogSpitState.someSpit);
                });
            });
            describe('for an impervious object', function () {
                it('should not change state', function () {
                    sut.impervious = true;
                    var expectedState = sut.state;
                    sut.chewOn();
                    expect(sut.state).toEqual(expectedState);
                });
            });
            describe('for an expensive object of $150 value', function () {
                beforeEach(function () {
                    sut.expensive = true;
                    sut.monetaryValue = 150;
                });
                it('should reduce the value by half', function () {
                    sut.chewOn();
                    expect(sut.monetaryValue).toEqual(150 / 2);
                });
                it('should set expensive to false', function () {
                    sut.chewOn();
                    expect(sut.expensive).toBeFalsy();
                });
            });
            describe('for an object in mint condition', function () {
                describe('with chewLimit of 0', function () {
                    it('should degrade state', function () {
                        sut.chewOn();
                        expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.littleBitChewed);
                    });
                });
                describe('with chewLimit of 10', function () {
                    beforeEach(function () {
                        sut.chewLimit = 10;
                    });
                    it('should degrade state', function () {
                        sut.chewOn();
                        expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.littleBitChewed);
                    });
                    it('should reduce chewLimit', function () {
                        sut.chewOn();
                        expect(sut.chewLimit).toEqual(9);
                    });
                });
            });
            describe('for an object with state of littleBitChewed', function () {
                beforeEach(function () {
                    sut.state = dogsrus.virtdog.ObjectState.littleBitChewed;
                });
                describe('with chewLimit of 11', function () {
                    beforeEach(function () {
                        sut.chewLimit = 11;
                    });
                    it('should not degrade state', function () {
                        sut.chewOn();
                        expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.littleBitChewed);
                    });
                    it('should reduce chewLimit', function () {
                        sut.chewOn();
                        expect(sut.chewLimit).toEqual(10);
                    });
                });
                describe('with chewLimit of 10', function () {
                    beforeEach(function () {
                        sut.chewLimit = 10;
                    });
                    it('should degrade state', function () {
                        sut.chewOn();
                        expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.veryChewed);
                    });
                    it('should reduce chewLimit', function () {
                        sut.chewOn();
                        expect(sut.chewLimit).toEqual(9);
                    });
                });
                describe('with chewLimit of 0', function () {
                    it('should degrade state', function () {
                        sut.chewOn();
                        expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.veryChewed);
                    });
                });
            });
            describe('for an object with state of veryChewed', function () {
                beforeEach(function () {
                    sut.state = dogsrus.virtdog.ObjectState.veryChewed;
                });
                describe('with chewLimit of 6', function () {
                    beforeEach(function () {
                        sut.chewLimit = 6;
                    });
                    it('should not degrade state', function () {
                        sut.chewOn();
                        expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.veryChewed);
                    });
                    it('should reduce chewLimit', function () {
                        sut.chewOn();
                        expect(sut.chewLimit).toEqual(5);
                    });
                });
                describe('with chewLimit of 5', function () {
                    beforeEach(function () {
                        sut.chewLimit = 5;
                    });
                    it('should degrade state', function () {
                        sut.chewOn();
                        expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.structurallyDamaged);
                    });
                    it('should reduce chewLimit', function () {
                        sut.chewOn();
                        expect(sut.chewLimit).toEqual(4);
                    });
                });
                describe('with chewLimit of 0', function () {
                    describe('and not shredable', function () {
                        it('should degrade state to structurallyDamaged', function () {
                            sut.chewOn();
                            expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.structurallyDamaged);
                        });
                    });
                    describe('and shredable', function () {
                        beforeEach(function () {
                            sut.shredable = true;
                        });
                        it('should degrade state to shredded', function () {
                            sut.chewOn();
                            expect(sut.state).toEqual(dogsrus.virtdog.ObjectState.shredded);
                        });
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nT2JqZWN0U3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvZ09iamVjdFNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBQ25DLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUMzQixJQUFJLEdBQThCLENBQUM7UUFDbkMsVUFBVSxDQUFDO1lBQ1QsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixRQUFRLENBQUMsZ0NBQWdDLEVBQUU7Z0JBQ3pDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtvQkFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQzNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUV2QyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRWIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQzNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsUUFBUSxDQUFDLDBCQUEwQixFQUFFO2dCQUNuQyxFQUFFLENBQUMseUJBQXlCLEVBQUU7b0JBQzVCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUU5QixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRWIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzND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