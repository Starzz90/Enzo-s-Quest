function Page() {
    window.location.href = "https://starzz90.github.io/More-Achivements-section/";
}
const collapse = document.getElementsByClassName("collapsible")

for(let i = 0; i < collapse.length; i++){
    collapse[i].addEventListener("click", function(){
        this.classList.toggle("activeColl")
        let content = this.nextElementSibling

        if(content.style.display === "block"){
            content.style,display = ''        
        }else{
            content.style.display = "block"
        }
    })
}
