class ApiUserData{
    constructor(username){
        this.username = username
    }
    displayData(){
        if(this.username){
            let data = {
                id: this.id,
                username: this.username,
                name: this.name,
                honor: this.honor,
                clan: this.clan,
                leaderboardPosition: this.leaderboardPosition,
                skils: this.skills
            }
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
            this.id = data.id
            this.username = data.username
            this.name = data.name
            this.honor = data.honor
            this.clan = data.clan
            this.leaderboardPosition = data.leaderboardPosition
            this.skills = data.skills
            this.displayData()
        });
    }
}

document.getElementById('send').addEventListener('click', function(){
    let user = new ApiUserData(document.getElementById('username').value)
    user.getHonor()
})