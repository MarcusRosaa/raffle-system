const currencyFormat = (valor) => {
  const formatoBrasileiro = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatoBrasileiro.format(valor);
};
export default currencyFormat;
