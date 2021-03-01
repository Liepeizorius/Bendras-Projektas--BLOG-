window.onload = function() {
    document.querySelector('#sSubmit').addEventListener('click', async (e) => {
        e.preventDefault();
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;
        let email = document.querySelector('#email').value;
        let data = {
            username,
            password,
            email
        }

        try {
            const response = await fetch('http://localhost:1111/api/v1/scripts/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
    
                body: JSON.stringify(data)
            })
            
            if (response.status != 200) throw await response.json()

            let token = response.headers.get('user-auth')
            localStorage.setItem('user-auth', token)
    
    
            console.log(await response.json())
        
        } catch(e) {
            console.log(e)
        }

    })
  }

document.querySelector('#signinLink').addEventListener('click', (e) => { 
    window.location.href = './log-in'
}