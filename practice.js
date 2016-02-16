$(document).ready(function(){


// 1. When 'Submit' is clicked, add the contents of the textbox below the button in a h3 element.

// Add ( and label) your jQuery code here. 

//    var name = document.getElementByID("textInput").value;
//    
//    $("button#submitBtn").click(function(){
//        $("h3").append($(name);
//    })

    //Question 1
    
    $("button.btn-info#submitBtn").click(function(){
        
        var value = $(".textInput").val(); //gets input value
        
        $('<h3>' + value + '</h3>').insertAfter("button.btn-info#submitBtn"); //makes the value an h3 and inserts it after the button
        
    });
    
    //Question 2

    $(".chex input").click(function(){


    	if ($(this).prop("checked") == true)
    	{
    		$('h2.hidden').toggleClass("hidden show");
    	}

    	else if ($(this).prop("checked") == false)
    	{
    		$('h2.show').toggleClass("show hidden");
    	}

    });
    
    //Question 3

    $("<tr><td>Ocolot</td><td>10</td><td>Content</td></tr>").appendTo("tbody");

    //Question 4

	$("tbody").children().each(function(){
	    var hungerLevel = $(this).children("td:nth-child(3)");
	    if($(hungerLevel).text() === "Content"){
	      $(hungerLevel).css("color", "#629632");
	    } else {
	      $(hungerLevel).css("color", "#CD2626");
	    }
	})

	$("tbody").children().each(function(){
		var table = $(this).children("td:nth-child(3)");

		if ($(table).text() === "Content")
		{
			$(table).css("color", "green");
		}
		else
		{
			$(table).css("color", "red");
		}
	});

	//Question 5

	$(".btn-warning").click(function(){
	    $("tbody").children().each(function(){
	      var weight = $(this).children("td:nth-child(2)");
	      if($(weight).text() < 10){
	        $(this).hide();
	      }
	    })
  	});

	//Question 6

	$(".btn-success").click(function(){
	    $("tbody").children().each(function(){
	      var name = $(this).children("td:nth-child(1)");
	      $(name).text($(name).text().toUpperCase() + "!!!");
	    })
  	})


	//Question 7

	$("button.btn-primary").click(function(){

		$("table.table").toggleClass("hidden");

	});

	//Question 8

	$(".btn-primary").click(function(){
    	$(".table-striped").toggle();
  	})

	//Question 9

	$("#disableUs input").attr("disabled", "disabled");

	$('#disableUs a').bind('click', false);
	//use prevent default
	//or return false

	//Question 10

	var wahoo = $(".dropdown").find("option[value='Wahoo!!!']").text();
  $("<h3>" + wahoo + "</h3>").insertAfter(".dropdown");

	//Question 11

	$("ul#alertList").click(function(){

		alert($("ul#alertList li").length);

	});

		


    
    
});
