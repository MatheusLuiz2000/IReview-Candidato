import * as Yup from 'yup';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { limpaString } from '../util/funcoes';

export const DadosCadastraisValidation = Yup.object().shape({
  email: Yup.string('Email obrigatório')
    .required('Email obrigatório')
    .email('Email inválido'),
  nome: Yup.string('Nome da empresa obrigatório').required(
    'Nome da empresa obrigatório'
  ),
  cnpj: Yup.string('CNPJ da empresa obrigatório')
    .required('CNPJ da empresa obrigatório')
    .test('CNPJ Inválido', 'CNPJ Inválido', function(item) {
      if (item) {
        const CNPJ = limpaString(item);
        if (!cnpj.isValid(CNPJ)) {
          return false;
        }
        return true;
      }
    }),
  contato_empresa: Yup.string('Senha obrigatória')
    .required('Contato obrigatório')
    .test('Contato Inválido', 'Contato Inválido', function(item) {
      if (item) {
        const contato = limpaString(item);
        if (contato.length !== 11) {
          return false;
        }
        return true;
      }
    }),
});

export const PagamentoValidation = Yup.object().shape({
  numero_cartao: Yup.string('Número do cartão')
    .required('Número do cartão é obrigatório')
    .test(
      'Número do cartão é inválido',
      'Número do cartão é inválido',
      function(item) {
        if (item) {
          const numero_cartao = limpaString(item);
          console.log(numero_cartao);
          if (numero_cartao.length !== 16) {
            return false;
          }
          return true;
        }
      }
    ),
  nome_cartao: Yup.string('Nome escrito no cartão é obrigatório').required(
    'Nome escrito no cartão é obrigatório'
  ),
  cvv: Yup.string('CVV do cartão obrigatório')
    .required('CVV do cartão obrigatório')
    .test('CVV Inválido', 'CVV Inválido', function(item) {
      if (item) {
        const cvv = limpaString(item);
        if (cvv.length < 3) {
          return false;
        }
        return true;
      }
    }),
  validade_cartao: Yup.string('Validade do cartão é obrigatório')
    .required('Validade do cartão é obrigatório')
    .test(
      'Validade do cartão inválida',
      'Validade do cartão inválida',
      function(item) {
        if (item) {
          const validade = item.split('/');
          const anoHoje = new Date()
            .getFullYear()
            .toString()
            .substr(-2);

          if (!validade[0] || !validade[1]) {
            return false;
          }

          if (
            parseInt(validade[0], 10) <= 0 ||
            parseInt(validade[0], 10) > 12 ||
            parseInt(validade[1], 10) < parseInt(anoHoje, 10)
          ) {
            return false;
          }

          return true;
        }
      }
    ),
  documento_titular: Yup.string('Documento do titular do cartão é obrigatório')
    .required('Documento do titular do cartão é obrigatório')
    .test(
      'Documento do titular inválida',
      'Documento do titular inválida',
      function(item) {
        if (item) {
          const documento = limpaString(item);

          if (!cpf.isValid(documento) && !cnpj.isValid(documento)) {
            return false;
          }

          return true;
        }
      }
    ),
});

export const DadosGeraisValidation = Yup.object().shape({
  email: Yup.string('Email obrigatório')
    .required('Email obrigatório')
    .email('Email inválido'),
  nome: Yup.string('Nome da empresa obrigatório').required(
    'Nome da empresa obrigatório'
  ),
  cnpj: Yup.string('CNPJ da empresa obrigatório')
    .required('CNPJ da empresa obrigatório')
    .test('CNPJ Inválido', 'CNPJ Inválido', function(item) {
      if (item) {
        const CNPJ = limpaString(item);
        if (!cnpj.isValid(CNPJ)) {
          return false;
        }
        return true;
      }
    }),
  senha: Yup.string('Senha da empresa obrigatória').required(
    'Senha da empresa obrigatória'
  ),
  confirma_senha: Yup.string('Confirma Senha da empresa obrigatória')
    .required('Confirma Senha da empresa obrigatória')
    .oneOf([Yup.ref('senha'), null], 'As senhas devem ser iguais'),
});

export const InformacoesGeraisValidation = Yup.object().shape({
  descricao_empresa: Yup.string('Descrição da empresa obrigatória').required(
    'Descrição da empresa obrigatória'
  ),
  valores_missao: Yup.string(
    'Valores e missão da empresa obrigatória'
  ).required('Valores e missão da empresa obrigatória'),
  banner: Yup.string('CNPJ da empresa obrigatório').required(
    'CNPJ da empresa obrigatório'
  ),
  foto: Yup.string('CNPJ da empresa obrigatório').required(
    'CNPJ da empresa obrigatório'
  ),
  logo: Yup.string('CNPJ da empresa obrigatório').required(
    'CNPJ da empresa obrigatório'
  ),
});

export const LoginValidation = Yup.object().shape({
  email: Yup.string('Email obrigatório')
    .required('Email obrigatório')
    .email('Email inválido'),

  senha: Yup.string('Senha obrigatória').required('Senha obrigatória'),
});

export const ContaValidation = Yup.object().shape({
  email: Yup.string('Email obrigatório')
    .required('Email obrigatório')
    .email('Email inválido'),
  nome: Yup.string('Nome da conta obrigatório').required(
    'Nome da conta obrigatório'
  ),
  cargo: Yup.string('Cargo da conta obrigatório').required(
    'CNPJ da conta obrigatório'
  ),
});

export const DadosGeraisVagaValidation = Yup.object().shape({
  titulo: Yup.string('Título da vaga obrigatório').required(
    'Título da vaga obrigatório'
  ),
  cargo: Yup.string('Cargo obrigatório').required('Cargo obrigatório'),
  tipo_area_id: Yup.object().test(
    'Preencha o area da vaga',
    'Preencha o area da vaga',
    function(item) {
      if (!item) {
        return false;
      }

      return true;
    }
  ),
  tipo_periodo_id: Yup.object().test(
    'Preencha o Periodo da vaga',
    'Preencha o Periodo da vaga',
    function(item) {
      if (!item) {
        return false;
      }

      return true;
    }
  ),
  tipo_contrato_id: Yup.object().test(
    'Preencha tipo de Contrato da vaga',
    'Preencha tipo de Contrato da vaga',
    function(item) {
      if (!item) {
        return false;
      }

      return true;
    }
  ),
});
