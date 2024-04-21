class ApiUserData{
    constructor(username){
        this.username = username
    }
    displayData(data){
        if(this.username){
            document.getElementById('dataDisplay').innerText = JSON.stringify(data, null, 2)
            document.getElementById('dataError').style.display = 'none'
        } else {
            document.getElementById('dataError').style.display = 'block'
            document.getElementById('dataError').style.color = 'red'
            document.getElementById('dataError').innerText = 'No existe.'
            
        }
    }
    getHonor(){
        document.getElementById('dataDisplay').innerText = ''
        document.getElementById('username').value = ''
        fetch('https://www.codewars.com/api/v1/users/' + this.username)
        .then(response => response.json())
        .then(data => {
            this.displayData(data)
        });
    }
}

document.getElementById('send').addEventListener('click', function(){
    let user = new ApiUserData(document.getElementById('username').value)
    user.getHonor()
})
