// business logic
function ToDoList(task){
  this.task = task;
  this.toDoItems = [];
}







// user interface logic
$(document).ready(function(){

  $('#add-list').click(function(){
    $('#new-todo').append('<div class="new-todo">' +
                            '<div class="form-group">' +
                              '<label for="input-task">Enter Item To Do:</label>' +
                              '<input type="text" class="form-control todo-list">' +
                            '</div>' +
                          '</div>');
  });

  $('#task-form').submit(function(event){
    event.preventDefault();
debugger;
    var taskInput = $('input#input-task').val();
    var newTask = new ToDoList(taskInput);

    $('.new-todo').each(function(){
      var listItem = $(this).find('input.todo-list').val();
      newTask.toDoItems.push(listItem);
    });

    $('ul#task-list').append('<li><span class="todo-task">' + newTask.task + '</span></li>');
    $('.todo-task').last().click(function(){
      $('#list-area h2').text(newTask.task);
      $('ul#todo-list').text("");
      newTask.toDoItems.forEach(function(listItem){
        $('ul#todo-list').append('<li>' + listItem + '</li>');
      });
    });

    $('#task-form').trigger('reset');
  });



});
