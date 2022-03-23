
const perc5= document.querySelector('.perc5')
const perc10= document.querySelector('.perc10')
const perc15= document.querySelector('.perc15')
const perc25= document.querySelector('.perc25')
const perc50= document.querySelector('.perc50')
const reset= document.querySelector('.reset')
const div1= document.querySelector('.div-1')
const div2= document.querySelector('.div-2')
const style= document.createElement('style')
 function area1func(){
    let txtar=document.querySelector('#area1')
    txtar.addEventListener('keyup',function(){
        lols=parseInt(txtar.value)
        // console.log((lols)+9)
    })
}
area1func()
function custom(){
    let customs=document.querySelector('.custom')
    customs.addEventListener('keyup',function(){
        cust=parseInt(customs.value)
        console.log(cust)
    })
}
custom()
function area2func(){
    let txtar=document.querySelector('#area2')
    txtar.addEventListener('keyup',function(){
        lolss=parseInt(txtar.value)
        if (lolss==0){
            console.log(21)
            style.innerHTML=`
.zero{
    display:block;
    position:relative;
    left:45%;
}
`;
document.head.appendChild(style)
        }else{
            style.innerHTML=`
.zero{
    display:none;
    position:relative;
    left:45%;
}
`;
document.head.appendChild(style)
        }
    })
}
area2func()

const perc5func=()=>{
    const one =Math.round((0.05*lols)*100)/100
    const sol1='$'+ one
    const ones=Math.round((one/lolss)*100)/100
    const sol11= '$'+ones
    div1.textContent=sol1
    div2.textContent=sol11
}
const perc10func=()=>{
    const two=Math.round((0.1*lols)*100)/100
    const sol2= '$'+two
    const twos=Math.round((two/lolss)*100)/100
    const sol22= '$' +twos
    div1.textContent=sol2
    div2.textContent=sol22
}
const perc15func=()=>{
    const three=Math.round((0.15*lols)*100)/100
    const sol3= '$'+three
    const threes=Math.round((three/lolss)*100)/100
    const sol33= '$'+threes
    div1.textContent=sol3
    div2.textContent=sol33
}
const perc25func=()=>{
    const four=Math.round((0.25*lols)*100)/100
    const sol4='$'+ four
    const fours=Math.round((four/lolss)*100)/100
    const sol44= '$'+fours
    div1.textContent=sol4
    div2.textContent=sol44
}
const perc50func=()=>{
    const five=Math.round((0.5*lols)*100)/100
    const sol5='$'+ five
    const fives=Math.round((five/lolss)*100)/100
    const sol55='$'+ fives
    div1.textContent=sol5
    div2.textContent=sol55
}
const customfunc=()=>{
    const six=Math.round(((cust/100)*lols)*100)/100
    const sol6= '$'+six
    const sixs=Math.round((six/lolss)*100)/100
    const sol66= "$"+sixs
    div1.textContent=sol6
    div2.textContent=sol66
}
const resetfunc=()=>{
    div1.textContent="$0.00"
    div2.textContent="$0.00"
    document.getElementById("area1").value=""
    document.getElementById("area2").value=""
    document.querySelector('.custom').value=""
    
}
perc5.addEventListener('click',perc5func)
perc10.addEventListener('click',perc10func)
perc15.addEventListener('click',perc15func)
perc25.addEventListener('click',perc25func)
perc50.addEventListener('click',perc50func)
document.querySelector('.custom').addEventListener('keypress',function(e){
    if (e.key==='Enter'){
        customfunc()
    }
})
reset.addEventListener('click',resetfunc)
