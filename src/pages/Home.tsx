import styled from 'styled-components';

//npm i react-beautiful-dnd
//npm i --save-dev @types/react-beautiful-dnd
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { todoDragState } from 'atom';
import { Board } from './Drag/Board';
import { TodoCategoryTemplate } from './Drag/TodoCategoryTemplate';

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

  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;

    if (destination.droppableId === source.droppableId) {
      setTodo(prev => {
        const todoCopy = [...prev[source.droppableId]];
        const selectedObject = todoCopy[source.index];
        todoCopy.splice(source.index, 1);
        todoCopy.splice(destination.index, 0, selectedObject);
        return {
          ...prev,
          [source.droppableId]: todoCopy,
        };
      });
    }

    if (destination.droppableId !== source.droppableId) {
      setTodo(prev => {
        const sourBoard = [...prev[source.droppableId]];
        const selectedObject = sourBoard[source.index];
        const destinationBoard = [...prev[destination.droppableId]];
        sourBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, selectedObject);
        return {
          ...prev,
          [source.droppableId]: sourBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <TodoCategoryTemplate />
          <BoardContainer>
            {Object.keys(toDo).map(boardId => {
              return (
                <Board key={boardId} todo={toDo[boardId]} boardId={boardId} />
              );
            })}
          </BoardContainer>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

const Wrapper = styled.section`
  max-width: 50rem;
  margin: 0 auto;
`;

const BoardContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  padding: 1rem;

  ${({ theme }) => theme.media.tablet`
      ${theme.FlexCol};
      ${theme.FlexCenter};
  `}
`;
