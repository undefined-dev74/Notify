// Notepad Controller
const appController = (function(){

    return {
        DOMElements: {
            settings : document.querySelector('#settings'),
            notifications: document.querySelector('#notifications'),
            userPanel: document.querySelector('#userpanel'),
            textInput: document.querySelector('.text-input'),
            addbtn: document.querySelector('.addbtn'),
        }
    }
})();

// Edittor App UI controller ,  It will update UserInterface
const UIController = (function(){

    // Public method 

    return {
        inputdata : () => {
            return inputValue = appController.DOMElements.textInput.value;
        }
    }
})();

// Main Controller which handle operation of both modules
const controller = (function(appCtrl, UIctrl){
    
    const ctrlAddItem = () => {
        // 1. Get the field input data
       const input =  UIctrl.inputdata();
        // 2. Add the Items to the Controller 
    
        // 3. Add the New Items to UIController module
        console.log(input);
    }

    appCtrl.DOMElements.addbtn.addEventListener('click', ctrlAddItem)
    appCtrl.DOMElements.textInput.addEventListener('keypress', function(event){
        
        if(event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
    
    function hello(){
        
    }

    return {
     }

})(appController, UIController);