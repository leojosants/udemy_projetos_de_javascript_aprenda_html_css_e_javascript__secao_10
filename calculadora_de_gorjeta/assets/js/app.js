/* select elements */
const calculateButton = document.querySelector('[data_calculate_btn]');

/* functions */
function calculateTip() {
    const billAmount = parseFloat(document.querySelector('[data_bill_Amount]').value);
    const serviceQuality = parseFloat(document.querySelector('[data_service_quality]').value);

    if (isNaN(billAmount)) {
        alert('Por favor, preencha os dados.');
        return;
    }

    const tipAmount = billAmount * serviceQuality;
    const totalAmount = billAmount + tipAmount;
    const tipAmountInput = document.querySelector('[data_tip_Amount]');
    const totalAmountInput = document.querySelector('[data_total_Amount]');

    tipAmountInput.value = tipAmount.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    totalAmountInput.value = totalAmount.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
};

/* events */
calculateButton.addEventListener('click', calculateTip);