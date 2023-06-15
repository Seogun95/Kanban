import styled from 'styled-components';

interface IStyledProps {
  error?: boolean;
}

const Form = styled.form`
  width: 100%;
  > span {
    padding: 0.5rem;
    display: block;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.accentColor};
    min-height: 2.5rem;
  }
  button {
    background-color: ${({ theme }) => theme.pointColor};
    color: white;
    font-weight: bold;
  }
`;

const InputContainer = styled.div`
  ${({ theme }) => theme.FlexRow};
  gap: 0.5rem;
`;

const TodoInput = styled.input<IStyledProps>`
  width: 100%;
  transition: 0.2s ease;
  border: 2px solid
    ${({ error, theme }) => (error ? theme.accentColor : theme.bgColorDeep)};
`;

export const DRAG = {
  Form,
  InputContainer,
  TodoInput,
};
