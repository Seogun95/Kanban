import React, { useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { todoDragState } from 'atom';
import { useSetRecoilState } from 'recoil';
import { DRAG } from './styled';

interface IForm {
  todo: string;
}

interface IBoardProps {
  boardId: string;
}
export const TodoInputTemplate = ({ boardId }: IBoardProps) => {
  const setTodo = useSetRecoilState(todoDragState);

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onValid = ({ todo }: IForm) => {
    const newTodo = {
      id: uuidv4(),
      todoText: todo,
    };
    setTodo(prev => {
      return {
        ...prev,
        [boardId]: [newTodo, ...prev[boardId]],
      };
    });
    setFocus('todo');
    reset();
  };

  return (
    <>
      <DRAG.Form onSubmit={handleSubmit(onValid)}>
        <DRAG.InputContainer>
          <DRAG.TodoInput
            {...register('todo', {
              required: { value: true, message: '필수 입력 사항입니다.' },
            })}
            placeholder={`${boardId}`}
            error={Boolean(errors?.todo)}
          />
          <button
            type="submit"
            disabled={Boolean(errors?.todo) || !watch('todo')}
          >
            입력
          </button>
        </DRAG.InputContainer>
        <span>{errors?.todo?.message}</span>
      </DRAG.Form>
    </>
  );
};
