


// begin code for add todo
// 1. selection element

const btn = document.querySelector('.btn-data');

    
 // 2.selection todo-item (todo-item is  class name of container)
let container = document.querySelector('.todo-item');


// let item = document.getElementsByClassName('item');
// let count = document.querySelector('.count');

// 3.add event for btn
btn.addEventListener('click', function(e){

    //4. selection input
    let input_data = document.querySelector('.input-data').value;
    
    // 5.cek input data is empty or not
    if(input_data === ''){
        alert('please input what you want to do');
    }
    // 6.if  not empty
   else{
                // 7.create element

            let el = ` <div class="item">
                        <p>${input_data}</p>
                        <button class="btn-delete" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i class="fa-solid fa-trash"></i>
                        </button>

                        
                    </div>` 
        
        // 7.append element to todo-item
        container.innerHTML += el;
        
         // 8.add fitur count task
        let item = document.getElementsByClassName('item');
         let count = document.querySelector('.count');
         count.textContent = item.length + ' task';
        if(item.length > 1){
            count.textContent = item.length + ' tasks';
        }

        let button_modal = document.querySelector('.delete-modal-button')
    


        // 9.add fitur delete task
    container.addEventListener('click', function(e){
        if(e.target.className === 'btn-delete' ){
            // 10.add animate delete
           button_modal.addEventListener('click',function(){
          
            setTimeout(() => {
                e.target.parentElement.classList.add('item-delete')
            }, 400);
            setTimeout(() => {
                e.target.parentElement.remove();
                count.textContent = item.length + ' tasks';
                if(item.length < 2){
                    count.textContent = item.length + ' task';
                }
              }, 1000);
           })

    
        }
     
           
        })
    
   }

 
    
   

});
