




  //jquery Part  here
  $(document).ready(function(){


    $("#makeithappen").click(function(){
      $("#the_profile").show();
    });


     $("#animate_btn").click(function(){
      $("#slider_sec").animate({
        rotate: '90deg'

       });
      });

      $("#see_inside").click(function(){
       $("#profile_sec").addClass("flipprofile");
       });

       $(".bluebox").delay(3400).animate({width:"100%"},{duration:1000});
       $(".greenbox").delay(3900).animate({width:"100%"},{duration:1000});
       $(".redbox").delay(4400).animate({width:"100%"},{duration:1000});

       $("#forred").click(function(){
        $(".redbox").animate({height:"100%"},{queue:true,duration:1000});
        $(".notdisred").delay(1000).show(0);
         $("#greenbox").delay(1300).animate({height:"100%"},{queue:true,duration:1000});
        $(".notdisgreen").delay(2300).show(0);
          $("#bluebox").delay(2700).animate({height:"100%"},{queue:true,duration:1000});
          $(".notdisblue").delay(3700).show(0);

          });


          $("#forgreen").click(function(){
           $(".notdisred").addClass("animated bounceOut");
           $(".notdisgreen").addClass("animated bounceOut");
             $(".notdisblue").addClass("animated bounceOut");
           $("#bluebox").delay(600).animate({height:"0%"},{queue:true,duration:1000});

            $("#greenbox").delay(1600).animate({height:"0%"},{queue:true,duration:1000});

             $("#redbox").delay(2300).animate({height:"0%"},{queue:true,duration:1000});

             });
             $("#forblue").click(function(){

              $("#bluebox").animate({width:"0%"},{queue:true,duration:1000});

               $("#greenbox").delay(500).animate({width:"0%"},{queue:true,duration:1000});

                $("#redbox").delay(1000).animate({width:"0%"},{queue:true,duration:1000});

                });
  });
