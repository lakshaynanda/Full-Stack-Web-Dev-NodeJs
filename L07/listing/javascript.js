window.onload=function(){
    let newtask=document.getElementById('newtask')
    let addtask=document.getElementById('addtask')
    let todolist=document.getElementById('todolist')

    addtask.onclick=function(){   
        let li=document.createElement('li')

        ///Add the Delete Button
        let xBtn= document.createElement('button')
        xBtn.innerText='ⓧ'
        xBtn.onclick=function(){
            event.target.parentElement.remove()
        }

        //Add the task text
        let taskspan=document.createElement('span')
        taskspan.innerText=newtask.value

        let upBtn=document.createElement('button')
        upBtn.innerText='⬆️'
        upBtn.onclick=function(event){
            //event.target=the up button
            //event.target.parentElement=<li> item

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, //insert this element
                event.target.parentElement.previousElementSibling //Inserted before this element
            )
        }
        let dnBtn=document.createElement('button')
        dnBtn.innerText='⬇️'
        dnBtn.onclick=function(event){
            //event.target=the up button
            //event.target.parentElement=<li> item

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling, //insert next element
                event.target.parentElement //before current element
            )
        }
        

        li.appendChild(xBtn)
        li.appendChild(upBtn)
        li.appendChild(dnBtn)
        li.appendChild(taskspan)
        todolist.appendChild(li)  //good performance, only new items added

        // todolist.innerHTML+=`<li>${newtask.value}</li>` //poor performance, entire list refreshed once new item added
    }
}
