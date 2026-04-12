export const API_BASE = 'http://localhost:5000/api';

/**
 * Fetch wrapper to handle tokens and common headers
 */
export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem('kie_token');
    
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {})
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'API request failed');
    }
    return result;
}
