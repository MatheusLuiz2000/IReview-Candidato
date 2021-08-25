import axios from 'axios';

const dados = JSON.parse(localStorage.getItem('dadosCandidato'));

export async function informacoesEmpresa() {
  // force commit
  try {
    const { status, data } = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_TESTE_URL}/empresa/${dados.id}`,
      headers: {
        authorization: `Bearer ${dados.token}`,
        email: dados.email,
      },
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 401) {
      return (window.location.href = '/login');
    }

    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function salvarInformacoesEmpresa(informacoes) {
  // force commit
  try {
    const { status, data } = await axios({
      method: 'PATCH',
      url: `${process.env.REACT_APP_TESTE_URL}/empresa/${dados.id}`,
      headers: {
        authorization: `Bearer ${dados.token}`,
        email: dados.email,
      },
      data: informacoes,
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 401) {
      return (window.location.href = '/login');
    }

    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function salvarInformacoesAberta(informacoes) {
  // force commit
  try {
    const { status, data } = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_TESTE_URL}/informacaoAberta/${dados.id}`,
      headers: {
        authorization: `Bearer ${dados.token}`,
        email: dados.email,
      },
      data: informacoes,
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 401) {
      return (window.location.href = '/login');
    }

    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function buscarConta() {
  try {
    const { status, data } = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_TESTE_URL}/conta/${dados.id}`,
      headers: {
        authorization: `Bearer ${dados.token}`,
        email: dados.email,
      },
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 401) {
      return (window.location.href = '/login');
    }

    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function salvarConta(informacoes) {
  // force commit
  try {
    const { status, data } = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_TESTE_URL}/conta/${dados.id}`,
      headers: {
        authorization: `Bearer ${dados.token}`,
        email: dados.email,
      },
      data: informacoes,
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 401) {
      return (window.location.href = '/login');
    }

    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function editarConta(informacoes) {
  // force commit
  try {
    const { status, data } = await axios({
      method: 'PATCH',
      url: `${process.env.REACT_APP_TESTE_URL}/conta/${dados.id}`,
      headers: {
        authorization: `Bearer ${dados.token}`,
        email: dados.email,
      },
      data: informacoes,
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 401) {
      return (window.location.href = '/login');
    }

    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function salvarMidiaSocial(informacoes) {
  // force commit
  try {
    const { status, data } = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_TESTE_URL}/midia-social/${dados.id}`,
      headers: {
        authorization: `Bearer ${dados.token}`,
        email: dados.email,
      },
      data: informacoes,
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 401) {
      return (window.location.href = '/login');
    }

    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function buscarConversas() {
  // force commit
  try {
    const { status, data } = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_TESTE_URL}/chat/${dados.id}`,
      headers: {
        authorization: `Bearer ${dados.token}`,
        email: dados.email,
      },
    });

    return { status, data };
  } catch (err) {
    if (err.response.status === 401) {
      return (window.location.href = '/login');
    }

    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}
