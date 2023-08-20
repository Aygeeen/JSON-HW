const peoplesBlock = document.querySelector('.peoples-block');

const request = new XMLHttpRequest();
request.open("GET", "data.json");
request.setRequestHeader("Content-type", "application/json");
request.send();

request.addEventListener('load', () => {
    const data = JSON .parse(request.response);
    data.forEach(people => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
                <img class="img" src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" alt="">
                <h3>Name: ${people.name}</h3>
                <span>Age: ${people.age}</span>
            `
        peoplesBlock.appendChild(div);
    })
})

const second = new XMLHttpRequest()
second.open("GET",'second.json')
second.setRequestHeader("Content-type", "application/json")
second.send()
second.addEventListener('load',()=>{
    const final = JSON.parse(second.response)
    console.log(final)
})

