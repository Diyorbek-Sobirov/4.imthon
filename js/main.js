var emailInputEl = document.querySelector('.form__email__input')

var passwordInputEl = document.querySelector('.form__password__input')

var loginFormEl = document.querySelector('.login__form')

const API = 'https://reqres.in/api'

 function login(credantalis){
     return new Promise((resolve, reject) =>{
        fetch(`${API}/login`,{
            method:'POST',
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify(credantalis),
            
        })
        .then(res =>{
            if(res.status===400)reject(res)
            return res.json()
        })
        .then(res =>{
            if(res.token){
                window.localStorage.setItem('token',res.token)
                window.location.replace('hompage.html')
            }else{
                alert("User name xato")
            }
            console.log(res)
            // resolve(res)
        })
        .catch(err =>{
            console.error(err)
        })

     })
}


loginFormEl.addEventListener('submit',  (event) =>{
    event.preventDefault()
    const body = {
        email:emailInputEl.value,
        password:passwordInputEl.value
    }
    try{
        login(body)
    }catch{
        console.log(error)
    }
    
})



