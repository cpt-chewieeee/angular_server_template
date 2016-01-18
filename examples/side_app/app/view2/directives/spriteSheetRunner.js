angular.module('side_app.view2.directives', [])
.directive('spriteSheetRunner', ['loaderSvc', 'Sky', 'Ground', 'Hill', 'Character', function(loaderSvc, Sky, Ground, Hill, Character){
	"use strict";
       return {
           restrict : 'EAC',
           replace : true,
           scope :{
           },
           template: "<canvas width='960' height='400'></canvas>",
           link: function (scope, element, attribute) {
               var w, h, manifest, sky, grant, ground, hill, hill2;
               drawGame();
               function drawGame() {
                   //drawing the game canvas from scratch here
                   //In future we can pass stages as param and load indexes from arrays of background elements etc
                   if (scope.stage) {
                       scope.stage.autoClear = true;
                       scope.stage.removeAllChildren();
                       scope.stage.update();
                   } else {
                       scope.stage = new createjs.Stage(element[0]);
                   }
                   w = scope.stage.canvas.width;
                   h = scope.stage.canvas.height;
                   
                   loaderSvc.getLoader().addEventListener('complete', handleComplete);
                   loaderSvc.loadAssets(); 
               }
               function handleComplete() {
                    sky = new Sky({
                      width: w, 
                      height: h
                    });
                    sky.addToStage(scope.stage);
                    ground = new Ground({
                      width: w, 
                      height: h
                    });
                    hill = new Hill({
                      width: w, 
                      height: h, 
                      scaleFactor: 4, 
                      assetName: 'hill', 
                      groundHeight: ground.getHeight()
                    });
                    hill.setAlpha(0.5);
                    hill.addToStage(scope.stage);

                    hill2 = new Hill({
                      width: w, 
                      height: h, 
                      scaleFactor: 3, 
                      assetName: 'hill2',
                      groundHeight: ground.getHeight()
                    });
                    hill2.addToStage(scope.stage);

                    ground.addToStage(scope.stage);
                    grant = new Character({
                      characterAssetName: 'grant', 
                      y: 34
                    });
                    grant.addToStage(scope.stage);
                    scope.stage.addEventListener('stagemousedown', handleJumpStart);
                    createjs.Ticker.timingMode = createjs.Ticker.RAF;
                    createjs.Ticker.addEventListener('tick', tick);

                    window.onkeydown = keydown;
               }
               function keydown(event){
                if (event.keyCode === 38) {//if keyCode is "Up"
                    handleJumpStart();
                }
                if (event.keyCode === 39) {//if keyCode is "Right"
                  if (scope.status === "paused") {
                    createjs.Ticker.addEventListener("tick", tick);
                    scope.status = "running";
                  }
                }
                if (event.keyCode === 37) {//if keyCode is "Left"
                  createjs.Ticker.removeEventListener("tick", tick);
                  scope.status = "paused";
                }
               }
               function handleJumpStart() {
                   grant.playAnimation("jump");
               }
               function tick(event) {
                 // var deltaS = event.delta / 1000;
                 // var position = grant.x + 150 * deltaS;
                 // var grantW = grant.getBounds().width * grant.scaleX;
                 // grant.x = (position >= w + grantW) ? -grantW : position;
                 // ground.x = (ground.x - deltaS * 150) % ground.tileW;
                 // hill.x = (hill.x - deltaS * 30);
                 // if (hill.x + hill.image.width * hill.scaleX <= 0) {
                 //     hill.x = w;
                 // }
                 // hill2.x = (hill2.x - deltaS * 45);
                 // if (hill2.x + hill2.image.width * hill2.scaleX <= 0) {
                 //     hill2.x = w;
                 // }
                 // scope.stage.update(event);
                 var deltaS = event.delta / 1000;
                 var position = grant.getX() + 150 * deltaS;
                 grant.setX((position >= w + grant.getWidth()) ? -grant.getWidth() : position);
                 ground.setX((ground.getX() - deltaS * 150) % ground.getTileWidth());
                 hill.move(deltaS * -30, 0);
                 if(hill.getX() + hill.getImageWidth() * hill.getScaleX() <= 0){
                  hill.setX(w);
                 }
                 hill2.move(deltaS * -45, 0);
                 if(hill2.getX() + hill2.getImageWidth() * hill2.getScaleX() <= 0){
                  hill2.setX(w);
                 }
                 scope.stage.update(event);
               }
           }
       }
}]);