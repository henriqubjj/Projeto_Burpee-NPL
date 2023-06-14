// Captura o elemento do input de texto e a caixa de log do chat
const userInput = document.getElementById('userInput');
const chatlog = document.querySelector('.chatlog');

// Evento de tecla pressionada
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Função para enviar a mensagem do usuário
function sendMessage() {
    // Obtém o texto digitado pelo usuário
    const message = userInput.value;

    // Cria um elemento de parágrafo para exibir a mensagem do usuário
    const userMessage = document.createElement('p');
    userMessage.classList.add('user-message');
    userMessage.textContent = message;

    // Adiciona a mensagem do usuário ao chatlog
    chatlog.appendChild(userMessage);

    // Chame uma função para processar a mensagem e obter a resposta do chatbot
    const botResponse = processMessage(message);

    // Cria um elemento de parágrafo para exibir a resposta do chatbot
    const botMessage = document.createElement('p');
    botMessage.classList.add('bot-message');
    botMessage.textContent = botResponse;

    // Adiciona a resposta do chatbot ao chatlog
    chatlog.appendChild(botMessage);
    
    // Limpa o campo de entrada de texto
    userInput.value = '';
}

// Função para processar a mensagem e obter a resposta do chatbot
function processMessage(message) {

    return 'Ola, eu sou o Burpee, como posso le ajudar?';

}