var userTemplate = document.querySelector('#user-template').content
var userItemEl=document.querySelector('#playlist-item-template')
var userList = document.querySelector('#user-list')
var bookmarktemp = document.querySelector('#bookmark__template').content
var bookmarsList = document.querySelector('#bookmars-list')

function renderUsers(users,node){
    node.innerHTML='';
    let userListFragment=document.createDocumentFragment()

    for(let i= 0; i<10; i++){
        let userItemEl=document.importNode(userTemplate,true)

        let name = userItemEl.querySelector('.titleName')
        
        let temp=users.items[i].volumeInfo.title
        userItemEl.querySelector('.user-title').textContent=temp

        let img=users.items[i].volumeInfo.imageLinks.thumbnail
        userItemEl.querySelector('.user-img').src= img

        let year=users.items[i].volumeInfo.publishedDate
        userItemEl.querySelector('.user-id').textContent=year

        
        let sevimli=document.querySelector('.titles ')
        let bookmarkBtn=userItemEl.querySelector('.bookmark-btn')
        bookmarkBtn.addEventListener('click',event=>{

            let memp = document.importNode(bookmarktemp, true)

            // let mytemp = JSON.stringify(temp)

            memp.querySelector('.titleName').textContent = temp

            bookmarsList.appendChild(memp)
           

        })
            userListFragment.appendChild(userItemEl)
    }
    node.appendChild(userListFragment)
}

const API = 'https://www.googleapis.com/books/v1/volumes?q=search+'
function getUsers(page=10){
    return new Promise((resolve, reject) => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=search+javascript+phyton")
        .then(res => res.json())
        .then(res => { 
            console.log(res)
            renderUsers(res, userList)
        })
        .catch(err => reject(err))
    })
}
getUsers().then((res) => {
    console.log(res)
    const users = res.data
    const pages_count = res.total_pages
    renderPagination(pages_count)
    renderUsers(users, userList)
    console.log(users)
 })
 .catch(err => {
     console.log(err)
 })
getUsers()



//sevimliga js
var bookmarkTemplate=document.querySelector('#bookmark__template')
var titles=document.querySelector('.titles')
