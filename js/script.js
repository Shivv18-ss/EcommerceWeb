const laptops = [
    // HP Laptops (5)
    {
        id: 1,
        brand: 'HP',
        name: 'HP EliteBook 745 G3',
        price: 15500,
        ram: '8GB DDR4',
        processor: 'AMD A8 Pro',
        storage: '256GB SSD',
        display: '14" HD IPS',
        graphics: '2gb AMD Radeon Dedicated',
        icon: '🖥️',
        images: [
            'images/HP/Hp EliteBook 745 G3/Hp 745 3 (1).jpeg',
            'images/HP/Hp EliteBook 745 G3/Hp 745 3 (3).jpeg',
            'images/HP/Hp EliteBook 745 G3/Hp 745 3 (2).jpeg',
            
        ],
        specs: '8GB DDR4 | AMD A8 Pro | 256GB SSD | 14" HD IPS | 2gb AMD Radeon Dedicated',
        upgrades: {
            ram: { base: '8GB', options: { '16GB': 3000, '32GB': 8000 } },
            storage: { base: '256GB', options: { '512GB': 5000, '1TB': 10000 } }
        }
    },
    // Dell Laptops (5)
    {
        id: 6,
        brand: 'Dell',
        name: 'Dell Latitude 7390',
        price: 28000,
        ram: '8GB DDR4',
        processor: 'Intel Core i5 8th Gen',
        storage: '256GB NVMe SSD',
        display: '14" 360* Full HD Touch',
        graphics: 'Intel UHD 620',
        icon: '💼',
        images: [
            'images/Dell/Dell Latitude 7390/Dell 2in1 1.jpeg',
            'images/Dell/Dell Latitude 7390/Dell 2in1 2.jpeg',
            'images/Dell/Dell Latitude 7390/Dell 2in1 3.jpeg',
            'images/Dell/Dell Latitude 7390/Dell 2in1 4.jpeg',
            'images/Dell/Dell Latitude 7390/Dell 2in1 5.jpeg',
            'images/Dell/Dell Latitude 7390/Dell 2in1 6.jpeg',
            'images/Dell/Dell Latitude 7390/Dell 2in1.jpeg',
        ],
        specs: '8GB DDR4 | Intel Core i5 8th Gen | 256GB SSD | 14" FHD Touch | Intel Graphics',
        upgrades: {
            ram: { base: '8GB', options: { '16GB': 3000, '32GB': 8000 } },
            storage: { base: '256GB', options: { '512GB': 5000, '1TB': 10000 } }
        }
    },
    {
        id: 7,
        brand: 'Dell',
        name: 'Dell Latitude 5410',
        price: 27000,
        ram: '8GB DDR4',
        processor: 'Intel Core i5 10th Gen',
        storage: '256GB SSD',
        display: '14" Full HD Touch',
        graphics: '4GB Intel UHD 620',
        icon: '💼',
        images: [
            'images/Dell/Dell Latitude 5410/WhatsApp Image 2026-01-05 at 2.00.51 AM (1).jpeg',
            'images/Dell/Dell Latitude 5410/Dell 5410 2.jpeg',
            'images/Dell/Dell Latitude 5410/Dell 5410 1.jpeg',
        ],
        specs: '8GB DDR4 | Intel Core i5 10th Gen | 256GB SSD | 14" FHD Touch | 4 Intel UHD 620',
        upgrades: {
            ram: { base: '8GB', options: { '16GB': 3000, '32GB': 8000 } },
            storage: { base: '256GB', options: { '512GB': 5000, '1TB': 10000 } }
        }
    },
    {
        id: 8,
        brand: 'Dell',
        name: 'Dell Latitude 3410',
        price: 25000,
        ram: '8GB DDR4',
        processor: 'Intel Core i5 10th Gen',
        storage: '256GB SSD',
        display: '14" HD',
        graphics: 'Intel UHD Graphics',
        icon: '💼',
        images: [
            'images/Dell/Dell_Latitude_3410/Dell 3410 1.jpeg',
            'images/Dell/Dell_Latitude_3410/Dell 3410 2.jpeg',
            'images/Dell/Dell_Latitude_3410/Dell 3410 3.jpeg'
        ],
        specs: '8GB DDR4 | Intel Core i5 10th Gen | 256GB SSD | 14" HD | Intel UHD Graphics',
        upgrades: {
            ram: { base: '8GB', options: { '16GB': 3000, '32GB': 8000 } },
            storage: { base: '256GB', options: { '512GB': 5000, '1TB': 10000 } }
        }
    },
    // Lenovo Laptops (5)
    {
        id: 11,
        brand: 'Lenovo',
        name: 'Lenovo ThinkPad L14 G1',
        price: 23000,
        ram: '8GB DDR4',
        processor: 'Intel Core i5 10th Gen',
        storage: '256GB NVMe SSD',
        display: '14" Full HD',
        graphics: 'Intel UHD 620',
        icon: '⚡',
        images: [
            'images/Lenovo/Lenovo ThinkPad L14 G1/lenovo1.jpeg',  // Updated to relative path
            'images/Lenovo/Lenovo ThinkPad L14 G1/lenovo2.jpeg',  // Updated to relative path
            'images/Lenovo/Lenovo ThinkPad L14 G1/lenovo3.jpeg'   // Updated to relative path
        ],
        specs: '8GB DDR4 | Intel Core i5 10th Gen | 256GB SSD | 14" FHD IPS | Intel Graphics',
        upgrades: {
            ram: { base: '8GB', options: { '16GB': 3000, '32GB': 8000 } },
            storage: { base: '256GB', options: { '512GB': 5000, '1TB': 10000 } }
        }
    }
];

