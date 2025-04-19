document.getElementById('akanForm').addEventListener('submit',function(e){
    e.preventDefault();
    
    const birthdate = new Date(document.getElementById('birthdate').value);
    const gender = document.querySelector('input[name="gender"]:cheked').value;

    const dayOfWeek = birthdate.getDay();

    const maleNames = ["kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    const dayNames = ["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"];

    let akanName;
    if(gender === 'male'){
        akanName = maleNames[dayOfWeek]
    }

    document.getElementById('akanName').textContent = akanName;
    document.getElementById('birthInfo').textContent = 'You were born on a ${dayNames[dayOfWeek]}';

    document.getElementById('result').classList.remove('hidden');

    document.getElementById('result').scrollIntoView({behavior:'smooth'})
})