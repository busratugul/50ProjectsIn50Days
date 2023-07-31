const buttons = document.querySelectorAll(".ripple")

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        const x = e.clientX
        const y = e.clientY
        //tıkladığımız yerin konumunu verir

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        //buttonun konumu alır, tıkladığımız yerin değil

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        //buttonun içinde nereye tıkladığımızı alırız

        const circle = document.createElement("span")
        circle.classList.add("circle")
        circle.style.top = yInside + "px"
        circle.style.left = xInside + "px"

        this.appendChild(circle)

        setTimeout(() => circle.remove(),500)
    })
})


//this arrow functionla çalışmaz yani (e)=>{} olarak kodlasaydık çalışmazdı mutlaka function tanımlamak gerekiyor 