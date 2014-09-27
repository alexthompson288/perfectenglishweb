

$(document).ready(function(){
	console.log('pge ready');
});


        var BV;
	    $(function() {
            
            // initialize BigVideo
            BV = new $.BigVideo();
			BV.init();
			BV.show('https://s3-eu-west-1.amazonaws.com/pipisodes/kids_pip_video_1.mp4',{ambient:true});

            // Playlist button click starts video
            $('.playlist-btn').on('click', function(e) {
                e.preventDefault();
                BV.show($(this).attr('href'));
            })

            // Video Play/Pause toggle
            $('#video-toggle').on('click', function(e) {
                if (this.checked)   BV.getPlayer().play();
                else                BV.getPlayer().pause();
            })

          
	    });
