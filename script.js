console.log("this is my first project")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "emali": "sharada@gmail.com",
    "score": 0.64,
    "start": "undeliverable",
    "domain": "invalid_mailbox",
    "mx_found": true,
    "cache_all": null,
    "disposable": false,
    "smtp_cheak": false,
    "did_you_mean": "",
    "format_valid": true
}
submitbtn.addEventListener("click", async(e) => {
    e.preventDefault()
    console.log("clicked")
    let key = "ema_live_8DMemqB5Nt3JXjrJFUNoB7DkQYK9bJXNw03Z6aSY"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res =await fetch(url)
    let result= await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        str = str + `<div>${key}:${result[key]}</div>`

    }
    console.log(str)
    resultcont.innerHTML = str
})


