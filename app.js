const user = document.querySelector('#user')
const addBtn = document.querySelector('#add-btn')
const url = 'https://randomuser.me/api/'

addBtn.addEventListener('click', e => {
  axios.get(url).then(res => {
    console.log(res)
    let person = res.data.results[0]
    user.innerHTML = `
    <img src="${person.picture.medium}" class="card-img-top">
  <div class= "card-body" >
  <h5 class="card-title">${person.name.title} ${person.name.first}</h5>
  <p class="card-text">${person.email}</p>
  </div >
    `
  })
})
