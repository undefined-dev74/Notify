const mainController = (function(){
    return {
        DOMElements: {
            settings : document.querySelector('#settings'),
            notifications: document.querySelector('#notifications'),
            userPanel: document.querySelector('#userpanel')
        }
    }
})();


const UIController = (function(){

})();


const AppController = (function(mainCtrl, UIctrl){
    mainController.DOMElements.settings.addEventListener('click',hello);

    function hello(){
        console.log('hey.....')
    }
     return {

     }

})(mainController, UIController);