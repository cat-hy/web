function validate(){
	var fname=document.reg_form.fname;
	var address=document.reg_form.address;
	var gender=document.reg_form.gender;
	var email=document.reg_form.email;
	var mobile=document.reg_form.mobile;
	var course=document.reg_form.course;
	if(fname.value.length<=0){
	alert("Name is required");
	fname.focus();
	return false;
	}
	if(address.value.length<=0){
	alert("Address is required");
	address.focus();
	return false;
	}
	
	if(gender.value.length<=0){
	alert("Gender is required");
	gender.focus();
	return false;
	}

	if(email.value.length<=0){
	alert("Email Id is required");
	email.focus();
	return false;
	}
	if(!(email.value.includes("@"))||(!email.value.includes("."))){
	alert("invalid email");
	return false;
	}
	if(mobile.value== ""){
	alert("Enter a valid mobile number");
	mobile.focus();
	return false;
	}
	//if(mobile.value.length<=0 || mobile.value.length!=10){
	//alert("Enter a valid mobile number");
	//mobile.focus();
	//return false;
	//}
	

	if(course.value=="select course"){
	alert("Course is required");
	course.focus();
	return false;
	}
	 return false;
}
	


