myServices.service('loaderSvc', function(){
	var manifest = [
		{src: 'spritesheet_grant.png', id: 'grant'},
		{src: 'sky.png', id: 'sky'},
		{src: 'hill1.png', id: 'hill'},
		{src: 'hill2.png', id: 'hill2'},
		{src: 'ground.png', id: 'ground'},
		{src: 'runningTrack.mp3', id: 'runningSound'},
		{src: 'jump.mp3', id: 'jumpingSound'}
	];
	var loader = new createjs.LoadQueue(true);

	createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]);

	loader.installPlugin(createjs.Sound);

	this.getResult = function(asset){
		// console.log(loader.getResult(asset));
		return loader.getResult(asset);
	};
	this.getLoader = function(){
		return loader;
	}
	this.loadAssets = function(){
		loader.loadManifest(manifest, true, '/app/assets/');
	}
});