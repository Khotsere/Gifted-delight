const treat = document.getElementById("treat");
const option = document.getElementById("option");
treat.addEventListener("change", function(){
    option.innerHTML =""; if (treat.value === "cake") {
        option.innerHTML = `
        <option value="" disabled selected>Choose cake size</option>
        <option value="Bento size">Bento size</option>
        <option value="6 inches">6 inches</option> 
        <option value="8 inches">8 inches</option>
        <option value="10 inches">10 inches</option>
        <option value="12 inches">12 inches</option>
        <option value="Others">Others</option>
    `;
    }
    else if (treat.value ==="cupcakes"){
        option.innerHTML=`
        <option value="" disabled selected>Choose quantity</option>
        <option value="Box of 4">Box of 4</option>
        <option value="Box of 6">Box of 6</option>
        <option value="Box of 8">Box of 8</option>
        <option value="Others">Others</option>
        `;
    }
    else if(treat.value ==="doughnuts"){
        option.innerHTML=`
        <option value="" disabled selected>Choose quantity</option>
        <option value="4 doughnuts">4 doughnuts</option>
        <option value="6 doughnuts">6 doughnuts</option>
        <option value="8 doughnuts">8 doughnuts</option>
        <option value="12 doughnuts">12 doughnuts</option>
        <option value="Others">Others</option>
        `;
    }
    else if(treat.value ==="small chops"){
        option.innerHTML=`
        <option value="" disabled selected>Choose quantity</option>
        <option value="Small pack">Small pack</option>
        <option value="Medium pack">Medium pack</option>
        <option value="Large pack">Large pack</option>
        <option value="Others">Others</option>
        `;
    }
    else if(treat.value ==="cinnamon rolls"){
        option.innerHTML=`
        <option value="" disabled selected>Choose quantity</option>
        <option value="2 rolls">2 rolls</option>
        <option value="4 rolls">4 rolls</option>
        <option value="6 rolls">6 rolls</option>
        <option value="8 rolls">8 rolls</option>
        <option value="Others">Others</option>
        `;
    }
});
const orderButton = document.querySelector(".click");
orderButton.addEventListener("click",function(){
    if (treat.value ===""|| option.value === ""){
        alert("Please make your order.");
    }
    else{
        alert("Your order has been received.");
    }
});