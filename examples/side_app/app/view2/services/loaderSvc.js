myServices.service('loaderSvc', function(){
	var manifest = [
		{src: 'spritesheet_grant.png', id: 'grant'},
		{src: 'sky.png', id: 'sky'},
		{src: 'hill1.png', id: 'hill'},
		{src: 'hill2.png', id: 'hill2'},
		{src: 'ground.png', id: 'ground'}
	];
	var loader = new createjs.LoadQueue(true);

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