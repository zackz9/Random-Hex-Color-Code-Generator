let btn = document.getElementById('changeColor'),
    text = document.getElementById('color'),

    generator = () => {

        newColor = "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
        console.log(newColor.length);

        if(newColor.length<7){
            generator();
        }
    };

    btn.addEventListener('click', ()=> {

        generator();

        document.body.style.background = newColor;
        btn.style.color = newColor;
        text.innerHTML = newColor;
    });