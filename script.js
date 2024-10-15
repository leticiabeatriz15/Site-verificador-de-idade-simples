function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('radsex');
        let idade = ano - fano.value
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let fase = ''

        if(fsex[0].checked){
            gen = 'masculino'

            if(idade >= 0 && idade <= 2){
                fase = 'Bebê'
                document.body.style.background = '#245c3d'
                img.setAttribute('src', 'bebem.jpg')
            }else if(idade > 2 && idade <= 12){
                fase = 'Criança'
                document.body.style.background = '#a68f29'
                img.setAttribute('src', 'crim.jpg')
            }else if(idade > 12 && idade < 18){
                fase = 'Adolescente'
                document.body.style.background = '#cec6cf'
                img.setAttribute('src', 'adom.jpg')
            }else if(idade >= 18 && idade <= 29){
                fase = 'Jovem'
                document.body.style.background = '#050000'
                img.setAttribute('src', 'jovm.jpg')
            }else if(idade > 29 && idade < 60){
                fase = 'Adulto'
                document.body.style.background = '#e3e6d1'
                img.setAttribute('src', 'adum.jpg')
            }else if(idade > 60 && idade < 123){
                fase = 'Idoso'
                document.body.style.background = '#CCC3B4'
                img.setAttribute('src', 'idom.jpg')
            }else{
                fase = 'Um defunto'
                document.body.style.background = '#6b6a65'
                img.setAttribute('src', 'morto.jpg')
            }

        }else{
            gen = 'feminino'

            if(idade >= 0 && idade <= 2){
                fase = 'Bebê'
                document.body.style.background = '#245c3d'
                img.setAttribute('src', 'bebef.jpg')
            }else if(idade > 2 && idade <= 12){
                fase = 'Criança'
                document.body.style.background = '#a68f29'
                img.setAttribute('src', 'criaf.jpg')
            }else if(idade > 12 && idade < 18){
                fase = 'Adolescente'
                document.body.style.background = '#cec6cf'
                img.setAttribute('src', 'adof.jpg')
            }else if(idade >= 18 && idade <= 29){
                fase = 'Jovem'
                document.body.style.background = '#050000'
                img.setAttribute('src', 'jovf.jpg')
            }else if(idade > 29 && idade < 60){
                fase = 'Adulto'
                document.body.style.background = '#e3e6d1'
                img.setAttribute('src', 'aduf.jpg')
            }else if(idade > 60 && idade < 123){
                fase = 'Idoso'
                document.body.style.background = '#CCC3B4'
                img.setAttribute('src', 'idof.jpg')
            }else{
                fase = 'Um defunto'
                document.body.style.background = '#6b6a65'
                img.setAttribute('src', 'morto.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `${fase} do gênero ${gen} com <strong>${idade} anos</strong>.`
        res.appendChild(img)
    }
}

console.log('oi')