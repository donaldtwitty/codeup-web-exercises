const refreshBtn = document.getElementById('refresh-btn');

refreshBtn.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'inventory.json');
    xhr.onload = function() {
        if(xhr.status === 200) {
            const inventory = JSON.parse(xhr.responseText);
            // process the inventory data here
        } else {
            console.log('Error loading inventory.json');
        }
    }
    xhr.send();
});

$(document).ready(function() {
    $.get("inventory.json", function(data) {
        // loop through the JSON data and append each tool to the table
        $.each(data, function(index, tool) {
            const row = $("<tr>");
            $("<td>").text(tool.title).appendTo(row);
            $("<td>").text(tool.quantity).appendTo(row);
            $("<td>").text(tool.price).appendTo(row);
            row.appendTo("#tool-table tbody");
        });
    })
        .done(function() {
            console.log("Tools loaded successfully.");
        })
        .fail(function() {
            console.log("Error loading tools.");
        });
});

const xhr = new XMLHttpRequest();
xhr.open('GET', 'inventory.json');
xhr.onload = function() {
    if(xhr.status === 200) {
        const inventory = JSON.parse(xhr.responseText);
        console.log(inventory);
        // check the contents of the object in the browser's console
        const productsTable = document.getElementById('insertProducts');
        // loop through the inventory data and append each product to the table
        for(let i = 0; i < inventory.length; i++) {
            const product = inventory[i];
            const row = document.createElement('tr');
            const nameCol = document.createElement('td');
            const descCol = document.createElement('td');
            const priceCol = document.createElement('td');
            nameCol.textContent = product.title;
            descCol.textContent = product.quantity;
            priceCol.textContent = product.price;
            row.appendChild(nameCol);
            row.appendChild(descCol);
            row.appendChild(priceCol);
            productsTable.appendChild(row);
        }
    } else {
        console.log('Error loading inventory.json');
    }
};
xhr.send();