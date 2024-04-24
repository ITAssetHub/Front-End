export const isAuthenticated = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/usuario/validar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, hash: password }),
      });
      console.log(response.status + ": Chamada a api")
      return response;
    } catch (error) {
      console.error('Erro ao enviar requisição: ', error);
      throw new Error('Erro ao enviar requisição');
    }
  };
  