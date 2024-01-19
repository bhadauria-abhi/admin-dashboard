const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const Orders = [
    {
        productName: 'Foldable Mini Drone',
        productNumber: '85631',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'LARVENDER KF102 Drone',
        productNumber: '37859',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'Drone with Camera Drone',
        productNumber: '58589',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Ruko F11 Pro Drone',
        productNumber: '55868',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'GPD 4k Drone',
        productNumber: '48389',
        paymentStatus: 'Paid',
        shipping: 'Declined'
    }
    
    
    ]

// menuBtn
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

// closeBtn
closeBtn.addEventListener('click', () => {
   sideMenu.style.display = 'none'
})


// fill order in table

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                  <td>${order.productName}</td>
                  <td>${order.productNumber}</td>
                   <td>${order.paymentStatus}</td>
                  <td class="${order.shipping === 'Delivered' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                   <td class="primary">Details</td>
                   `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

})

