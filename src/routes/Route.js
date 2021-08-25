import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  let dados = localStorage.getItem('dadosCandidato');

  // if (!dados && isPrivate) {
  //   return <Redirect to="/login" />;
  // }

  // dados = JSON.parse(dados);

  // if (isPrivate) {
  //   return (
  //     <Route
  //       {...rest}
  //       component={() => {
  //         return <Component dados={dados} />;
  //       }}
  //     />
  //   );
  // }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.protoTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
