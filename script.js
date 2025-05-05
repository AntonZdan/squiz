const rederQuestion = document.querySelector('#question');
const firstAnswer = document.querySelector('#firstAnswer');
const secondAnswer = document.querySelector('#secondAnswer');
const thirdAnswer = document.querySelector('#thirdAnswer');
const fourthAnswer = document.querySelector('#fourthAnswer');
const nextQuestion = document.querySelector('#next');
const total = document.querySelector('#totalAnswered');
const divChoose = document.querySelector('.choose');
const nextBtn = document.querySelector('#next');

const klausimai = [
    {
        klausimas: "Ką reiškia HTML?",
        atsakymai: ["HyperText Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language", "Nei vienas iš šių"],
        teisingasAtsakymas: 0
    },
    {
        klausimas: "Kiek spalvu turi Lietuvos veliava?",
        atsakymai: ["Viena", "Dvi", "Trys", "Keturios"],
        teisingasAtsakymas: 2
    },
    {
        klausimas: "Koks parduotuves tinklas turi rauduona kryziuka pavadinime?",
        atsakymai: ["Iki", "Maxima", "Lidl", "Rimi"],
        teisingasAtsakymas: 1
    },
    {
        klausimas: "Kas is isvardytu variantu nera vaisius?",
        atsakymai: ["Obuolys", "Mandarinas", "Bananas", "Pomidoras"],
        teisingasAtsakymas: 3
    }

];

window.addEventListener('load', () => {
    let currentQuestionIndex = 0

    function question() {

        const currentQuestion = klausimai[currentQuestionIndex];
        rederQuestion.textContent = currentQuestion.klausimas;
        firstAnswer.textContent = currentQuestion.atsakymai[0];
        secondAnswer.textContent = currentQuestion.atsakymai[1];
        thirdAnswer.textContent = currentQuestion.atsakymai[2];
        fourthAnswer.textContent = currentQuestion.atsakymai[3];
    }

    question();

    next.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < klausimai.length) {
            question();
            allButtons.forEach(button =>{
                button.style.backgroundColor = '';
            })
        } else {
            divChoose.remove();
            nextBtn.remove();
            rederQuestion.textContent = 'Thank you for your answers!';
        }
        
        
    })

    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.style.backgroundColor === 'green'){
                button.style.backgroundColor = '';
                button.style.padding = '';
            }else{
                button.style.backgroundColor = 'green';
                button.style.padding = '1em';
            }
        })
    })

})

