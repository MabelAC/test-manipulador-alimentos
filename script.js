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
    // 1. Categorizar preguntas
    const categorized = categorizeQuestions(questionBank);

    // 2. Seleccionar 4 de cada categoría
    const selectedQuestions = [
        ...getRandomItems(categorized.temperaturas, 4),
        ...getRandomItems(categorized.etas, 4),
        ...getRandomItems(categorized.higiene, 4),
        ...getRandomItems(categorized.contaminacion, 4),
        ...getRandomItems(categorized.variadas, 4)
    ];

    // 3. Mezclar las 20 preguntas finales para que no salgan en orden por tema
    currentQuestions = shuffleArray(selectedQuestions);

    // 4. Resetear variables
    userAnswers = {};
    currentQuestionIndex = 0;

    // 5. Cambiar Pantalla
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');

    // Ocultar el encabezado (Hero Section)
    document.querySelector('.hero-section').classList.add('hidden');

    // 6. Mostrar primera pregunta
    showQuestion();
}

// Función: Categorizar preguntas automáticamente
function categorizeQuestions(allQuestions) {
    const categories = {
        temperaturas: [],
        etas: [],
        higiene: [],
        contaminacion: [],
        variadas: []
    };

    allQuestions.forEach(q => {
        const text = (q.question + " " + q.explanation).toLowerCase();

        // Palabras clave por tema (Prioridad descendente)
        if (matchesKeywords(text, ["temperatura", "°c", "grados", "congel", "frio", "frío", "calor", "cocción", "cocinar", "zona de peligro", "termómetro", "enfriar", "calentar", "pasteuriz", "liofiliz", "cadena de frío"])) {
            categories.temperaturas.push(q);
        } else if (matchesKeywords(text, ["bacteria", "virus", "enfermedad", "salmonella", "coli", "botulismo", "triquinosis", "listeria", "staphylococcus", "eta", "síndrome", "patógeno", "microorganismo", "parásito", "portador", "vibrio", "hepatitis", "toxina"])) {
            categories.etas.push(q);
        } else if (matchesKeywords(text, ["cruzada", "crudo", "tabla", "separar", "almacenamiento", "guardar", "heladera", "estante", "arriba", "abajo", "tapa", "hermético", "orden", "rotación", "peps", "contaminación directa", "contaminación indirecta"])) {
            categories.contaminacion.push(q);
        } else if (matchesKeywords(text, ["lavado", "manos", "higiene", "limpieza", "jabón", "desinfect", "uniforme", "cabello", "barba", "uñas", "joyas", "reloj", "fumar", "comer", "herida", "guantes", "poes", "basura", "residuos", "plagas", "ratas", "cucarachas", "moscas", "insectos", "detergente", "lavandina", "alcohol", "trapo", "rejilla", "esponja", "barrer", "estornud", "saliva", "baño", "sanitiz", "saneamiento", "agua potable", "tanque"])) {
            categories.higiene.push(q);
        } else {
            categories.variadas.push(q);
        }
    });

    // Fallback: Si alguna categoría no tiene suficientes preguntas (raro con 200), rellenar con variadas
    // (Lógica simplificada: asumimos que hay suficientes dado el volumen)
    console.log("Distribución:", {
        Temp: categories.temperaturas.length,
        ETAs: categories.etas.length,
        Higiene: categories.higiene.length,
        Cruzada: categories.contaminacion.length,
        Variadas: categories.variadas.length
    });

    return categories;
}

function matchesKeywords(text, keywords) {
    return keywords.some(keyword => text.includes(keyword));
}

// Función: Obtener N elementos aleatorios de un array
function getRandomItems(array, count) {
    const shuffled = shuffleArray([...array]);
    return shuffled.slice(0, count);
}

// Función: Mezclar Array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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

// Función: Toggle FAQ Acordeón
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
}

