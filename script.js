// Variables de Estado
let currentQuestions = [];
let userAnswers = {}; // Guardará { idPregunta: indiceOpcionElegida }
let currentQuestionIndex = 0;

// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-fill');

// Event Listeners
startBtn.addEventListener('click', startExam);
nextBtn.addEventListener('click', () => navigateQuestion(1));
finishBtn.addEventListener('click', finishExam);

// Función: Iniciar Examen
function startExam() {
    // 1. Seleccionar 20 preguntas aleatorias
    // Usamos spread operator [...] para no modificar el array original
    currentQuestions = [...questionBank]
        .sort(() => Math.random() - 0.5) // Mezclar
        .slice(0, 20); // Tomar las primeras 20 (o menos si hay menos en la base)

    // 2. Resetear variables
    userAnswers = {};
    currentQuestionIndex = 0;

    // 3. Cambiar Pantalla
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');

    // Ocultar el encabezado (Hero Section) para limpiar la vista
    document.querySelector('.hero-section').classList.add('hidden');

    // 4. Mostrar primera pregunta
    showQuestion();
}

// Función: Mostrar Pregunta Actual
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    // Actualizar textos
    questionText.textContent = question.question;
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;

    // Actualizar barra de progreso
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Limpiar opciones anteriores
    optionsContainer.innerHTML = '';

    // Generar botones de opciones
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn option-btn';
        btn.textContent = option;

        // Si ya había respondido esta pregunta (al volver atrás), marcar la seleccionada
        if (userAnswers[question.id] === index) {
            btn.classList.add('selected');
        }

        btn.onclick = () => selectOption(question.id, index);
        optionsContainer.appendChild(btn);
    });

    updateNavigationButtons();
}

// Función: Seleccionar Opción
function selectOption(questionId, optionIndex) {
    // Guardar respuesta
    userAnswers[questionId] = optionIndex;

    // Actualizar UI (clase selected)
    const buttons = optionsContainer.children;
    for (let btn of buttons) {
        btn.classList.remove('selected');
    }
    buttons[optionIndex].classList.add('selected');

    // Habilitar botón siguiente o finalizar
    updateNavigationButtons();
}

// Función: Controlar Botones Siguiente/Finalizar
function updateNavigationButtons() {
    const currentQ = currentQuestions[currentQuestionIndex];
    const hasAnswered = userAnswers.hasOwnProperty(currentQ.id);

    if (currentQuestionIndex === currentQuestions.length - 1) {
        // Última pregunta
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
        finishBtn.disabled = !hasAnswered;
    } else {
        // Preguntas intermedias
        finishBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        nextBtn.disabled = !hasAnswered;
    }
}

// Función: Navegar
function navigateQuestion(direction) {
    currentQuestionIndex += direction;
    showQuestion();
}

// Función: Finalizar y Corregir
function finishExam() {
    let score = 0;
    const detailedResultsContainer = document.getElementById('detailed-results');
    detailedResultsContainer.innerHTML = ''; // Limpiar previos

    // Calcular puntaje y generar HTML de revisión
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[question.id];
        const isCorrect = userAnswer === question.answer;

        if (isCorrect) score++;

        // Crear tarjeta de revisión
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        reviewItem.innerHTML = `
            <strong>${index + 1}. ${question.question}</strong>
            <div style="margin-top: 5px;">
                <span style="color: ${isCorrect ? 'green' : 'red'}">
                    Tu respuesta: ${question.options[userAnswer]} 
                    ${isCorrect ? '✅' : '❌'}
                </span>
            </div>
            ${!isCorrect ? `
                <div style="margin-top: 5px; color: green;">
                    Respuesta correcta: <strong>${question.options[question.answer]}</strong>
                </div>
            ` : ''}
            <div class="explanation">
                📝 ${question.explanation}
            </div>
        `;
        detailedResultsContainer.appendChild(reviewItem);
    });

    // Mostrar pantalla resultados
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');

    // Actualizar puntaje visual
    const finalPercentage = Math.round((score / currentQuestions.length) * 100);
    document.getElementById('final-score').textContent = finalPercentage;

    const resultMessage = document.getElementById('result-message');
    if (finalPercentage >= 80) {
        resultMessage.textContent = "¡Excelente! Estás aprobado/a.";
        resultMessage.style.color = "var(--success)";
    } else {
        resultMessage.textContent = "Necesitas repasar un poco más.";
        resultMessage.style.color = "var(--error)";
    }
}
