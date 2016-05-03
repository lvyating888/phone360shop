$(function(){
	 $closebtn=$('.ggbox .closebtn');
	 $ggbox=$('.ggbox');
	 console.log($ggbox)
	$closebtn.click(function(){
		$ggbox.css({
			"display":"none"
		})
	})

})