import React from 'react';
import styled from 'styled-components';

//npm i react-beautiful-dnd
//npm i --save-dev @types/react-beautiful-dnd
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { IToDoState, todoDragState } from 'atom';
import { Board } from './Drag/Board';

export function Home() {
  const [toDo, setTodo] = useRecoilState(todoDragState);

  /**
    DropResult
    draggableId: 드래그 되었던 Draggable의 id
    type: 드래그 되었던 Draggable의 type
    source: Draggable이 시작된 위치
    destination: Draggable이 끝난 위치

    splice는 배열 자체를 수정하기 때문에 새로운 배열로 복사
  */

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    setTodo(allBoards => {
      const copyToDos: IToDoState = {};
      Object.keys(allBoards).forEach(toDosKey => {
        copyToDos[toDosKey] = [...allBoards[toDosKey]];
      });
      copyToDos[source.droppableId].splice(source.index, 1);
      copyToDos[destination.droppableId].splice(
        destination.index,
        0,
        draggableId,
      );
      return copyToDos;
    });
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <BoardContainer>
            {Object.keys(toDo).map(boardId => (
              <Board todo={toDo[boardId]} boardId={boardId} />
            ))}
          </BoardContainer>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

const Wrapper = styled.section`
  max-width: 50rem;
  height: calc(100vh - 164px);
  margin: 0 auto;
  overflow-y: auto;
`;

const BoardContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  padding: 1rem;
`;
