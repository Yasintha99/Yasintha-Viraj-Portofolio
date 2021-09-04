$(window).on('load', function(){
	$('.preloader').fadeOut('slow');
});

//main menu toggle
$(".active").show("slow");
$(".hidden").hide("slow");

function switchContent(type) {
	$(".active").addClass('hidden');
	$(".hidden").removeClass('active');
	$("#" + type).addClass('active');
	$("#" + type).removeClass('hidden');
	$('.hidden').hide("slow");
	$(".active").show("slow");
	
	//close work popup on menu toggle
	$(".work-popup").hide("slow");
	$(".wrk-explore").show();
	$(".wrk-title").show();
	$(".work-wrapper").show();
}

//mobile menu toggle
$(".active-m").fadeIn("slow");
$(".hidden-m").hide();
$(".hidden-menu").hide();

function menuToggle(response) {
	//hamburger icon - close icon toggle
	$(".active-m").addClass('hidden-m');
	$(".hidden-m").removeClass('active-m');
	$(".menu-"+response).addClass('active-m');
	$(".menu-"+response).removeClass('hidden-m');
	$(".hidden-m").hide();
	$(".active-m").fadeIn("slow");

	//close work popup on menu toggle
	// $(".work-popup").hide("slow");
	// $(".work-wrapper").show();
	// $(".wrk-explore").show();
	// $(".wrk-title").show();

	//menu items show - hide toggle
	$(".hidden-menu").addClass('active-menu');
	$(".active-menu").removeClass('hidden-menu');
	$(".m-menu").addClass(response+"-menu");
	$(".close-menu").addClass('active-menu');
	$(".active-menu").removeClass('close-menu');
	$(".open-menu").addClass('hidden-menu');
	$(".hidden-menu").removeClass('open-menu');
	$(".hidden-menu").removeClass('active-menu');
	$(".active-menu").fadeIn("slow");
	$(".hidden-menu").hide();
}

//job switch toggle
$(".active-c").show();
$(".hidden-c").hide();

function jobSwitch(response) {
	$(".active-c").addClass('hidden-c');
	$(".hidden-c").removeClass('active-c');
	$(".active-cn").addClass('hidden-cn');
	$(".hidden-cn").removeClass('active-cn');
	$("."+response).addClass('active-c');
	$("."+response).removeClass('hidden-c');
	$("."+response+"n").addClass('active-cn');
	$("."+response+"n").removeClass('hidden-cn');
	$(".hidden-c").hide();
	$(".active-c").fadeIn("slow");
}

$(".work-popup").hide();
$(".work-wrapper").show();
$(".wrk-explore").show();
$(".wrk-title").show();

