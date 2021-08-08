let todoText = document.getElementById('todo-text');
let submitButton = document.getElementById('submit-btn');
let todoList = document.getElementById('todo-list');

submitButton.onclick = function() {
	if (todoText.value == "") {
		alert("Please fill out this field");
	} else {
		let todoItem = document.createElement('div');
		let deleteButton = document.createElement('button');
		let editButton = document.createElement('button');
		let stopEditingButton = document.createElement('button');
        let checkbox = document.createElement('input');
        let breakElement = document.createElement('br');
        checkbox.type = "checkbox";
        deleteButton.innerHTML = "Delete";
        editButton.innerHTML = "Edit";
        stopEditingButton.innerHTML = "Stop Editing";
        todoItem.innerHTML = `${todoText.value}`;
        stopEditingButton.style = "border: none;background: darkslateblue;color: white;border-radius: 25px;font-size: 16px;margin-left: 10px;"; 
	    todoItem.style = "padding: 5px 3px 5px 3px; background: white;color: black;width: 600px;margin: auto;text-align: left;";
        deleteButton.style = "border: none;background: tomato;color: white;border-radius: 25px;font-size: 16px;margin-left: 10px;"; 
        editButton.style = "border: none;background: seagreen;color: white;border-radius: 25px;font-size: 16px;margin-left: 10px;"; 
   	    checkbox.style.marginLeft = "50px";
	    checkbox.onclick = function() {
	        if (checkbox.checked == true) {
	        	todoItem.style.textDecoration = "line-through";	        	
	        } else {
	    	    todoItem.style.textDecoration = "none";	        	
	        }
	    }
	    editButton.onclick = function() {
	    	todoItem.setAttribute("contenteditable", "true")
	    	deleteButton.style.display = "none";
	    	editButton.style.display = "none";
	    	checkbox.style.display = "none";
	    	stopEditingButton.style.display = "inline-block";
	        todoList.appendChild(stopEditingButton);	
	    }
	    stopEditingButton.onclick = function() {
	    	stopEditingButton.style.display = "none";
	    	todoItem.removeAttribute("contenteditable", "true")
	    	deleteButton.style.display = "inline-block";
	    	editButton.style.display = "inline-block";
	    	checkbox.style.display = "inline-block";
	    }
	    todoList.appendChild(todoItem);
	    todoItem.append(checkbox);
	    todoItem.append(editButton);
	    todoItem.append(deleteButton);
	    todoList.appendChild(breakElement);
	    deleteButton.onclick = function() {
	    	todoItem.style.display = "none";
	    }
	}
} 