// delgets tei ajillah controller 
var uiController = (function(){
 
})();

//Sanhvvtei ajillah controller 
var financeController = (function(){})();

//Programiin holbogch controller
var appController = (function(uiController, financeController ){
    var ctrlAddItem = function(){
     //1.oruulah ogogldiig delgetsees old awna.
    console.log("Delgetsees ugugdluu awah heseg");
    //2. Olj awsan ogogdlvvdee sanhvvgiin controller damjuulj tend hadgalna
    //3. Olj awsna ogogdlvvdee web deeree tohiroh hesgvvddeer gargana.
    //4. toswiig tootsoolno
    //5. Etssiin vldegdel, tootsoog delgetsend gargana.
    }


  document.querySelector('.add__btn').addEventListener('click', function(){
    ctrlAddItem();
  });

  document.addEventListener('keypress', function(){
    if(event.key === 13) ctrlAddItem();
  });
})(
    uiController, 
    financeController
);
