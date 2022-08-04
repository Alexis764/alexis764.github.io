$(document).ready(function(){

    $(".informacion").hide()

    $(".acordion").on("click", function(){

        let ind = $(".acordion").index(this)

        let d3 = $(".informacion").eq(ind)

        d3.slideToggle(500)

    })

})