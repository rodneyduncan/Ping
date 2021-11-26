const emailInput = document.getElementById("emailInput");

const submitBtn = document.getElementById("submitBtn");

const hiddenText = document.getElementById("hide");

submitBtn.addEventListener('click', function(){
	if(emailInput.value === ''){
		hiddenText.style.display = 'block';
		emailInput.style.borderColor = 'var(--lightred)';
	}
})