window.addEventListener("load", get_random_dog_image);

function get_random_dog_image(){

fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {

	// The API call was successful!
	if (response.ok) {
		return response.json();
	}
	// There was an error
	return Promise.reject(response);
})

    .then(function (data) {
        display_image(data.message);
	// This is the JSON from our response
	console.log(data);
})
    .catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

}

function display_image(image_url){
    document.getElementById("image").src = image_url;
}







const btn = document.getElementById("btn");
btn.addEventListener("click", predictgender);


function predictgender() {
    var text = document.getElementById("input").value;
    
    fetch('https://api.genderize.io/?name='+text)
  
    .then(function (response) {

	// The API call was successful!
	if (response.ok) {
		return response.json();
	}
	// There was an error
	return Promise.reject(response);
})

    .then(function (data) {
        display_gender(data.gender);
	// This is the JSON from our response
	console.log(data);
})
    .catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

}

function display_gender(gendertype){
    document.getElementById("gender-type").textContent = gendertype;
}







btn.addEventListener("click", predictage);


function predictage() {
    var text = document.getElementById("input").value;
    
    fetch('https://api.agify.io/?name='+text)
  
    .then(function (response) {

	// The API call was successful!
	if (response.ok) {
		return response.json();
	}
	// There was an error
	return Promise.reject(response);
})

    .then(function (data) {
        display_age(data.age);
	// This is the JSON from our response
	console.log(data);
})
    .catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

}


function display_age(age){
    document.getElementById("age-numb").textContent = age;
}







btn.addEventListener("click", predictnationality);


function predictnationality() {
    var text = document.getElementById("input").value;
    
    fetch('https://api.nationalize.io/?name='+text)
  
    .then(function (response) {

	// The API call was successful!
	if (response.ok) {
		return response.json();
	}
	// There was an error
	return Promise.reject(response);
})

    .then(function (data) {
        display_nationality(data.country[i].country_id);
	// This is the JSON from our response
	console.log(data.country);
})
    .catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}


function display_nationality(nationality){
    document.getElementById("nationality-prob").textContent = nationality;
}

let i = 0;
function array() {
    for (let i = 0; i < data.country.length; i++) {
       return data.country[i].country_id
    };
  };





 