function workPopup(response) {
	const sb = {
		img: "assets/media/work/smarterborrower.png", 
		title: "Smarter Borrower",
		task: "My main task was to build the front-end of this site and build the solution to generate a chart to demonstrate the data provided from the loan calcuation.",
		learn: "I had to work a lot with JavaScript and jQuery plus Chart.Js Library on this project, so I had a quiet good experience on Chart.Js on this project.",
		link: "https://smarterborrower.com.au/"
	};

	const ff = {
		img: "assets/media/work/officerfields.png", 
		title: "Officer Fields",
		task: "While I was working in 'Attractor Solutions' I had to work on this project as a backend developer, to build custom templates from scratch.",
		learn: "I had to work a lot with PHP on this project to build custom templates, custom post types and other back end functionalities. ",
		link: "https://officerfields.com.au/"
	};

	const hr = {
		img: "assets/media/work/herrodsiml.png", 
		title: "Herrods IML",
		task: "On this Project my tasks were to build both back end and front end with other developers.",
		learn: "I had to work with a good team of developers, designers and producers on this project and I learned a lot about team work and communication on this project.",
		link: "https://herrods.com.au/"
	};

	const pf = {
		img: "assets/media/work/platinumfinance.png", 
		title: "Platinum Finance",
		task: "While I was working in 'Duran IT' I had to work on this project and my tasks were to build frontend and communicate with clients to gather requirements.",
		learn: "I got a chance to learn a lot about Communicating with clients, Business analysis and Requirement gathering while workingmon this project.",
		link: "https://platinumfinance.co.nz/"
	};

	const sl = {
		img: "assets/media/work/settlerslane.png", 
		title: "Settlers Lane",
		task: "On this project my tasks were to build the front end and build custom templates, after it went live I had a chance to work on security features on this site.",
		learn: "By working on this project I had the opportunity to learn about security measures we have to take while working on websites.",
		link: "https://settlerslane.com.au/"
	};

	const ll = {
		img: "assets/media/work/lakestclairlodge.png", 
		title: "Lake St. Clair Lodge",
		task: "Other than front end & back end development, I had to work on DevOps tasks on this project.",
		learn: "I had the opportunity to learn and get the experience on some DevOps tasks such as, site migrations, DNS setup and CDN implementations.",
		link: "https://lakestclairlodge.com.au/"
	};

	const ap = {
		img: "assets/media/work/apply-platinumfinance.png", 
		title: "Apply - Platinum Finance",
		task: "On this project my tasks were to get client requirements, talk with the team and build backend functionalities.",
		learn: "I got the opportunity to work with my Senior developers on some advanced mathematical functionalities and a lot about PHP mailing and its oppurtunities and constraints.",
		link: "https://apply.platinumfinance.co.nz/"
	};

	const ta = {
		img: "assets/media/work/tradeassist.png", 
		title: "Trade Assist",
		task: "This project came to us with a lot of issues in it, first task was to find solutions and fix all the issues then we started doing other requirements.",
		learn: "I got a quiet good experience on find the proper answers for the issues which I didn't know before and fix them properly by diong research.",
		link: "https://tradeassist.net/"
	};

	const dg = {
		img: "assets/media/work/desertgarden.png", 
		title: "Desert Garden",
		task: "I started to build this site for one of my side businesses on my free time. ",
		learn: "While working on this site I got to learn about how to work on a e-commerce website and how to integrate services like payment gateways and other 3rd party services.",
		link: "http://desertgarden.great-site.net/"
	};

	const tp = {
		img: "assets/media/work/thepepperst.png", 
		title: "The Pepper St.",
		task: "This project was a whole new experience for me since I had to work on different platform. 'Shopify', which I haven't previously worked on.",
		learn: "I had the chance to explore and use many options which were in shopify platform by working on this project.",
		link: "https://the-pepper-st.myshopify.com/"
	};


	$(".work-wrapper").hide("slow");
	$(".wrk-explore").hide("slow");
	$(".wrk-title").hide("slow");
	$(".work-popup").show("slow");
	
	if (response == "sb") {
		$(".work-bg").attr('src', sb.img);
		$(".work-title").html(sb.title);
		$(".task").html(sb.task);
		$(".learn").html(sb.learn);
		$(".site-link").attr("href", sb.link);
	} else if (response == "ff") {
		$(".work-bg").attr('src', ff.img);
		$(".work-title").html(ff.title);
		$(".task").html(ff.task);
		$(".learn").html(ff.learn);
		$(".site-link").attr("href", ff.link);
	} else if (response == "hr") {
		$(".work-bg").attr('src', hr.img);
		$(".work-title").html(hr.title);
		$(".task").html(hr.task);
		$(".learn").html(hr.learn);
		$(".site-link").attr("href", hr.link);
	} else if (response == "pf") {
		$(".work-bg").attr('src', pf.img);
		$(".work-title").html(pf.title);
		$(".task").html(pf.task);
		$(".learn").html(pf.learn);
		$(".site-link").attr("href", pf.link);
	} else if (response == "sl") {
		$(".work-bg").attr('src', sl.img);
		$(".work-title").html(sl.title);
		$(".task").html(sl.task);
		$(".learn").html(sl.learn);
		$(".site-link").attr("href", sl.link);
	} else if (response == "ll") {
		$(".work-bg").attr('src', ll.img);
		$(".work-title").html(ll.title);
		$(".task").html(ll.task);
		$(".learn").html(ll.learn);
		$(".site-link").attr("href", ll.link);
	} else if (response == "ap") {
		$(".work-bg").attr('src', ap.img);
		$(".work-title").html(ap.title);
		$(".task").html(ap.task);
		$(".learn").html(ap.learn);
		$(".site-link").attr("href", ap.link);
	} else if (response == "ta") {
		$(".work-bg").attr('src', ta.img);
		$(".work-title").html(ta.title);
		$(".task").html(ta.task);
		$(".learn").html(ta.learn);
		$(".site-link").attr("href", ta.link);
	} else if (response == "dg") {
		$(".work-bg").attr('src', dg.img);
		$(".work-title").html(dg.title);
		$(".task").html(dg.task);
		$(".learn").html(dg.learn);
		$(".site-link").attr("href", dg.link);
	} else if (response == "tp") {
		$(".work-bg").attr('src', tp.img);
		$(".work-title").html(tp.title);
		$(".task").html(tp.task);
		$(".learn").html(tp.learn);
		$(".site-link").attr("href", tp.link);
	}
}

function closePopup(){
	$(".work-popup").hide("slow");
	$(".work-wrapper").show("slow");
	$(".wrk-explore").show("slow");
	$(".wrk-title").show("slow");	
}

// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

var year = new Date();
var currentYear = year.getFullYear();

var difference = (currentYear - 2018);

// The TextArray: 
var textArray = [
    " am a Fullstack Web Developer.",
	" develop both backend & frontend.",
    " have " + difference +" years + experience.",
    " design things on internet.",
    " develop things on internet.",
    " turn ideas into visuals.",
    " am a freelancer."
];

// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,500);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},500);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},500);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};

// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},500);


//contact form validations
function validateContactForm() {
	var valid = true;

	$(".info").html("");
	$(".input-field").css('border-bottom', '#fff 1px solid');
	$(".input-field").css('border-top', 'none');
	$(".input-field").css('border-left', 'none');
	$(".input-field").css('border-right', 'none');
	var userName = $("#userName").val();
	var userEmail = $("#userEmail").val();
	var subject = $("#subject").val();
	var content = $("#content").val();
	
	if (userName == "") {
		$("#userName-info").html("Required.");
		$("#userName").css('border', '#e66262 1px solid');
		valid = false;
	}
	if (userEmail == "") {
		$("#userEmail-info").html("Required.");
		$("#userEmail").css('border', '#e66262 1px solid');
		valid = false;
	}
	if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
	{
		$("#userEmail-info").html("Invalid Email Address.");
		$("#userEmail").css('border', '#e66262 1px solid');
		valid = false;
	}

	if (subject == "") {
		$("#subject-info").html("Required.");
		$("#subject").css('border', '#e66262 1px solid');
		valid = false;
	}
	if (content == "") {
		$("#userMessage-info").html("Required.");
		$("#content").css('border', '#e66262 1px solid');
		valid = false;
	}
	return valid;
}

//get current year to the footer copyright section
document.getElementById("year").innerHTML = currentYear;

//get user info on site load
let apiKey = 'e17213c9888e4e4f8511fd791450bc44';
$.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=' + apiKey, function(data) {
	var userData = JSON.stringify(data, null, 2);
	
	$.ajax({
		type: 'POST',
		url: 'ajax.php',
		data: {
			'variable': userData
		}
	});
	
});
