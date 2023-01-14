// delgets tei ajillah controller 
var uiController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        addBtn : ".add__btn"
    };

    return{
        getInput : function(){
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDomstrings : function(){
            return DOMstrings;
        }
    };
})();

//Sanhvvtei ajillah controller 
var financeController = (function(){
    var Income = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
      };
      
      var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
      };
      
      var data = {
        allItems : {
            inc: [],
            exp: []
        },

        totals: {
            inc: 0,
            exp: 0
        }
      }
     
})();

//Programiin holbogch controller
var appController = (function(uiController, financeController ){

    var ctrlAddItem = function(){
     //1.oruulah ogogldiig delgetsees old awna.
    console.log(uiController.getInput());

    //2. Olj awsan ogogdlvvdee sanhvvgiin controller damjuulj tend hadgalna
    //3. Olj awsna ogogdlvvdee web deeree tohiroh hesgvvddeer gargana.
    //4. toswiig tootsoolno
    //5. Etssiin vldegdel, tootsoog delgetsend gargana.
    }

    var setupEventListeners = function(){
        
        var DOM = uiController.getDomstrings();

        document.querySelector(DOM.addBtn).addEventListener('click', function(){
            ctrlAddItem();
        });

        document.addEventListener('keypress', function(event){
            if(event.key === 13 || event.which === 13){ 
                ctrlAddItem();
            }
        });
    }

    return {
        init : function() {
            console.log('Application started....');
            setupEventListeners();
        }
    }

})(uiController, financeController);


appController.init();