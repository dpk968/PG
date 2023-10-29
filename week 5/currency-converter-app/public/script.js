document.getElementById('converter-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    let sourceCurrency = document.getElementById('source-currency').value;
    let targetCurrency = document.getElementById('target-currency').value;
    let amount = parseFloat(document.getElementById('amount').value);

    if(isNaN(amount)){
        alert("please enter any amount");
    }else{
        if( sourceCurrency == targetCurrency){
            document.getElementById('result').innerHTML = `Converted Amount: ${amount} ${targetCurrency}`;
        }else{
            let response = await fetch(`/convert?target=${targetCurrency}&amount=${amount}`);
            let data = await response.json();
            document.getElementById('result').innerHTML = `Converted Amount: ${data.convertedAmount} ${targetCurrency}`;
        }
    }

});
