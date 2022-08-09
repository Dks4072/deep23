function inititate(){
    var saveButton= document.getElementById('save');
    var retrieveButton= document.getElementById('retrieve');
    var deleteButton= document.getElementById('delete');
    var clearButton= document.getElementById('clear');

    saveButton.addEventListener('click', saveItem);
    retrieveButton.addEventListener('click', retrieveItem);
    deleteButton.addEventListener('click', deleteItem);
    clearButton.addEventListener('click', clearItem);
}

function saveItem(){
    var key=document.getElementById('key').value;
    var value=document.getElementById('value').value;
    sessionStorage[key]=value;
}

function retrieveItem(){
    var data=document.getElementById('data');
    var value=document.getElementById('value').value;
    var value=sessionStorage[key];
    data.innerHTML='<div>' + key + ":" + value + '<div>';
}