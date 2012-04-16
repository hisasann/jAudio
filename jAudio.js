// audio - jQuery Plugin
(function($) {
	// init
	$.jAudio = function(elem) {
		return new Audio(elem);
	}
	
	var Audio = function(elem) {
		this.audio = elem.get(0);
	}
	
	Audio.prototype = {
		audio: null,

		// getter
		isPaused: function() { return this.audio.paused; },
		isEnded: function() { return this.audio.ended; },
		getDuration: function() { return this.audio.duration; },
		getSeeking: function() { return this.audio.seeking; },
		getPlayed: function() { return this.audio.played; },
		get: function() { return this.audio; },

		// properties
		loop: function(b) {
			this.audio.loop = b;
			return this;
		},
		currentTime: function(time) {
			this.audio.currentTime = time;
			return this;
		},
		autobuffer: function(b) {
			// default false
			this.audio.autobuffer = b;
			return this;
		},
		muted: function(b) {
			// default false
			this.audio.muted = b;
			return this;
		},
		volume: function(v) {
			// default 1
			this.audio.volume = v;
			return this;
		},
		playbackRate: function(rate) {
			// default 1	chrome
			this.audio.playbackRate = rate;
			return this;
		},

		// methods
		play: function() {
			this.audio.play();
			return this;
		},
		pause: function() {
			console.log(1);
			this.audio.pause();
			return this;
		},

		// events
		canplay: function(fn) {
			var _this = this;
			$(this.audio).bind("canplay", function() {
				fn.call(_this);
			});
			return this;
		},
		playing: function(fn) {
			var _this = this;
			$(this.audio).bind("playing", function() {
				fn.call(_this);
			});
			return this;
		}
	}
})(jQuery);
