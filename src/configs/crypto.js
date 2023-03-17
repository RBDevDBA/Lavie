import { pbkdf2Sync, randomBytes } from 'node:crypto';

const saltSite = 16; // Define o tamanho do salt em bytes.
const iterations = 1000; // Define o número de iterações que a função de hash realizará.
const keylen = 64; // Define o tamanho da chave gerada em bytes.
const digest = 'sha512'; // Define o algoritmo de hash usado para gerar o hash.

/**
 * Função para criptografar a senha do usuário
 *
 * @param {string} password - senha do usuário
 * @returns hash: senha criptografada
 */
export const hashPassword = (password) => {
  const salt = randomBytes(saltSite).toString('hex'); // Gera um salt aleatório com o tamanho definido acima e o converte para hexadecimal.
  const hash = pbkdf2Sync(password, salt, iterations, keylen, digest).toString(
    'hex'
  ); // Calcula o hash da senha com o salt gerado, o número de iterações, o tamanho da chave e o algoritmo de hash definidos acima.
  return `${salt}:${hash}`; // Retorna a concatenação do salt e do hash separados por ":".
};

/**
 * Função para verificar se a senha enviada pelo usuário corresponde à senha criptografada armazenada no banco de dados
 *
 * @param {string} password - senha enviada pelo usuário
 * @param {string} storedHash - senha criptografada armazenada no banco de dados
 * @returns true se a senha for válida, false caso contrário
 */
export const isPasswordValid = (password, storedHash) => {
  const [salt, hash] = storedHash.split(':'); // Divide o salt e o hash da senha armazenada usando ":" como separador.
  return (
    hash ===
    pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex')
  ); // Calcula o hash da senha enviada pelo usuário com o salt armazenado, o número de iterações, o tamanho da chave e o algoritmo de hash definidos acima e verifica se o hash resultante é igual ao hash armazenado no banco de dados.
};