import { apiFetch } from './api.js';

export async function initQuiz() {
    if (!window.location.pathname.includes('quiz.html')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = urlParams.get('lessonId');
    const nodesContainer = document.getElementById('quiz-nodes');
    let loadedQuiz = null;

    if (lessonId) {
        try {
            const res = await apiFetch(`/quiz/${lessonId}`);
            if (res.success && res.data) {
                loadedQuiz = res.data;
                renderQuizVars(nodesContainer, loadedQuiz.questions);
            } else {
                nodesContainer.innerHTML = '<h4>No quiz mapped for this lesson yet.</h4>';
            }
        } catch(err) {
            nodesContainer.innerHTML = '<h4>Error loading quiz from backend.</h4>';
        }
    } else {
        nodesContainer.innerHTML = '<h4>Error: No lesson provided in URL.</h4>';
    }

    // Timer logic
    const isDemo = localStorage.getItem('demoMode') === 'true';
    let time = isDemo ? 90 : 15 * 60;
    
    const timerEl = document.querySelector('.quiz__timer');
    if (timerEl) {
        const interval = setInterval(() => {
            const m = Math.floor(time / 60);
            const s = time % 60;
            timerEl.textContent = `⏱ ${m}:${s.toString().padStart(2, '0')}`;
            time--;
            if (time < 0) {
                clearInterval(interval);
                alert('Time\'s up!');
                document.getElementById('submit-quiz')?.click();
            }
        }, 1000);
    }

    // Submit block
    const submitBtn = document.getElementById('submit-quiz');
    if (submitBtn) {
        submitBtn.addEventListener('click', async () => {
            if (!loadedQuiz) return;
            submitBtn.innerText = 'Evaluating...';
            submitBtn.disabled = true;

            // Dynamically collect answers from 20 nodes
            const answers = [];
            const optionMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
            
            for(let i = 0; i < loadedQuiz.questions.length; i++) {
                const checked = document.querySelector(`input[name="q${i}"]:checked`);
                answers.push(checked ? optionMap[checked.value] : -1);
            }
            
            let scoreText = 'Calculating...';
            
            try {
                const data = await apiFetch(`/quiz/${loadedQuiz._id}/submit`, {
                    method: 'POST',
                    body: JSON.stringify({ answers })
                });
                
                if (data.success) {
                    scoreText = `${data.score}/${data.total} (${Math.round(data.percentage)}%)`;
                }
            } catch (error) {
                console.warn('Evaluation failed', error);
                scoreText = 'Network Error';
            }

            nodesContainer.style.display = 'none';
            submitBtn.style.display = 'none';
            
            const resultDiv = document.getElementById('quiz-result');
            if (resultDiv) {
                resultDiv.innerHTML = `
                    <h2>Quiz Completed!</h2>
                    <p>Your Grade: <strong style="color:var(--color-success)">${scoreText}</strong></p>
                    <p style="color:var(--color-light); margin-bottom:1rem;">Your scores have been recorded to your profile.</p>
                    <a href="dashboard.html" class="btn btn-primary">Back to Dashboard</a>
                `;
                resultDiv.style.display = 'block';
            }
        });
    }
}

// Helper DOM Injector
function renderQuizVars(container, questions) {
    container.innerHTML = '';
    const letters = ['a', 'b', 'c', 'd'];
    questions.forEach((q, idx) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'quiz__question';
        
        let htmlBlock = `<h4>${idx + 1}. ${q.question}</h4><div class="quiz__options">`;
        
        q.options.forEach((optStr, optIdx) => {
            const val = letters[optIdx];
            htmlBlock += `<label><input type="radio" name="q${idx}" value="${val}"> ${val}) ${optStr}</label>`;
        });
        
        htmlBlock += `</div>`;
        qDiv.innerHTML = htmlBlock;
        container.appendChild(qDiv);
    });
}
