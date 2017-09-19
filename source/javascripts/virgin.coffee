anchor = $("#virgin .container").position()
$("#virgin .container").mousemove (e) ->
	offsetX = e.clientX - anchor.left - 330
	$(this).find(".title").css("left", 80-offsetX/10+"px")
	$(this).find(".virgin-1").css("right", offsetX/18+"px")
	$(this).find(".virgin-2").css("right", offsetX/8+"px")
	# $(this).find(".icons").css("left", 80-offsetX/12+"px")
	offsetY = e.clientY - anchor.top - 330
	$(this).find(".title").css("top", 30+offsetY/10+"px")
	$(this).find(".virgin-1").css("top", -offsetY/18+"px")
	$(this).find(".virgin-2").css("top", -offsetY/8+"px")
	# $(this).find(".icons").css("top", 560+offsetY/12+"px")