console.log('hi');


var courseCards = document.getElementById('course-details');


var courses = [


	{
		name : 'Graphics Design' ,
		type : 'Short Courses' ,
		startDate : '8/6/2019',
		duration : '3 months',
		fees	: 1500,
		level : 6 ,
		room : 23

	},


	{
		name : 'Web & Graphics' ,
		type : 'Diploma' ,
		startDate : '3/7/2019',
		duration : '10 months',
		fees	: 6000,
		level : 6,
		room : 25

	},

	{
		name : 'Creative Media' ,
		type : 'Short Courses' ,
		startDate : '8/6/2019',
		duration : '4 months',
		fees	: 2000,
		level : 5 ,
		room : 29

	}


];

console.log(courseCards);


document.getElementById('home').addEventListener('click', function() {

function allCourses(){

courseCards.innerHTML =' ';
var i;

for (i = 0 ; i < courses.length ; i ++) {

courseCards.innerHTML += ' <div class="col-md-3 course">' +
			'<div class="card">' +
          '<div class="card-header bg-primary">' + courses[i].type + ': '+ courses[i].name + '</div>' +

          '<div class="card-body bg-info"> level : ' +  courses[i].level + '<br>Start date:'+courses[i].startDate +
            '<br> Duration: '+ courses[i].duration +'</div> '+

          '<div class="card-footer bg-success">Room Number : '+courses[i].room+'</div></div> </div>';
}

}
allCourses();

});

//Course Filter
//document.getElementById('gd').addEventListener('click', function() {
	//document.getElementById('sc').innerHTML = 'Graphics Design';
	//var courseSelected = 'Graphics Design';

	function courseFilter(prop, courseSelected){


		courseCards.innerHTML =' ';

		document.getElementById('filter-heading').innerHTML = ' <h3>  Course ' + prop + ":" +courseSelected + '</h3>  <br>';

	    for (i = 0 ; i < courses.length ; i ++) {
	    	//console.log(courses[i].prop, courseSelected);
	    	if (prop == 'name') {
	    		courses[i].prop = courses[i].name;
	    	} else if (prop == 'Level'){
	    		courses[i].prop = courses[i].level;
	    	}

			if (courses[i].prop == courseSelected) {

				courseCards.innerHTML += '  <div class="col-lg-3 course">' +
					'<div class="card">' +
		          '<div class="card-header bg-primary">' + courses[i].type + ': '+ courses[i].name + '</div>' +

		          '<div class="card-body bg-info"> level : ' +  courses[i].level + '<br>Start date:'+courses[i].startDate +
		            '<br> Duration: '+ courses[i].duration +'</div> '+

		          '<div class="card-footer bg-success">Room Number : '+courses[i].room+'</div></div> </div>';
		    } //if
	    } //for

    }//function 

  //  courseFilter(courseSelected);
//});




//Level filter 

//document.getElementById('l6').addEventListener('click', function() {
	//document.getElementById('sc').innerHTML = 'Graphics Design';
//	var courseSelected = '6';

	/*function levelFilter(courseSelected){

		courseCards.innerHTML =' ';

		document.getElementById('filter-heading').innerHTML = ' <h3> Level  ' + courseSelected + '</h3>  <br>';

		for (i = 0 ; i < courses.length ; i ++) {

			if (courses[i].level == courseSelected) {

				courseCards.innerHTML += '  <div class="col-lg-3 course">' +
					'<div class="card">' +
		          '<div class="card-header bg-primary">' + courses[i].type + ': '+ courses[i].name + '</div>' +

		          '<div class="card-body bg-info"> level : ' +  courses[i].level + '<br>Start date:'+courses[i].startDate +
		            '<br> Duration: '+ courses[i].duration +'</div> '+

		          '<div class="card-footer bg-success">Room Number : '+courses[i].room+'</div></div> </div>';
		    } //if
		} //for

	}//function 
*/
//	levelFilter(courseSelected);
//});




