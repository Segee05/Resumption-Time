
// note for everytime you write a 'new' keyword, ensure that the next word you'd write after it starts with a capital letter(this will make the word turn to green color hence its a method) e.g new Date, new Promise etc.

// In promise, there are three different states: 
// 1. The Resolved or fulfilled state, : this is when what you are trying to access works.
// 2. the Reject state and : this is when it doesn't work.
// 3. the Pending state.: this is the time your site is processing to either give you what you want or give an error message eg 404 error etc. eg that loading time you get when trying to access something on a website- this is pending time.

// let condition = true;

// const newPromise = new Promise((resolve, reject) => {
//     if (condition == true)  {
//         resolve('This was successful');
//     }
//     else  {
//         reject('Sorry, This was not successful');
//     }
// });
// when you run the above function, it will give you the outcome with the promise keyword, state and resolve or reject message but we use the '.then' keyword below and pass a parameter which we now console.log out to give us the resolve/reject message alone without the promise keyword or state displaying as well. 
// .then helps you get the result of your promise.
// .catch help you catch the error of your promise.

// newPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// js for class index.html
let select = document.getElementById('select');
let details = document.getElementById('details');
let timing = 0;

select.onchange = function() {
    // timing = parseInt(this.value);
        // note that 'this' key word only work when you use the normal funtion word and not arrow function.
        // you can use the this or select here.
    timing = parseInt(select.value);
    // PARSEINT turns a stringed number into an integer(unstringed)

    const setMeeting = new Promise((resolve, reject) => {
        let meetingDetails = {
            title: 'Salary Increment',
            time: '9:30am',
            venue: 'Boardroom',
            dressCode: 'Black & White',
        };
        if (timing <= 9) {
            resolve(meetingDetails);
            select.style.display = 'none';
            // OR this.style.display = 'none';
        }
        else{
            select.style.display = 'none';
            // OR this.style.display = 'none';
            reject('Sorry, you are not to attend the meeting because of inappropriate time scheduling');
        }
    });

    setMeeting
    .then((result) => {
        let output = `
            <div>
                <h2>Meeting Details</h2>
                <h3>Title</h3>
                <p>${result.title}</p>
                <h3>Time</h3>
                <p>${result.time}</p>
                <h3>Venue</h3>
                <p>${result.venue}</p>
                <h3>Dresscode</h3>
                <p>${result.dressCode}</p>
            `;
            details.innerHTML = output;
    })
    .catch((error) => {
        details.innerHTML = error;
    });
};


//  GET, POST, PUT, PATCH, DELETE
// CRUD: CREATE(POST), READ(GET), UPDATE(PUT OR PATCH), DELETE(DELETE)

// Fetch API
// tHIS IS FOR PENDING STATE AND IT USES THE FETCH API.
// NOTE THAT FETCH API PROMISES USUALLY USES 2 '.thens'.

const getUsers = fetch('https://jsonplaceholder.typicode.com/users');
getUsers
    .then((resp) => {
        console.log(fetch)
        if (resp.status == 200 || resp.ok == true) {
            return resp.json();
        }
        if (resp.status == 404) {
            console.log('Sorry, could not fetch Data');
        }
        if (resp.status == 500) {
            console.log('Internal Server Error');
        }
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

fetch('https://jsonplaceholder.typicode.com/usersss')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((error) => {
        console.log(error);
    });


console.log('dog')
console.log('fish')
console.log('bat')
setTimeout(() => {
    console.log('ostrich')
}, 2000)
console.log('rat')
console.log('ear')






