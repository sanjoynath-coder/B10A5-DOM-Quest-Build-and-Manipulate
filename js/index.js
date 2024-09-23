// add event handler into the blog button
const blog = document.getElementById('blog');
blog.addEventListener('click', function(){
    window.location.href = '/blog.html'
})

// add event handler into the fisrt card donate button
const donateNow = document.getElementById('donate-noakhali');
donateNow.addEventListener('click', function(){

    // get the value of input fild
    const donateAmmount = parseFloat(document.getElementById('donate-ammout').value)
    

    // active the card balance button by event handler
    const balance = parseFloat(document.getElementById('balance').innerText);
    
    const mainBalance = parseFloat(document.getElementById('account-balance').innerText);

    const accountBalance = mainBalance - balance;
    document.getElementById('account-balance').innerText = accountBalance;

    console.log(accountBalance);
    
    
    
    // set the value into the card top button
    const totalDonation = balance + donateAmmount;
    document.getElementById('balance').innerText = totalDonation;
  
    

    // srt the input value into the card top button

    
})
