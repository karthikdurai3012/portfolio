function popup(){
    let sidebar= document.getElementById("side")
    sidebar.style.left="0%"
    sidebar.addEventListener("click",()=>{
        sidebar.style.left="110%"
    })
}
let btn= document.getElementById("download_res")
console.log(btn)
btn.addEventListener("click",()=>{
    btn.classList.add("active")

    setTimeout(()=>{
        btn.classList.remove("active")
        document.querySelector(".fa-cloud-arrow-down").classList.replace("fa-cloud-arrow-down","fa-circle-check")
        document.getElementById("download-text").innerText="Completed"

    },6000)
})

let form= document.querySelector("form")

function sendemail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "karthik32@gmail.com",
        Password : "6DA4AB08B0B5513432EE37E0521F157744E7",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}