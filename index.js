
window.onload = function()
{
    dataWithAsync()
    ex3()
    ex4()
}
const dataWithAsync = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let dataCollected = await response.json()
    console.log(dataCollected)

  
    
  

  let selectRow = document.querySelector('.row')
  dataCollected.forEach(ele =>{
      let col = document.createElement('div')
      col.classList.add('col-12', 'col-sm-6','col-md-4','mt-4','mb-4')
      col.innerHTML = `<div class="card bg-warning" style="width: 18rem;">
                        <div class = "card-body text-primary">
                        <h5 class = "card-title text-success"> Title : ${ele.name} </h5>
                        <h6 class = "card-text"> email : ${ele.email} </h6>
                        <h6 class = "card-text"> Id : ${ele.id} </h6>
                        <h6 class = "card-text"> username : ${ele.username} </h6>
                        <h6 class = "card-text"> website : ${ele.website} </h6>
                            </div>
                                </div>`
        selectRow.appendChild(col)

        return dataCollected

  })
}

const ex3 = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let dataCollected = await response.json()
    //console.log(dataCollected)
    
    let listNames = document.querySelector('.list-group')
    let h4tag = document.createElement('h4')
    h4tag.innerText = 'ex-3 List Of Names:'
    listNames.appendChild(h4tag)

    dataCollected.forEach(ele =>{
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerText += ele.name
        listNames.appendChild(li)
    })

}

const ex4 = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let dataCollected = await response.json()

    let l4 = document.querySelector('.list-group')
    l4.classList.add('mt-4')
    let h3tag = document.createElement('h4')
    h3tag.innerText = 'ex-4 Address as Strings:'
    l4.appendChild(h3tag)

    dataCollected.forEach(ele => {
        li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerText = `${ele.address.city}, ${ele.address.street}, ${ele.address.suite}, ${ele.address.zipcode}`
        l4.appendChild(li)
    })


}
const ex5 = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let dataCollected = await response.json()


}
