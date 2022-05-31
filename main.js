// console.log(customers);
let clientContainer = document.querySelector('.client-container')

customerData = [];
// iterates through data and pulls only what is needed for new array called CustomerData
for(customer of customers){
    customer_box = {};
    customer_box.pic = customer.picture.large;
    customer_box.name = customer.name.first + " " + customer.name.last;
    customer_box.email = customer.email;
    customer_box.addressLine1 = customer.location.street.number + " " + customer.location.street.name;
    customer_box.addressLine2 = customer.location.city + ", " + customer.location.state + ", " + customer.location.postcode
    customer_box.dob = customer.dob.date;
    customer_box.registered = customer.registered.date;
    customerData.push(customer_box)
}
console.log(customerData)


for(customer of customerData){
    let clientBox = document.createElement("div")
    clientContainer.appendChild(clientBox)
    clientBox.classList.add('client-box')

    //client IMG
    let clientIMG = document.createElement("img")
    clientIMG.src = customer.pic;
    clientIMG.classList.add('client-profile')
    clientBox.appendChild(clientIMG)
    //client Name
    let clientName = document.createElement("h3")
    clientName.classList.add('client-name')
    clientName.appendChild(document.createTextNode(customer['name']))
    clientBox.appendChild(clientName)
    //Client Email
    let clientEmail = document.createElement("div")
    clientEmail.classList.add('client-email')
    clientEmail.appendChild(document.createTextNode(customer['email']))
    clientBox.appendChild(clientEmail)
    //Client Address Line 1
    let clientAddressLine1 = document.createElement("div")
    clientAddressLine1.appendChild(document.createTextNode(customer['addressLine1']))
    clientBox.appendChild(clientAddressLine1)
    //Client Address Line 2
    let clientAddressLine2 = document.createElement("div")
    clientAddressLine2.appendChild(document.createTextNode(customer['addressLine2']))
    clientBox.appendChild(clientAddressLine2)
    //Client DOB
    let clientdob = document.createElement("div")
    clientdob.appendChild(document.createTextNode("DOB: " + customer['dob']))
    clientBox.appendChild(clientdob)
    //Client registration
    let clientregistered = document.createElement("div")
    clientregistered.appendChild(document.createTextNode("Customer Since: "+ customer['registered']))
    clientBox.appendChild(clientregistered)
}