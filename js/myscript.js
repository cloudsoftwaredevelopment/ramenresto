// Cart functionality
let cart = [];
let currentUserRole = null;

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const checkoutModal = document.getElementById('checkoutModal');
const cancelLogin = document.getElementById('cancelLogin');
const submitLogin = document.getElementById('submitLogin');
const checkoutBtn = document.getElementById('checkoutBtn');
const confirmOrder = document.getElementById('confirmOrder');
const cartItems = document.getElementById('cartItems');
const itemCount = document.getElementById('item-count');
const totalPrice = document.getElementById('total-price');
const orderSummaryItems = document.getElementById('orderSummaryItems');
const summaryTotal = document.getElementById('summaryTotal');
const dashboard = document.getElementById('dashboard');
const roleButtons = document.querySelectorAll('.role-btn');
const addBtns = document.querySelectorAll('.add-btn');
const addonItems = document.querySelectorAll('.addon-item');

// Event Listeners
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

cancelLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

submitLogin.addEventListener('click', () => {
    const selectedRole = document.querySelector('.role-btn.selected');
    if (selectedRole) {
        currentUserRole = selectedRole.dataset.role;
        loginModal.style.display = 'none';
        loginBtn.textContent = `Logout (${currentUserRole})`;

        // Show dashboard based on role
        if (currentUserRole === 'manager' || currentUserRole === 'supervisor') {
            dashboard.style.display = 'grid';
        }
    }
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Please add items to your cart first!');
        return;
    }
    updateOrderSummary();
    checkoutModal.style.display = 'flex';
});

confirmOrder.addEventListener('click', () => {
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;

    if (!mobile || !address) {
        alert('Please fill in all required fields');
        return;
    }

    alert('Order placed successfully! Your ramen is on the way.');
    checkoutModal.style.display = 'none';
    clearCart();
});

// Role selection
roleButtons.forEach(button => {
    button.addEventListener('click', () => {
        roleButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

// Add to cart
addBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        const name = e.target.dataset.name;
        const price = parseFloat(e.target.dataset.price);

        // Check for selected addons
        const selectedAddons = [];
        addonItems.forEach(addon => {
            if (addon.classList.contains('selected')) {
                selectedAddons.push({
                    name: addon.dataset.name,
                    price: parseFloat(addon.dataset.price)
                });
            }
        });

        cart.push({
            name: name,
            price: price,
            addons: selectedAddons
        });

        updateCart();
        clearAddons();
    });
});

// Addon selection
addonItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('selected');
    });
});

// Functions
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price + item.addons.reduce((sum, addon) => sum +
addon.price, 0);
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-addons">${item.addons.map(addon =>
addon.name).join(', ')}</div>
            </div>
            <div class="item-price">$${itemTotal.toFixed(2)}</div>
            <button class="remove-item" data-index="${index}"><i class="fas
fa-times"></i></button>
        `;

        cartItems.appendChild(cartItem);
    });

    itemCount.textContent = `${cart.length} ${cart.length === 1 ? 'item' :
'items'}`;
    totalPrice.textContent = `$${total.toFixed(2)}`;

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            cart.splice(index, 1);
            updateCart();
        });
    });
}

function clearAddons() {
    addonItems.forEach(item => {
        item.classList.remove('selected');
    });
}

function updateOrderSummary() {
    orderSummaryItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price + item.addons.reduce((sum, addon) => sum +
addon.price, 0);
        total += itemTotal;

        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} ${item.addons.length ? `+ ${item.addons.map(a =>
a.name).join(', ')}` : ''}</span>
            <span>$${itemTotal.toFixed(2)}</span>
        `;

        orderSummaryItems.appendChild(summaryItem);
    });

    summaryTotal.textContent = `$${total.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    updateCart();
}

// Initialize
updateCart();
