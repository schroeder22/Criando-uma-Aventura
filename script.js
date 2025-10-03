const avanca = document.querySelctorALL('.btn-proximo');

avanca.foreach(button => {
button.addEvntListener('click', function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getATTribute('data-proximo');

atual.classList.remove('ativo');
document.getElementById(proximoPasso).classList.add('ativo');
  })
})