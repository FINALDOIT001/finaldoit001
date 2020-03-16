$(".td1").on({
    click:function(){
       $(".btn1").click(function(){
               //console.log($(this).parent().children().eq(0).text());
               var marketId = $(this).parent().parent().children().eq(0).text();
               location.href="<%=request.getContextPath()%>/selectMarketOne.ad?marketId=" + marketId;
            });
    }
 });
 $(function selectOne(){
    $(".kwon-td1").click(function(){
       console.log($(this).parent().children().eq(0).text());
       // var marketId = $(this).parent().children().eq(0).text();
       // location.href="<%=request.getContextPath()%>/selectMarketOne.ad?marketId=" + marketId;
       location.href="#";
       
    });
 });