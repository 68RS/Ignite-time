import { ButtonContainer, ButtonVariant } from './Botton.styles';

interface ButtonProps {
    variant?: ButtonVariant;
}

export const Button = ({ variant = 'primary' }:ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}

