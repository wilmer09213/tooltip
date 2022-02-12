let containers = document.getElementsByClassName("containers");

[].forEach.call(containers, function(container) {

    console.log(container);
    

    container.addEventListener("click", function(e) {
        
        let tooltip = this.getElementsByClassName("tooltip")[0];



        tooltip.classList.toggle("show");


    });

    container.addEventListener("mouseleave", function(e) {
        
        let tooltip = this.getElementsByClassName("tooltip")[0];

  

        if(tooltip.classList.contains("show")) {
            tooltip.classList.toggle("show");
        }

    });
    

})