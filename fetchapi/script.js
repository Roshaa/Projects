console.log('Hello from script.js')

fetch('https://reqres.in/api/users',{
   method: 'POST',
   headers: {
      'Content-Type': 'application/json'
   },
   body: JSON.stringify({
         name: 'User 1'
   })
})
.then(response =>{return response.json()})
.then(data => console.log(data))
.catch(error => console.log('Error: ', error))