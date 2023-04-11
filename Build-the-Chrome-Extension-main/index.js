let myLeads = []
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")



const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
 myLeads = leadsFromLocalStorage
 render(myLeads)
}

tabBtn.addEventListener("click", function () {
 console.log("yes")

 myLeads.push(window.location.href)
 localStorage.setItem("myLeads", JSON.stringify(myLeads))
 render(myLeads)


})



deleteBtn.addEventListener("click", function () {
 localStorage.clear()
 myLeads = []
 render(myLeads)
})


inputBtn.addEventListener("click", function () {
 myLeads.push(inputEl.value)
 inputEl.value = ""
 // calling renderLeads() function
 localStorage.setItem("myLeads", JSON.stringify(myLeads))
 render(myLeads)


})

function render(leades) {

 let listItems = ""
 for (let i = 0; i < leades.length; i++) {

  //listItems += "<li><a target='_blank' href="+ myLeads[i] +">" + myLeads[i] + "</a></li>"
  listItems += ` 
 <li>
  <a target='_blank' href="${leades[i]}">${leades[i]}
  </a>
 </li>
 `

 }
 ulEl.innerHTML = listItems

}



