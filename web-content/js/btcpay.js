function handlePlusMinus(event) {
    event.preventDefault();
    const root = event.target.closest('.btcpay-form');
    const el = root.querySelector('.btcpay-input-price');
    const step = parseInt(event.target.dataset.step) || 1;
    const min = parseInt(event.target.dataset.min) || 1;
    const max = parseInt(event.target.dataset.max);
    const type = event.target.dataset.type;
    const price = parseInt(el.value) || min;
    if (type === '-') {
        el.value = price - step < min ? min : price - step;
    } else if (type === '+') {
        el.value = price + step > max ? max : price + step;
    }
}

function handlePriceInput(event) {
    event.preventDefault();
    const root = event.target.closest('.btcpay-form');
    const price = parseInt(event.target.dataset.price);
    if (isNaN(event.target.value)) root.querySelector('.btcpay-input-price').value = price;
    const min = parseInt(event.target.getAttribute('min')) || 1;
    const max = parseInt(event.target.getAttribute('max'));
    if (event.target.value < min) {
        event.target.value = min;
    } else if (event.target.value > max) { 
        event.target.value = max;
    }
}