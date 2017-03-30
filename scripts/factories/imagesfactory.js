rlStatsAnalyserApp.factory('ImagesFactory',function(){
	var images = [];

	function getAllImages(){
		return images;
	}

	//je moet m altijd exposen om m te kunnen gebruiken.
	return{
		getAllImages: getAllImages
	}
});