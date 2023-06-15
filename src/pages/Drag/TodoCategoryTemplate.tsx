import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { todoDragState } from 'atom';
import { useSetRecoilState } from 'recoil';
import { DRAG } from './styled';

interface IAdd {
  add: string;
}

export const TodoCategoryTemplate = () => {
  const setTodo = useSetRecoilState(todoDragState);
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    watch,
    formState: { errors },
  } = useForm<IAdd>({
    mode: 'onChange',
  });

  const onValid = ({ add }: IAdd) => {
    setTodo(prev => {
      return {
        ...prev,
        [add]: [],
      };
    });
    setFocus('add');
    reset();
  };

  useEffect(() => {
    setFocus('add');
  }, [setFocus]);

  return (
    <>
      <DRAG.Form onSubmit={handleSubmit(onValid)}>
        <DRAG.InputContainer>
          <DRAG.TodoInput
            {...register('add', {
              required: { value: true, message: '필수 입력 사항입니다.' },
            })}
            placeholder="추가할 보드명을 입력하세요"
            error={Boolean(errors?.add)}
          />
          <button
            type="submit"
            disabled={Boolean(errors?.add) || !watch('add')}
          >
            입력
          </button>
        </DRAG.InputContainer>
        <span>{errors?.add?.message}</span>
      </DRAG.Form>
    </>
  );
};
