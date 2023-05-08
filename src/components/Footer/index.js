import {
  FaMoneyBillWave, FaSearch, FaCheckCircle, FaHourglassHalf,
} from 'react-icons/fa';

import {
  Container,
  Copywright,
  Navigation,
  NavigationItem,
  NavigationList,
  StepNumberLayer,
  Steps,
  StepsItem,
  StepsList,
} from './styles';

export default function Footer() {
  const StepsContent = [
    {
      text: 'Escolha o prêmio que gostaria de concorrer, verifique a descrição, regulamento do sorteio e fotos. Em caso de dúvidas entre em contato com o administrador.',
      title: 'ESCOLHA O SORTEIO',
      id: '1',
      icon: <FaSearch />,
    },
    {
      text: 'Você pode escolher quantos bilhetes desejar! Mais bilhetes, mais chances de ganhar.',
      title: 'SELECIONE SEUS BILHETES',
      id: '2',
      icon: <FaCheckCircle />,
    },
    {
      text: 'Faça o pagamento no(s) método(s) de pagamento(s) disponíveis no site.',
      title: 'FAÇA O PAGAMENTO',
      id: '3',
      icon: <FaMoneyBillWave />,
    },
    {
      text: 'Aguarde o Sorteio. Cruze os dedos! Você pode ser o próximo sorteado.',
      title: 'AGUARDE O SORTEIO',
      id: '4',
      icon: <FaHourglassHalf />,
    },

  ];

  const links = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Termos',
      path: '/termos',
    },
    {
      text: 'Sorteios',
      path: '/sorteios',
    },
  ];

  return (
    <Container>
      <Steps>
        <StepsList>
          {StepsContent.map((step) => (
            <StepsItem key={step.id}>
              <StepNumberLayer>{step.id}</StepNumberLayer>
              <h3>
                {step.icon}
                {step.title}
              </h3>
              <p>{step.text}</p>
            </StepsItem>
          ))}
        </StepsList>
      </Steps>
      <Navigation>
        <NavigationList>
          {links.map((link) => (
            <NavigationItem key={link.text}>
              <a href={link.path}>{link.text}</a>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
      <Copywright>
        <p>© 2023 - Todos os direitos reservados | Desenvolvido por Front-End Lab</p>
      </Copywright>
    </Container>
  );
}
