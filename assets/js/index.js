


// slider initialize

slider.init('#slider');



// add class function

var addClass = function(elements, className) {
	for (i = 0; i < elements.length; i++) {
		  element = elements[i];
		if (element.classList) {
			element.classList.add(className);
		} else {
			element.className += ' ' + className;
		}
	}
}

// remove class from any elements

var  removeClass= function(elements, className) {
	for ( i = 0; i < elements.length; i++) {
		element = elements[i];
		if (element.classList) {
			element.classList.remove(className);
		} else {
			element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}
}

// check a class exist or not

var hasClass=function(selector){

	if (selector.classList.contains('active')) {
 	return true;
	}
return false;
}


// show and hide (toggle) nav on mobile

document.querySelector('.menu-btn').addEventListener('click',function(){

var navarea=document.querySelector('.nav');

if(hasClass(navarea,'active')){

removeClass([navarea],'active');

}else{
	addClass([navarea],'active');
}

})