let filteredLaptops = [...laptops];
let currentSlides = {};
let modalSlides = {};  // Separate for modal sliders

// Display Products with Image Slider
function displayProducts(productsToShow) {
    const container = document.getElementById('productsContainer');
    
    if (productsToShow.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <h3 style="font-size: 24px; color: #f093fb; margin-bottom: 15px;">😔 No Laptops Found</h3>
                <p style="font-size: 18px; color: #a0a0ff;">Try searching with different keywords or price range.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = productsToShow.map(laptop => {
        // Initialize slide index for this laptop
        if (!currentSlides[laptop.id]) {
            currentSlides[laptop.id] = 0;
        }
        
        const hasImages = laptop.images && laptop.images.length > 0;
        
        return `
            <div class="product-card" onclick="openModal(${laptop.id})">
                ${hasImages ? `
                    <div class="product-image-slider" id="slider-${laptop.id}" onclick="event.stopPropagation()">
                        ${laptop.images.map((img, index) => `
                            <img src="${img}" 
                                 alt="${laptop.name}" 
                                 class="${index === 0 ? 'active' : ''}"
                                 onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'product-image-icon\\'>${laptop.icon}</div>';">
                        `).join('')}
                        
                        ${laptop.images.length > 1 ? `
                            <button class="slider-arrow prev" onclick="changeSlide(${laptop.id}, -1); event.stopPropagation();">❮</button>
                            <button class="slider-arrow next" onclick="changeSlide(${laptop.id}, 1); event.stopPropagation();">❯</button>
                            
                            <div class="slider-dots">
                                ${laptop.images.map((_, index) => `
                                    <span class="slider-dot ${index === 0 ? 'active' : ''}" 
                                          onclick="goToSlide(${laptop.id}, ${index}); event.stopPropagation();"></span>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                ` : `
                    <div class="product-image-icon">${laptop.icon}</div>
                `}
                
                <div class="product-info">
                    <div class="product-brand">${laptop.brand}</div>
                    <h3 class="product-name">${laptop.name}</h3>
                    <p class="product-specs">${laptop.specs}</p>
                    <div class="product-price">₹${laptop.price.toLocaleString()}</div>
                    <button class="buy-btn">🛒 View Details & Buy</button>
                </div>
            </div>
        `;
    }).join('');
}

// Change Slide Function
function changeSlide(laptopId, direction) {
    const laptop = laptops.find(l => l.id === laptopId);
    if (!laptop || !laptop.images || laptop.images.length <= 1) return;
    
    const slider = document.getElementById(`slider-${laptopId}`);
    const images = slider.querySelectorAll('img');
    const dots = slider.querySelectorAll('.slider-dot');
    
    // Remove active class
    images[currentSlides[laptopId]].classList.remove('active');
    dots[currentSlides[laptopId]].classList.remove('active');
    
    // Update index
    currentSlides[laptopId] += direction;
    
    if (currentSlides[laptopId] >= laptop.images.length) {
        currentSlides[laptopId] = 0;
    } else if (currentSlides[laptopId] < 0) {
        currentSlides[laptopId] = laptop.images.length - 1;
    }
    
    // Add active class
    images[currentSlides[laptopId]].classList.add('active');
    dots[currentSlides[laptopId]].classList.add('active');
}

// Go to specific slide
function goToSlide(laptopId, slideIndex) {
    const laptop = laptops.find(l => l.id === laptopId);
    if (!laptop || !laptop.images) return;
    
    const slider = document.getElementById(`slider-${laptopId}`);
    const images = slider.querySelectorAll('img');
    const dots = slider.querySelectorAll('.slider-dot');
    
    // Remove active class
    images[currentSlides[laptopId]].classList.remove('active');
    dots[currentSlides[laptopId]].classList.remove('active');
    
    // Set new index
    currentSlides[laptopId] = slideIndex;
    
    // Add active class
    images[currentSlides[laptopId]].classList.add('active');
    dots[currentSlides[laptopId]].classList.add('active');
}

// Change Slide for Modal
function changeModalSlide(laptopId, direction) {
    const laptop = laptops.find(l => l.id === laptopId);
    if (!laptop || !laptop.images || laptop.images.length <= 1) return;
    
    const slider = document.getElementById(`modal-slider-${laptopId}`);
    const images = slider.querySelectorAll('img');
    const dots = slider.querySelectorAll('.slider-dot');
    
    // Remove active class
    images[modalSlides[laptopId]].classList.remove('active');
    dots[modalSlides[laptopId]].classList.remove('active');
    
    // Update index
    modalSlides[laptopId] += direction;
    
    if (modalSlides[laptopId] >= laptop.images.length) {
        modalSlides[laptopId] = 0;
    } else if (modalSlides[laptopId] < 0) {
        modalSlides[laptopId] = laptop.images.length - 1;
    }
    
    // Add active class
    images[modalSlides[laptopId]].classList.add('active');
    dots[modalSlides[laptopId]].classList.add('active');
}

// Go to specific slide in Modal
function goToModalSlide(laptopId, slideIndex) {
    const laptop = laptops.find(l => l.id === laptopId);
    if (!laptop || !laptop.images) return;
    
    const slider = document.getElementById(`modal-slider-${laptopId}`);
    const images = slider.querySelectorAll('img');
    const dots = slider.querySelectorAll('.slider-dot');
    
    // Remove active class
    images[modalSlides[laptopId]].classList.remove('active');
    dots[modalSlides[laptopId]].classList.remove('active');
    
    // Set new index
    modalSlides[laptopId] = slideIndex;
    
    // Add active class
    images[modalSlides[laptopId]].classList.add('active');
    dots[modalSlides[laptopId]].classList.add('active');
}

// Filter by Brand Function
function filterByBrand(brand) {
    document.querySelectorAll('.brand-card').forEach(card => {
        card.classList.remove('active');
    });
    
    event.target.closest('.brand-card').classList.add('active');
    
    if (brand === 'Acer') {
        openOutOfStockModal('Acer');
        return;
    }
    
    if (brand === 'All') {
        filteredLaptops = [...laptops];
    } else {
        filteredLaptops = laptops.filter(laptop => laptop.brand === brand);
    }
    
    displayProducts(filteredLaptops);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Search Laptops Function
function searchLaptops() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        filteredLaptops = [...laptops];
        displayProducts(filteredLaptops);
        return;
    }
    
    const priceMatch = searchTerm.match(/under\s+(\d+)/);
    const maxPrice = priceMatch ? parseInt(priceMatch[1]) : null;
    
    let brandMatch = null;
    ['hp', 'dell', 'lenovo', 'asus', 'apple', 'macbook'].forEach(brand => {
        if (searchTerm.includes(brand)) {
            brandMatch = brand === 'macbook' ? 'Apple' : brand.charAt(0).toUpperCase() + brand.slice(1);
        }
    });
    
    const isGaming = searchTerm.includes('gaming') || searchTerm.includes('game');
    
    filteredLaptops = laptops.filter(laptop => {
        const matchesPrice = maxPrice ? laptop.price <= maxPrice : true;
        const matchesBrand = brandMatch ? laptop.brand === brandMatch : true;
        const matchesGaming = isGaming ? laptop.name.toLowerCase().includes('gaming') || laptop.graphics.toLowerCase().includes('gtx') || laptop.graphics.toLowerCase().includes('radeon') : true;
        const matchesSearch = laptop.name.toLowerCase().includes(searchTerm) || 
                            laptop.brand.toLowerCase().includes(searchTerm) ||
                            laptop.specs.toLowerCase().includes(searchTerm) ||
                            laptop.processor.toLowerCase().includes(searchTerm);
        
        return matchesPrice && matchesBrand && matchesGaming && (matchesSearch || maxPrice || brandMatch || isGaming);
    });
    
    displayProducts(filteredLaptops);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Enter key support
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchLaptops();
            }
        });
    }
    
    displayProducts(laptops);
});

