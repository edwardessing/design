<script>
					function goToByScroll(id){
							$('html,body').animate({scrollTop: $("#"+id).offset().top},3000);
					}
					
					$(function() { 
					
					
					var menu_offset = $('.nav').offset();
					$(document).scroll(function() {
						if ( $(this).scrollTop() > menu_offset.top + 35 ) {
							
							$('.nav').css('position', 'fixed').css('top', 0);
							
						} else {
							$('.nav').css('position', 'relative');
							
						}
					});

					$('#page-reset').click(function() {
						$('.img-changeover').each(function(index, element) {
							if($(element).attr('data-state') == 'on') {
								$(element).animate({opacity:1})
							}
						});
					})

					  $("#contact .button").click(function() { 
						var name = $("#name").val(); 
						var email = $("#email").val(); 
						var text = $("#comment").val(); 
						var subject = $("#subject").val(); 
						var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
						var dataString = 'name='+ name + '&email=' + email + '&text=' + text; 
						
						if(name==''){
						return false;
						}
						
						if(email==''){
						return false;
						}
						
						if(text==''){
						return false;
						}
						
						 $.ajax({ 
						type: "POST", 
						url: "email.php", 
						data: dataString, 
						success: function(){ 
						  $('.success').fadeIn(1000); 
						} 
						}); 

						 return false; 
					  }); 
					});
					
					$(document).ready(function(){
						$("a[rel^='prettyPhoto']").prettyPhoto();
					  });
					


					
				</script>