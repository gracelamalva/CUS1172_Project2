document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#new-task').onsubmit = function (event){
        event.preventDefault();
        const li = document.createElement('li');
        var tasks = [];

        let task_text = document.querySelector('#task-title').value;
        let task_priority = document.querySelector('#task-priority').value;
        let task_status = document.querySelector('task-status').value;

        let new_task_html = ` <span> ${task_text} </span>    <span> ${task_priority} </span> <span> ${task_status} </span>
        
        <button class = "mark-complete"> Mark as Complete </button> <button class = "remove"> Remove </button>`;
        //let new_task_priority = ` <span> ${task_priority} </span>`;
        //let new_task_status =  `<span> ${task_status} </span>`;

        li.innerHTML = new_task_html;

        //li.innerHTML = document.querySelector('#task').value;
        tasks.append(task_text);
        document.querySelector('#task_list').append(li);
        document.querySelector('#task-title').value = '';

        return false;
        
    }

 document.addEventListener('click', function(event){
     element = event.target;
     if (element.className === 'remove'){
         element.parentElement.remove();
         tasks.remove(element);
     }
     if (element.className === 'complete'){
         element.task_status = "complete";
     }
 })

 document.querySelector('#mark-complete').onclick = function() {
    document.querySelector('#task-title').strike();
}

 });