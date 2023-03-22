let CurrentQuestion = 0;
var answer_user = [];

Interface();

function Interface(){
   document.querySelector('.progress--bar').style.width = `${CurrentQuestion * 10}%`
    if(questions[CurrentQuestion])
    {
        let q = questions[CurrentQuestion];
        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'
        document.querySelector('.question').innerHTML = q.question
        let indice = 0;
        document.querySelector('.options').innerHTML = ''
        for(let i of q.options)
        {                     
            document.querySelector('.options').innerHTML +=`<div data-op="${indice}" class="option"><span>${indice+1}</span>${i}</div>`;
            console.log()
            
            indice++;
        }
        document.querySelectorAll('.questionArea .option').forEach(e=>{
            e.addEventListener('click',Verificar)
        })
        
        
        
    }
    else{
        Resposta();
    }
}

function Verificar(e){
        

        if(e.target.getAttribute('data-op') == questions[CurrentQuestion].answer)
        {
            
            answer_user.push(1)
            
        }
        else
        {
            
            answer_user.push(0)
           
        }
        CurrentQuestion++;

        Interface();
}

function Resposta(){
    let soma = 0;
    answer_user.forEach((e)=>{
        soma+=e;
    })
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';
    let texto1 = document.querySelector('.scoreArea .scoreText1')
    let texto2 = document.querySelector('.scoreArea .scoreText2')
    let score = document.querySelector('.scoreArea .scorePct')
    console.log(soma,questions.length /2)
    if(soma > questions.length /2){
        texto1.innerHTML = 'Parabéns!';
       

    }
    else{
        texto1.innerHTML = 'Vamos melhorar né?';     
        score.style.color = 'red'   ;
        
    }
    score.innerHTML = `Acertou ${(soma*100) / questions.length}%!!!`
    texto2.innerHTML = `Você acertou ${soma} e errou ${questions.length - soma}`
    document.querySelector('button').addEventListener('click',()=>{
        CurrentQuestion = 0;
        answer_user = [];
        Interface()
    })
}
