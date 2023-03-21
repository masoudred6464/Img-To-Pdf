let input = document.querySelector('.upload-img input');
let button = document.querySelector('button');
let img;
console.log(input);
input.addEventListener('change', (event)=>{
    // console.log(event.target.files[0].name);

    console.log( URL.createObjectURL(event.target.files[0]));
    img = document.querySelector('.image img')
    img.src = URL.createObjectURL(event.target.files[0]);

    img.addEventListener('load', ()=>{
        URL.revokeObjectURL(img.src)
    })
})

button.addEventListener('click',()=>{
    if(img){

        const doc = new jsPDF();
        doc.addImage(img, 10,10,100,100)
        doc.save('ImgToPdf.pdf')
    }
});