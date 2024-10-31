const nav= document.getElementById("navbar");


const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})


//sproduct.html page: click on small images for replace with main image :
var mImag=document.getElementById("mainImag");
var sImag=document.getElementsByClassName("small-img-col");
sImag[0].onclick=function(){
  mImag.src=sImag[0].src;
}
sImag[1].onclick=function(){
  mImag.src=sImag[1].src;
}
