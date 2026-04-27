import { apiFetch } from './api.js';
import { showToast } from './ui.js';

export function initChat() {
    if (!window.location.pathname.includes('chat.html')) return;

    const messageList = document.getElementById('message-list');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    // Load stored user info
    let currentUser = null;
    try {
        currentUser = JSON.parse(localStorage.getItem('kie_user'));
    } catch (e) {}

    // Render a single message bubble
    function renderMessage(msg) {
        const isOwn = currentUser && msg.senderId === currentUser.id;
        const div = document.createElement('div');
        div.className = `message ${isOwn ? 'message--own' : 'message--other'}`;
        div.innerHTML = `
            <span class="message__sender">${isOwn ? 'You' : (msg.senderName || 'Student')}</span>
            <p class="message__content">${msg.content}</p>
            <span class="message__time">${new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        `;
        return div;
    }

    // Fetch all messages and render them
    async function loadMessages() {
        try {
            const res = await apiFetch('/chat');
            if (res.success && res.data) {
                messageList.innerHTML = '';
                if (res.data.length === 0) {
                    messageList.innerHTML = '<p style="text-align:center;color:var(--color-light);padding:2rem;">No messages yet. Be the first to ask a question!</p>';
                } else {
                    res.data.forEach(msg => {
                        messageList.appendChild(renderMessage(msg));
                    });
                }
                messageList.scrollTop = messageList.scrollHeight;
            }
        } catch (err) {
            // Silently fail polling — don't spam toasts
            console.warn('Chat load error:', err.message);
        }
    }

    // Send a message
    if (chatForm) {
        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const content = chatInput?.value?.trim();
            if (!content) return;

            const sendBtn = chatForm.querySelector('button[type="submit"]');
            sendBtn.disabled = true;
            chatInput.value = '';

            try {
                const res = await apiFetch('/chat', {
                    method: 'POST',
                    body: JSON.stringify({ content })
                });
                if (res.success) {
                    messageList.appendChild(renderMessage(res.data));
                    messageList.scrollTop = messageList.scrollHeight;
                }
            } catch (err) {
                showToast('error', 'Failed to send message. Please try again.');
                chatInput.value = content; // restore text on failure
            } finally {
                sendBtn.disabled = false;
                chatInput.focus();
            }
        });
    }

    // Initial load + poll every 6 seconds for new messages
    loadMessages();
    setInterval(loadMessages, 6000);
}
