import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { DraggableCard } from './DraggableCard';

import { ITodoObject } from 'atom';
import { TodoInputTemplate } from './TodoInputTemplate';

interface IBoardProps {
  todo: ITodoObject[];
  boardId: string;
}

export const Board = ({ todo, boardId }: IBoardProps) => {
  return (
    <>
      <Wrapper>
        <h3>{boardId}</h3>
        <TodoInputTemplate boardId={boardId} />
        <DroppableWrapper>
          <Droppable droppableId={boardId}>
            {(droppable, snapshot) => (
              <>
                <DroppableContainer
                  ref={droppable.innerRef}
                  {...droppable.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                  isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                >
                  {/* map의 key와 draggableId는 무조건 같아야한다. */}
                  {todo.length === 0 ? (
                    <EmptyCardTitle>비어있습니다</EmptyCardTitle>
                  ) : (
                    todo.map((card, index) => (
                      <DraggableCard
                        key={card.id}
                        todoText={card.todoText}
                        todoId={card.id}
                        index={index}
                      />
                    ))
                  )}
                  {/* Draggable 엘리먼트를 드래그하는 동안 position: fixed(영역을 고정시킴)하는 옵션 */}
                  {droppable.placeholder}
                </DroppableContainer>
              </>
            )}
          </Droppable>
        </DroppableWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.FlexCol};
  width: 300px;
  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }
  ${({ theme }) => theme.media.tablet`
    padding-bottom: 2rem
  `}
`;

const DroppableWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.card.boardColor};
  box-shadow: ${({ theme }) => theme.shadow.box};
  border-radius: 5px;
  min-height: 120px;
`;

interface IDroppableProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}
const DroppableContainer = styled.div<IDroppableProps>`
  background-color: ${({ isDraggingOver, isDraggingFromThis, theme }) =>
    isDraggingOver
      ? `${theme.card.over}`
      : isDraggingFromThis
      ? `${theme.card.leave}`
      : 'transparent'};
  transition: 0.3s ease background;
  flex-grow: 1;
  padding: 0.5rem;
`;

const EmptyCardTitle = styled.span`
  display: block;
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.accentColor};
`;
