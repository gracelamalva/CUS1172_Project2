document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#new-task').onsubmit = function (){
        const li = document.createElement('li');
        var tasks = [];

        let task_text = document.querySelector('#task-title').value;
        let task_priority = document.querySelector('#task-priority').value;
        let task_status = document.querySelector('task-status').value;

        let new_task_html = ` <span> ${task_text} </span>    <button class = "remove"> Remove </button>`;
        let new_task_priority = ` <span> ${task_priority} </span>`;
        let new_task_status =  `<span> ${task_status} </span>`;

        li.innerHTML = new_task_html;

        //li.innerHTML = document.querySelector('#task').value;

        document.querySelector('#task_list').append(li);
        document.querySelector('#task-title').value = '';

        return false;
    }

 document.addEventListener('click', function(event){
     element = event.target;
     if (element.className === 'remove'){
         element.parentElement.remove();
     }
 })

 });