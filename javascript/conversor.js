   
   
   const $button = document.querySelector(".btn-converter")
    $button.addEventListener("click", converter())
    
    function converter(){
        const _fontSizeDefault = 16
        let $fontSize = document.querySelector(".getfontsize").value
        let $remvalue = document.querySelector(".getRem").value
    
            if($fontSize == _fontSizeDefault){
                let _calcFontSizeDefault = Number(_fontSizeDefault * $remvalue) 
                let _result = _calcFontSizeDefault
                document.querySelector(".resulttxt").textContent = _result

            }
            else($fontSize != _fontSizeDefault) 
                let _remcalc = Number($fontSize * $remvalue )
                document.querySelector(".resulttxt").textContent = (_remcalc)
        
            
            if($fontSize, $remvalue == 0){
                document.querySelector(".resulttxt").textContent = ("")
            }
        


    

}
