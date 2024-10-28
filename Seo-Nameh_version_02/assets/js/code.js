

const menu           = document.getElementById('bars')
const icon_bars      = document.getElementById("icon_bars")
 
const paper          = document.getElementsByClassName('paper')
const madar          = document.getElementsByClassName('madar')
const black_paper    = document.getElementsByClassName('black-space')
const top_part       = document.getElementsByClassName('top_part')
const left           = document.getElementsByClassName('left')
const right          = document.getElementsByClassName('right')
const bottom         = document.getElementsByClassName('bottom')
const services       = document.getElementById('services')
const serviceElement = document.querySelector('.service' )
const serviceElement1= document.querySelector('.service1')
const serviceElement2= document.querySelector('.service2')
const serviceElement3= document.querySelector('.service3')
const modal_btn  = document.getElementById('modal_btn')
const modal_btn1 = document.getElementById('modal_btn1')
const modal_btn2 = document.getElementById('modal_btn2')
const modal_btn3 = document.getElementById('modal_btn3')
const modal_service  = document.querySelector('.modal_service')
const modal_service1 = document.querySelector('.modal_service')
const modal_service2 = document.querySelector('.modal_service')
const modal_service3 = document.querySelector('.modal_service')


        modal_btn.addEventListener("click",function(){
            document.body.classList.add("remove-scrolling"); 
            modal_service.style.display="inline"
        })
        modal_service.addEventListener("click",function(){
            modal_service.style.display="none"
            document.body.classList.remove("remove-scrolling"); 
        })
        modal_btn1.addEventListener("click",function(){
            document.body.classList.add("remove-scrolling"); 
            modal_service1.style.display="inline"
        })
        modal_service1.addEventListener("click",function(){
            modal_service1.style.display="none"
            document.body.classList.remove("remove-scrolling"); 
        })
        modal_btn2.addEventListener("click",function(){
            document.body.classList.add("remove-scrolling"); 
            modal_service2.style.display="inline"
        })
        modal_service2.addEventListener("click",function(){
            modal_service2.style.display="none"
            document.body.classList.remove("remove-scrolling"); 
        })
        modal_btn3.addEventListener("click",function(){
            document.body.classList.add("remove-scrolling"); 
            modal_service3.style.display="inline"
        })
        modal_service3.addEventListener("click",function(){
            modal_service3.style.display="none"
            document.body.classList.remove("remove-scrolling"); 
        })



        serviceElement.addEventListener("mouseover", function(){
            let   deg = 0 ;

            top_part[0].classList.add('top_changed')
            left[0].classList.add("left_changed");
            right[0].classList.add("right_changed");
            bottom[0].classList.add("bottom_changed");
            black_paper[0].classList.add("black-spaces_changed");
            paper[0].classList.add("paper_changed");
            top_part[0].style.zIndex=-1
        deg=deg+180;
        setTimeout(() => {
            paper[0].style.zIndex=1
            left[0].style.zIndex=2
            right[0].style.zIndex=2
            bottom[0].style.zIndex=2
            black_paper[0].style.zIndex=2
        }, 1000);
        setTimeout(() => {
            paper[0].style.transform = 'rotateX('+deg+'deg)';
        }, 100);
        deg=360;
        })
        serviceElement.addEventListener("mouseleave",function(){
            let   deg = 0 ;
            paper[0].style.zIndex=1
            setTimeout(() => {
                top_part[0].classList.remove("top_changed");
                left[0].classList.remove("left_changed");
                right[0].classList.remove("right_changed");
                bottom[0].classList.remove("bottom_changed");
                black_paper[0].classList.remove("black-spaces_changed");
                paper[0].classList.remove("paper_changed"); 
            }, 100);
           
            deg= deg-180;
            setTimeout(()=>{
                top_part[0].style.zIndex=5
                paper[0].style.transform = 'rotateX('+deg+'deg)'
            },100);
            deg=180;
        })

        serviceElement1.addEventListener("mouseover", function(){
            let   deg = 0 ;

            top_part[1].classList.add('top_changed')
            left[1].classList.add("left_changed");
            right[1].classList.add("right_changed");
            bottom[1].classList.add("bottom_changed");
            black_paper[1].classList.add("black-spaces_changed");
            paper[1].classList.add("paper_changed");
            top_part[1].style.zIndex=-1
        deg=deg+180;
        setTimeout(() => {
            paper[1].style.zIndex=1
            left[1].style.zIndex=2
            right[1].style.zIndex=2
            bottom[1].style.zIndex=2
            black_paper[1].style.zIndex=2
        }, 1000);
        setTimeout(() => {
            paper[1].style.transform = 'rotateX('+deg+'deg)';
        }, 100);
        deg=360;
        

        })
        serviceElement1.addEventListener("mouseleave",function(){
            let   deg = 0 ;

            top_part[1].classList.remove("top_changed");
            left[1].classList.remove("left_changed");
            right[1].classList.remove("right_changed");
            bottom[1].classList.remove("bottom_changed");
            black_paper[1].classList.remove("black-spaces_changed");
            paper[1].classList.remove("paper_changed"); 
            paper[1].style.zIndex=1
            deg= deg-180;
            setTimeout(()=>{
                top_part[1].style.zIndex=5
                paper[1].style.transform = 'rotateX('+deg+'deg)'
            },100)
            deg=180;
        })

        serviceElement2.addEventListener("mouseover", function(){
            let   deg = 0 ;

            top_part[2].classList.add('top_changed')
            left[2].classList.add("left_changed");
            right[2].classList.add("right_changed");
            bottom[2].classList.add("bottom_changed");
            black_paper[2].classList.add("black-spaces_changed");
            paper[2].classList.add("paper_changed");
            top_part[2].style.zIndex=-1
            console.log(top_part)
        deg=deg+180;
        setTimeout(() => {
            paper[2].style.zIndex=1
            left[2].style.zIndex=2
            right[2].style.zIndex=2
            bottom[2].style.zIndex=2
            black_paper[2].style.zIndex=2
        }, 1000);
        setTimeout(() => {
            paper[2].style.transform = 'rotateX('+deg+'deg)';
        }, 100);
        deg=360;
        

        })
        serviceElement2.addEventListener("mouseleave",function(){
            let   deg = 0 ;

            top_part[2].classList.remove("top_changed");
            left[2].classList.remove("left_changed");
            right[2].classList.remove("right_changed");
            bottom[2].classList.remove("bottom_changed");
            black_paper[2].classList.remove("black-spaces_changed");
            paper[2].classList.remove("paper_changed"); 
            paper[2].style.zIndex=1
            deg= deg-180;
            setTimeout(()=>{
                top_part[2].style.zIndex=5
                paper[2].style.transform = 'rotateX('+deg+'deg)'
            },100)
            deg=180;
        })

        serviceElement3.addEventListener("mouseover", function(){
            let   deg = 0 ;

            top_part[3].classList.add('top_changed')
            left[3].classList.add("left_changed");
            right[3].classList.add("right_changed");
            bottom[3].classList.add("bottom_changed");
            black_paper[3].classList.add("black-spaces_changed");
            paper[3].classList.add("paper_changed");
            top_part[3].style.zIndex=-1
            console.log(top_part)
        deg=deg+180;
        setTimeout(() => {
            paper[3].style.zIndex=1
            left[3].style.zIndex=2
            right[3].style.zIndex=2
            bottom[3].style.zIndex=2
            black_paper[3].style.zIndex=2
        }, 1000);
        setTimeout(() => {
            paper[3].style.transform = 'rotateX('+deg+'deg)';
        }, 100);
        
        deg=360;
        

        })
        serviceElement3.addEventListener("mouseleave",function(){
            let   deg = 0 ;

            top_part[3].classList.remove("top_changed");
            left[3].classList.remove("left_changed");
            right[3].classList.remove("right_changed");
            bottom[3].classList.remove("bottom_changed");
            black_paper[3].classList.remove("black-spaces_changed");
            paper[3].classList.remove("paper_changed"); 
            paper[3].style.zIndex=1
            deg= deg-180;
            setTimeout(()=>{
                top_part[3].style.zIndex=5
                paper[3].style.transform = 'rotateX('+deg+'deg)'
            },100)
            deg=180;
        })

        menu.addEventListener("mouseover",function(){
        
            icon_bars.style.opacity=.5
            icon_bars.classList.remove("fa-solid","fa-bars")
            icon_bars.classList.add("fa-solid","fa-arrow-right")
        })
        menu.addEventListener("mouseleave",function(){
            icon_bars.style.opacity=1
            icon_bars.classList.remove("fa-solid","fa-arrow-right")
            icon_bars.classList.add("fa-solid","fa-bars")
        })