// Open Product Modal
function openModal(laptopId) {
    const laptop = laptops.find(l => l.id === laptopId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    // Initialize modal slide index
    if (!modalSlides[laptopId]) {
        modalSlides[laptopId] = 0;
    }
    
    const hasImages = laptop.images && laptop.images.length > 0;
    
    modalBody.innerHTML = `
        <div class="modal-product-details">
            ${hasImages ? `
                <div class="product-image-slider" id="modal-slider-${laptopId}" style="width: 100%; height: 400px; margin-bottom: 30px;">
                    ${laptop.images.map((img, index) => `
                        <img src="${img}" 
                             alt="${laptop.name}" 
                             class="${index === 0 ? 'active' : ''}"
                             style="width: 100%; height: 100%; object-fit: cover;"
                             onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'product-image-icon\\' style=\\'font-size: 100px;\\'>${laptop.icon}</div>';">
                    `).join('')}
                    
                    ${laptop.images.length > 1 ? `
                        <button class="slider-arrow prev" onclick="changeModalSlide(${laptopId}, -1); event.stopPropagation();">❮</button>
                        <button class="slider-arrow next" onclick="changeModalSlide(${laptopId}, 1); event.stopPropagation();">❯</button>
                        
                        <div class="slider-dots">
                            ${laptop.images.map((_, index) => `
                                <span class="slider-dot ${index === 0 ? 'active' : ''}" 
                                      onclick="goToModalSlide(${laptopId}, ${index}); event.stopPropagation();"></span>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            ` : `
                <div class="product-image-icon" style="font-size: 100px; text-align: center; margin-bottom: 30px;">${laptop.icon}</div>
            `}
            
            <h2>🎮 ${laptop.name}</h2>
            <p><strong>Brand:</strong> ${laptop.brand}</p>
            <p><strong>Processor:</strong> ${laptop.processor}</p>
            <p><strong>RAM:</strong> <span id="selectedRam">${laptop.ram}</span></p>
                        <p><strong>Storage:</strong> <span id="selectedStorage">${laptop.storage}</span></p>
            <p><strong>Display:</strong> ${laptop.display}</p>
            <p><strong>Graphics:</strong> ${laptop.graphics}</p>
            <div class="price">₹<span id="totalPrice">${laptop.price.toLocaleString()}</span></div>
            
            <div class="quantity-selector">
                <label for="quantity">📦 Select Quantity:</label>
                <input type="number" id="quantity" value="1" min="1" max="10">
            </div>
            
            ${laptop.upgrades ? `
                <div class="upgrade-selector" style="margin: 35px 0;">
                    <h3 style="color: #fff; font-size: 22px; font-weight: 700; margin-bottom: 20px;">🔧 Customize Your Laptop</h3>
                    
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 12px; font-weight: 700; color: #fff; font-size: 18px;">💾 RAM Upgrade:</label>
                        <select id="ramSelect" onchange="updatePrice(${laptopId})" style="width: 100%; padding: 15px; border: 2px solid rgba(138, 43, 226, 0.5); border-radius: 15px; font-size: 18px; background: rgba(10, 14, 39, 0.8); color: #fff; font-weight: 700; transition: all 0.3s;">
                            <option value="${laptop.upgrades.ram.base}" data-price="0">${laptop.upgrades.ram.base} (Base)</option>
                            ${Object.entries(laptop.upgrades.ram.options).map(([ram, price]) => `
                                <option value="${ram}" data-price="${price}">${ram} (+₹${price.toLocaleString()})</option>
                            `).join('')}
                        </select>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 12px; font-weight: 700; color: #fff; font-size: 18px;">💿 Storage Upgrade:</label>
                        <select id="storageSelect" onchange="updatePrice(${laptopId})" style="width: 100%; padding: 15px; border: 2px solid rgba(138, 43, 226, 0.5); border-radius: 15px; font-size: 18px; background: rgba(10, 14, 39, 0.8); color: #fff; font-weight: 700; transition: all 0.3s;">
                            <option value="${laptop.upgrades.storage.base}" data-price="0">${laptop.upgrades.storage.base} (Base)</option>
                            ${Object.entries(laptop.upgrades.storage.options).map(([storage, price]) => `
                                <option value="${storage}" data-price="${price}">${storage} (+₹${price.toLocaleString()})</option>
                            `).join('')}
                        </select>
                    </div>
                </div>
            ` : ''}
            
            <div class="payment-methods">
                <h3>💳 Choose Payment Method:</h3>
                <button class="payment-btn upi-btn" onclick="initiateUPIPayment(${laptopId})">
                    💰 Pay Now with UPI (Google Pay / PhonePe / Paytm)
                </button>
                <button class="payment-btn whatsapp-order-btn" onclick="orderViaWhatsApp(${laptopId})">
                    💬 Order via WhatsApp
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // No auto-slide for modal - user controls it
}

// Update Price Function
function updatePrice(laptopId) {
    const laptop = laptops.find(l => l.id === laptopId);
    const ramSelect = document.getElementById('ramSelect');
    const storageSelect = document.getElementById('storageSelect');
    const selectedRam = document.getElementById('selectedRam');
    const selectedStorage = document.getElementById('selectedStorage');
    const totalPriceElement = document.getElementById('totalPrice');
    
    const ramPrice = parseInt(ramSelect.options[ramSelect.selectedIndex].getAttribute('data-price')) || 0;
    const storagePrice = parseInt(storageSelect.options[storageSelect.selectedIndex].getAttribute('data-price')) || 0;
    
    const totalPrice = laptop.price + ramPrice + storagePrice;
    
    selectedRam.textContent = ramSelect.value;
    selectedStorage.textContent = storageSelect.value;
    totalPriceElement.textContent = totalPrice.toLocaleString();
}

// Close Modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// UPI Payment Function - PROPER WORKING UPI
function initiateUPIPayment(laptopId) {
    const laptop = laptops.find(l => l.id === laptopId);
    const quantity = document.getElementById('quantity').value;
    const ramSelect = document.getElementById('ramSelect');
    const storageSelect = document.getElementById('storageSelect');
    
    const ramPrice = ramSelect ? parseInt(ramSelect.options[ramSelect.selectedIndex].getAttribute('data-price')) || 0 : 0;
    const storagePrice = storageSelect ? parseInt(storageSelect.options[storageSelect.selectedIndex].getAttribute('data-price')) || 0 : 0;
    
    const basePrice = laptop.price + ramPrice + storagePrice;
    const totalPrice = basePrice * quantity;
    
    const selectedRam = ramSelect ? ramSelect.value : laptop.ram;
    const selectedStorage = storageSelect ? storageSelect.value : laptop.storage;
    
    // UPI Payment Link - Works with Google Pay, PhonePe, Paytm, etc.
    const upiId = '9892613897@paytm'; // Change this to your actual UPI ID
    const merchantName = 'VN Computers';
    const transactionNote = `${laptop.name} x${quantity} (${selectedRam}, ${selectedStorage})`;
    
    // Standard UPI Payment URL
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${totalPrice}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
    
    // WhatsApp notification message
    const whatsappMessage = `🔔 *NEW UPI PAYMENT INITIATED*

📱 *Laptop:* ${laptop.name}
🏷️ *Brand:* ${laptop.brand}
⚙️ *Specs:* ${laptop.specs}
💾 *RAM:* ${selectedRam}
💿 *Storage:* ${selectedStorage}
💰 *Base Price per unit:* ₹${basePrice.toLocaleString()}
📦 *Quantity:* ${quantity}
💵 *Total Amount:* ₹${totalPrice.toLocaleString()}

⚡ *Payment Status:* Customer is completing UPI payment now.

✅ Please confirm once payment is received.`;
    
    const whatsappUrl = `https://wa.me/919892613897?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Try to open UPI app first
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isAndroid || isIOS) {
        // Mobile device - open UPI app directly
        window.location.href = upiUrl;
        
        // Send WhatsApp notification after 3 seconds
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 3000);
        
        // Show success message
        setTimeout(() => {
            alert(`✅ Payment Request Sent!\n\nTotal Amount: ₹${totalPrice.toLocaleString()}\n\n📱 Please complete the payment in your UPI app.\n💬 Order details have been sent to VN Computers via WhatsApp.`);
        }, 1000);
    } else {
        // Desktop - show QR code option and send WhatsApp
        alert(`💻 Desktop Detected!\n\n💰 Total Amount: ₹${totalPrice.toLocaleString()}\n\n📱 Please complete payment using:\n\n1️⃣ UPI ID: ${upiId}\n2️⃣ Amount: ₹${totalPrice}\n3️⃣ Note: ${transactionNote}\n\n💬 Opening WhatsApp to send order details...`);
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    }
    
    // Close modal
    closeModal();
}

