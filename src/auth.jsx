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

      if (response.status == 200) {
        console.log("Usuario logado")
        return true
      } else {
        console.log("Usuário inválido!")
      return false;
      }
    } catch (error) {
      console.error('Erro ao enviar requisição: ', error);
      throw new Error('Erro ao enviar requisição');
    }
  };