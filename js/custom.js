
$(document).ready(function(){ 

	//롤링배너 왼쪽
	$(".roll_left").click(function(){
		$(".roll li").eq(0).insertAfter(".roll li:last-child");
	});
	//롤링배너 오른쪽
	$(".roll_right").click(function(){
		$(".roll li").eq(-1).insertBefore(".roll li:first-child");
	});
	
	$(".roll_left2").click(function(){
		$(".roll2 li").eq(0).insertAfter(".roll2 li:last-child");
	});
	//롤링배너 오른쪽
	$(".roll_right2").click(function(){
		$(".roll2 li").eq(-1).insertBefore(".roll2 li:first-child");
	});
	

});//대문
