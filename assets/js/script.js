$("ul").on("click", "li", function() {
  $(this).toggleClass("stroked")
});

//Remove selected span with li
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut( 400, function(){
        $(this).remove();
    });
    e.stopPropagation();
})


$("input[type='text'").keypress(function(event){
    if(event.which === 13){
      //grab input
        var todoText = $(this).val();
        $(this).val();
        // create new li and add to ul
        $("ul").append("<li> " + " <span> " + "<i class='fas fa-trash'> " + " </i>"  + "</span> " + todoText +"</li>")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle()
});
