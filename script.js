function enviar() {
    let dados = document.getElementById("cept").value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+dados+'/json/');
    ajax.send();
    ajax.onload = function () {
        document.getElementById("inf").innerHTML="Suas informações completas: "
        document.getElementById("teste").innerHTML=this.responseText;
        document.getElementById("infex").innerHTML="Informações com filtro:"
        let obj=JSON.parse(this.responseText);
        let cep=obj.cep;
        let logradouro=obj.logradouro;
        let bairro=obj.bairro;
        let localidade=obj.localidade;
        document.getElementById("objinf").innerHTML+=cep+" -"
        document.getElementById("objinf").innerHTML+=logradouro+" -"
        document.getElementById("objinf").innerHTML+=bairro+ " -";
        document.getElementById("objinf").innerHTML+=localidade
        
    }
}





