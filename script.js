let navBtn = document.querySelectorAll('.navBtn');
let navBtnDiv = document.querySelector('.toggle-menu');

function fetchFunction(option) {
    fetch('data.json')
    .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(var i = 0; i < data.length; i++) {
        let currentTime = data[i]['timeframes'][option]['current'];
        let previousTime = data[i]['timeframes'][option]['previous'];

        let timePeriod;
        if (option == 'daily') {
            timePeriod = 'day';
        } else if (option == 'weekly') {
            timePeriod = 'week';
        } else {
            timePeriod = 'month';
        }
        
        document.querySelectorAll('.current')[i].innerText = currentTime + 'hrs';
        document.querySelectorAll('.previous')[i].innerText = 'Last ' + timePeriod + ' - ' + previousTime + 'hrs';
    }
  })
}

navBtnDiv.addEventListener('click', (e) => {
    e.preventDefault()

   if (e.target.classList.contains('navBtn')) {
       if(e.target.classList.value == 'navBtn') {
           for (btn of navBtn) {
               if (btn.classList.value == 'navBtn active') {
                   btn.classList.remove('active');
               }
           }
           let option = e.target.innerText;
           option = option.toLowerCase();
           e.target.classList.add('active');
           fetchFunction(option);
       }
    }
})