$(function(){
    $(".checkall").change(function(){
        $(".j-checkbox, .checkall").prop("checked",$(this).prop("checked"));
        if($(this).prop("checked")) {
            $(".hh").addClass("check-hh");
        } else {
            $(".hh").removeClass("check-hh");
        }
    })
    $(".j-checkbox").change(function(){
        if($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked",true);
        } else {
            $(".checkall").prop("checked",false);
        }
        if($(this).prop("checked")) {
            $(this).parents(".hh").addClass("check-hh");
        } else {
            $(this).parents(".hh").removeClass("check-hh");
        }
    })
    $(".increment").click(function(){
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parent().parent().siblings(".pPrice").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2);
        $(this).parent().parent().siblings(".pSum").html("￥"+ price);
        getSum();
    })
    $(".decrement").click(function(){
        var n =$(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parent().parent().siblings(".pPrice").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2);
        $(this).parent().parent().siblings(".pSum").html("￥"+ price);
        getSum();
    })
    $(".itxt").change(function(){
        var n = $(this).val();
        var p = $(this).parents(".pNum").siblings(".pPrice").html();
        p = p.substr(1);
        $(this).parents(".pNum").siblings(".pSum").html("￥" + (p * n).toFixed(2));
        getSum();
    })
    getSum();
    function getSum (){
        var count = 0;
        var money = 0;
        $(".itxt").each(function(i,ele){
            count += parseInt($(ele).val());
        })
        $(".amountSum em").text(count);
        $(".pSum").each(function(i,ele){
            money += parseFloat($(ele).html().substr(1));
        })
        $(".priceSum em").text(money.toFixed(2));
    }
    $(".pAction a").click(function(){
        $(this).parents(".hh").remove();
        getSum();
    })
    $(".remove-batch").click(function(){
        $(".j-checkbox:checked").parents(".hh").remove();
        getSum();
    })
    $(".clear-all").click(function(){
        $(".hh").remove();
        getSum();
    })
})
