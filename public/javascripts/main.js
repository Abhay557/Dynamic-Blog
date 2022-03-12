document.addEventListener("DOMContentLoaded",()=>{
  let postColumn = document.getElementById("posts"),
  currentColumn = document.getElementById("selected"),
  create = document.getElementById("createButton"),
  update = document.getElementById("updateButton"),
  deleteB = document.getElementById("deleteButton"),
  buttonColumn = document.getElementById("buttons"),
  formDivP = document.getElementById("forms"),
  posty = document.getElementById("sub"),
  formDivU = document.getElementById("id"),
  updatey = document.getElementById("update"),
  delForm = document.getElementById("deleteId"),
  delDiv = document.getElementById("del"),
  delBtn = document.getElementById("delB")

  axios.get("/routes").then((oi)=>{
    oi.data.forEach((e)=>{
      let {id,header,body} = e, newHead = document.createElement("h5"), outlineDiv = document.createElement("div"), newBody = document.createElement("p"), outlineDiv2 = document.createElement("div")
      newHead.innerHTML = `${JSON.stringify(id).split("\"").join("")}: ${JSON.stringify(header).split("\"").join("")}`
      newBody.innerHTML = JSON.stringify(body).split("\"").join("")
      outlineDiv.appendChild(newHead)
      outlineDiv.setAttribute("class","clicky")
      outlineDiv.style.border = "1px solid black"
      postColumn.appendChild(outlineDiv)
      outlineDiv2.setAttribute("class","invisible")
      outlineDiv2.style.border = "1px solid black"
      outlineDiv2.appendChild(newBody)
      buttonColumn.appendChild(outlineDiv2)
    })
  }).then(()=>{
    let clickys = [...document.getElementsByClassName("clicky")]
    let borked = [...document.getElementsByClassName("invisible")]
    for(let i = 0; i<clickys.length; i++){
      clickys[i].addEventListener("click",(e)=>{
        if(!currentColumn.innerHTML){
          borked[i].classList.toggle("invisible")
          currentColumn.appendChild(borked[i])
        }else{
          currentColumn.innerHTML = ""
          borked[i].classList.toggle("invisible")
          currentColumn.appendChild(borked[i])
        }
      })
    }
  })

  create.addEventListener("click",(e)=>{
    formDivP.classList.toggle("invisibleF")
  })

  posty.addEventListener("click",(e)=>{
    e.preventDefault()
    let in1 = document.getElementById("inputH").value,in2 = document.getElementById("inputP").value
    axios.post("/routes",{header:in1,body:in2})
    window.location.href = "/"
  })

  update.addEventListener("click",(e)=>{
    formDivU.classList.toggle("invisibleN")
  })

  updatey.addEventListener("click",(e)=>{
    e.preventDefault()
    let up1=document.getElementById("updateH").value,up2=document.getElementById("updateP").value,upid = document.getElementById("number").value
    axios.patch(`/routes/${Number(upid)}`,{header:up1,body:up2})
    window.location.href = "/"
  })

  deleteB.addEventListener("click",(e)=>{
    delDiv.classList.toggle("invisibleD")
  })

  delBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    axios.delete(`/routes/${Number(delForm.value)}`)
    window.location.href = "/"
  })
})
