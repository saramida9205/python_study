// State
let pyodide = null;
let currentChapterId = null;

// DOM Elements
const chapterList = document.getElementById('chapter-list');
const contentDisplay = document.getElementById('content-display');
const codeEditor = document.getElementById('code-editor');
const runBtn = document.getElementById('run-btn');
const outputConsole = document.getElementById('output-console');
const loadingOverlay = document.getElementById('loading-overlay');

// Initialize Pyodide
async function initPyodide() {
    try {
        pyodide = await loadPyodide();
        // Capture stdout
        pyodide.setStdout({
            batched: (msg) => appendOutput(msg)
        });

        console.log("Pyodide loaded");

        // Hide loading overlay
        loadingOverlay.style.display = 'none';
        runBtn.disabled = false;
        appendOutput("Ready to run Python code!", true);
    } catch (err) {
        console.error("Failed to load Pyodide:", err);
        document.querySelector('#loading-overlay div:last-child').textContent = "Failed to load Python environment. Please refresh.";
        document.querySelector('#loading-overlay div:last-child').style.color = "var(--error-color)";
    }
}

// UI Functions
function renderChapterList() {
    chapterList.innerHTML = '';
    chapters.forEach((chapter, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#";
        a.textContent = chapter.title;
        a.dataset.id = chapter.id;

        if (index === 0 && !currentChapterId) {
            loadChapter(chapter.id);
        }

        a.addEventListener('click', (e) => {
            e.preventDefault();
            loadChapter(chapter.id);
        });

        li.appendChild(a);
        chapterList.appendChild(li);
    });
}

function loadChapter(id) {
    currentChapterId = id;
    const chapter = chapters.find(c => c.id === id);
    if (!chapter) return;

    // Update Sidebar Active State
    document.querySelectorAll('.nav-links a').forEach(el => {
        if (el.dataset.id === id) el.classList.add('active');
        else el.classList.remove('active');
    });

    // Update Main Content
    contentDisplay.innerHTML = `
        <h1 class="chapter-title">${chapter.title}</h1>
        <p class="chapter-desc">${chapter.description}</p>
        <div class="content-body">${chapter.content}</div>
    `;

    // Update Editor
    codeEditor.value = chapter.defaultCode;

    // Clear Output (Optional, maybe user wants to keep history?)
    // outputConsole.innerHTML = '';
    // appendOutput(`--- Loaded: ${chapter.title} ---`, true);
}

function appendOutput(msg, isSystem = false) {
    const div = document.createElement('div');
    div.classList.add('output-line');
    if (isSystem) {
        div.style.color = '#64748b'; // System msg color
    }
    div.textContent = msg;
    outputConsole.appendChild(div);
    outputConsole.scrollTop = outputConsole.scrollHeight;
}

// Execution Logic
async function runCode() {
    if (!pyodide) return;

    const code = codeEditor.value;
    runBtn.disabled = true;
    runBtn.innerHTML = `<span class="spinner" style="width:16px;height:16px;border-width:2px;margin:0;"></span> Running...`;

    // Clear previous output marker
    appendOutput(">>> Running...", true);

    try {
        await pyodide.runPythonAsync(code);
    } catch (err) {
        // Simple error formatting
        const errorMsg = err.toString().split('\n').slice(-2).join('\n'); // Take last 2 lines usually
        const div = document.createElement('div');
        div.classList.add('output-line', 'output-error');
        div.textContent = errorMsg;
        outputConsole.appendChild(div);
    } finally {
        runBtn.disabled = false;
        runBtn.innerHTML = `<span class="btn-text">실행 (Run)</span>`;
        outputConsole.scrollTop = outputConsole.scrollHeight;
    }
}

// Event Listeners
runBtn.addEventListener('click', runCode);

// Keyboard Shortcut (Ctrl+Enter to run)
codeEditor.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
    }
});

// Allow Tab indentation in textarea
codeEditor.addEventListener('keydown', function (e) {
    if (e.key == 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
            "    " + this.value.substring(end);

        // put caret at right place
        this.selectionStart = this.selectionEnd = start + 4;
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking outside on mobile (optional enhancement)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }
});

// Start
renderChapterList();
initPyodide();
