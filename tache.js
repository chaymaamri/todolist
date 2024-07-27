 document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#itemList li').forEach(li => {
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
    });
});
   const AjouterTache = () => {
    let inputItem = document.getElementById("tache");
    let inputItemValue = inputItem.value;
    let error = document.querySelector('.error');

    if (inputItemValue != '') {

    ///preparation new item element html li 
    let newItem = document.createElement('li')
    newItem.textContent = `${inputItemValue}`;
    let itemList = document.getElementById('itemList')
    itemList.appendChild(newItem);
 
    /// nouveaux li 
    newItem.classList.toggle('list-group-item')

    newItem.addEventListener('click', function() {
    newItem.classList.toggle('completed')
    })

    //element 
        inputItem.value = '';
        error.innerHTML = '';
        
    } else {
        error.innerHTML = "<span style='color:red'> Ajouter une tache !</span>"
    }

}


