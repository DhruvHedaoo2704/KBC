const questions = [
    ["Who is considered the 'Father of Computer Science'?", "Charles Babbage", "Alan Turing", "John von Neumann", "Ada Lovelace", 2],
    ["Which data structure is used for implementing recursion?", "Queue", "Stack", "Array", "Linked List", 2],
    ["What is the primary purpose of DNS in a network?", "Encrypting data", "Resolving domain names to IP addresses", "Ensuring network security", "Managing server configurations", 2],
    ["Which of the following is NOT a programming paradigm?", "Procedural", "Logical", "Declarative", "Symbolic", 4],
    ["What does the term “big-O” notation represent?", "The exact runtime of an algorithm", "The growth rate of an algorithm's runtime", "The amount of memory required by an algorithm", "The efficiency of the hardware", 2],
    ["What does the term 'virtual memory' refer to?", "Memory located on the CPU", "Disk space used as an extension of RAM", "Memory shared between multiple processes", "Temporary memory in the cache", 2],
    ["Which protocol is used for secure communication over the internet?", "HTTP", "TCP", "HTTPS", "FTP", 3],
    ["What does the acronym 'CRUD' stand for in database operations?", "Create, Remove, Update, Delete", "Create, Read, Update, Delete", "Compute, Retrieve, Update, Delete", "Connect, Read, Upload, Download", 2],
    ["Which of the following is NOT a characteristic of object-oriented programming?", "Encapsulation", "Inheritance", "Polymorphism", "Compilation", 4],
    ["Which scheduling algorithm is also known as shortest remaining time first?", "First-Come, First-Served (FCFS)", "Round Robin", "Preemptive Shortest Job Next (SJN)", "Multilevel Queue", 3],
    ["Which sorting algorithm has the best average-case time complexity?", "Merge Sort", "Quick Sort", "Bubble Sort", "Selection Sort", 1],
    ["What is the time complexity of searching an element in a balanced binary search tree (BST)?", "O(1)", "O(n)", "O(log n)", "O(n log n)", 3],
    ["Which data structure is used to implement a priority queue?", "Stack", "Heap", "Hash Table", "Linked List", 2],
    ["Which of the following is a lossless data compression algorithm?", "JPEG", "MPEG", "Huffman Coding", "MP3", 3],
    ["Which of the following is a NoSQL database?", "MySQL", "PostgreSQL", "MongoDB", "Oracle", 3],
    ["What is the primary purpose of a firewall in computer networks?", "Encrypting network traffic", "Preventing unauthorized access", "Boosting internet speed", "Managing DNS servers", 2],
    ["Which of the following is the first computer virus created to infect personal computers?", "ILOVEYOU", "Creeper", "Brain", "Morris Worm", 3]
];

const levels = [1000, 2000, 4000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1280000, 2500000, 5000000, 10000000, 20000000, 40000000, 70000000];
let currentQuestion = 0;
let money = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        document.getElementById("question").innerText = `Question for Rs ${levels[currentQuestion]}: ${question[0]}`;
        document.getElementById("option1").innerText = question[1];
        document.getElementById("option2").innerText = question[2];
        document.getElementById("option3").innerText = question[3];
        document.getElementById("option4").innerText = question[4];
    } else {
        endGame();
    }
}

function checkAnswer(option) {
    const correctAnswer = questions[currentQuestion][5];
    if (option === correctAnswer) {
        money = levels[currentQuestion];
        alert(`Correct! You have won Rs ${money}`);
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Wrong Answer! Game Over.");
        endGame();
    }
}

function quitGame() {
    alert(`You have quit the game. Your take-home money is Rs ${money}`);
    endGame();
}

function endGame() {
    document.getElementById("game-container").innerHTML = `<h2>Game Over</h2><p>Your take-home money is Rs ${money}</p>`;
}

loadQuestion();
