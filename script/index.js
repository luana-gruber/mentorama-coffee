function menu(){
    
                const OPEN_BUTTON = document.querySelector('.header-carrinho');
                const CLOSE_BUTTON = document.querySelector('.form-fechar');
                const body = document.querySelector('body');
                const modal = document.querySelector('.modal-form');
    
                const openModal = () =>{
                     modal.showModal();
                };

                const closeModal = () =>{
                    modal.close();
                };
    
                OPEN_BUTTON.addEventListener('click', openModal);
                CLOSE_BUTTON.addEventListener('click', closeModal);
                }