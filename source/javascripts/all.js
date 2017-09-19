//= require jquery.min
//= require jq-mp.min
//= require jq-ss.min
//= require virgin
// require_tree .

document.oncontextmenu = function(){
	window.event.returnValue=false; //將滑鼠右鍵事件取消
}

$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

$('.nav-bar a').smoothScroll({offset: 0,easing: 'linear'});

$('.gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title') +
					'<small>'+item.el.attr('creator')+'</small>'+
					'<small>'+item.el.attr('year')+'</small>'+
					'<small>'+item.el.attr('material')+'</small>'+
					'<small>'+item.el.attr('place')+'</small>'+
					'<small>'+item.el.attr('copyright')+'</small>';
		}
	}
});

$('#host .hoster').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title') +
					'<small>(圖像版權為達文西理想博物館所有)</small>';
		}
	}
});

$("#ticket").magnificPopup({
	delegate: '.image-popup',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title');
		}
	}
});

// $.magnificPopup.open({
//   items: {
//     src: '/images/app.jpg'
//   },
//   type: 'image'
// }, 0);

$("#transport .tabs a").click(function(){
	$("#transport .tab").removeClass("active");
	$(this).parent().addClass("active");
	$("#transport .canvas").children().hide();
	$("#transport .canvas "+$(this).data("href")).show();
});