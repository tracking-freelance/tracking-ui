import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_SERVER;

/**
 * Fetches users from the server.
 *
 * @param {Object} input - The input object.
 * @param {number} input.offset - The offset of the first user to fetch.
 * @param {number} input.limit - The number of users to fetch.
 * @returns {Promise<AxiosResponse<User[]>>} A promise that resolves to an array of users.
 */
export function fetchUsers(input) {
  return axios.get(`/users?offset=${input.offset}&limit=${input.limit}`).then((r) => r.data);
}

/**
 * Fetches sessions from the server.
 *
 * @param {number} userId
 * @param {Object} input - The input object.
 * @param {number} input.offset - The offset of the first user to fetch.
 * @param {number} input.limit - The number of users to fetch.
 * @returns {Promise<AxiosResponse<Sessions[]>>} A promise that resolves to an array of sessions.
 */
export function fetchSessionsByUser(userId, input) {
  return axios.get(`/users/${userId}/sessions?offset=${input.offset}&limit=${input.limit}`).then((r) => r.data);
}

/**
 * Fetches records from the server.
 *
 * @param {number} sessionId
 * @param {Object} input - The input object.
 * @param {number} input.offset - The offset of the first user to fetch.
 * @param {number} input.limit - The number of users to fetch.
 * @returns {Promise<AxiosResponse<Sessions[]>>} A promise that resolves to an array of records.
 */
export function fetchRecordsBySession(sessionId, input) {
  return axios.get(`/sessions/${sessionId}/records?offset=${input.offset}&limit=${input.limit}`).then((r) => r.data);
}