// WhatsApp Order Function
function orderViaWhatsApp(laptopId) {
    const laptop = laptops.find(l => l.id === laptopId);
    const quantity = document.getElementById('quantity').value;
    const ramSelect = document.getElementById('ramSelect');
    const storageSelect = document.getElementById('storageSelect');
    
    const ramPrice = ramSelect ? parseInt(ramSelect.options[ramSelect.selectedIndex].getAttribute('data-price')) || 0 : 0;
    const storagePrice = storageSelect ? parseInt(storageSelect.options[storageSelect.selectedIndex].getAttribute('data-price')) || 0 : 0;
    
    const basePrice = laptop.price + ramPrice + storagePrice;
    const totalPrice = basePrice * quantity;
    
    const selectedRam = ramSelect ? ramSelect.value : laptop.ram;
    const selectedStorage = storageSelect ? storageSelect.value : laptop.storage;
    
    const message = `👋 *Hi VN Computers!*

I want to buy this laptop:

📱 *Laptop Name:* ${laptop.name}
🏷️ *Brand:* ${laptop.brand}
⚙️ *Full Specs:*
   - Processor: ${laptop.processor}
   - RAM: ${selectedRam}
   - Storage: ${selectedStorage}
   - Display: ${laptop.display}
   - Graphics: ${laptop.graphics}

💰 *Base Price per unit:* ₹${basePrice.toLocaleString()}
📦 *Quantity:* ${quantity}
💵 *Total Amount:* ₹${totalPrice.toLocaleString()}

✅ Please confirm availability and delivery details.

Thank you! 😊`;
    
    const whatsappUrl = `https://wa.me/919892613897?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    closeModal();
}

// Out of Stock Modal
function openOutOfStockModal(brand) {
    const modal = document.getElementById('outOfStockModal');
    document.getElementById('brandName').textContent = brand;
    
    const whatsappBtn = document.getElementById('outOfStockWhatsApp');
    const message = `Hi VN Computers! 👋

I'm interested in *${brand}* laptops.

I noticed they are currently out of stock on your website.

🔔 Please notify me when ${brand} laptops are available.

Looking forward to hearing from you! 😊`;
    
    whatsappBtn.href = `https://wa.me/919892613897?text=${encodeURIComponent(message)}`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Out of Stock Modal
function closeOutOfStockModal() {
    document.getElementById('outOfStockModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const productModal = document.getElementById('productModal');
    const stockModal = document.getElementById('outOfStockModal');
    
    if (event.target === productModal) {
        closeModal();
    }
    if (event.target === stockModal) {
        closeOutOfStockModal();
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});