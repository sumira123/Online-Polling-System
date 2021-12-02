function myfunction()
{
	var txt;
	if(confirm("Press Ok"))
	{
		txt = "Go to the password reset";
	}
	else{
		txt = "Again enter your password ";
	}
	document.getElementById("demo").innerHTML = txt;
}