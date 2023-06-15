import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

interface DraggableProps {
  todoText: string;
  todoId: string;
  index: number;
}

export const DraggableCard = React.memo(
  ({ todoText, todoId, index }: DraggableProps) => {
    return (
      <>
        <Draggable draggableId={String(todoId)} index={index}>
          {(draggable, snapshot) => (
            <CardContainer
              ref={draggable.innerRef}
              isDragging={snapshot.isDragging}
              {...draggable.draggableProps}
              {...draggable.dragHandleProps}
            >
              <Card>{todoText}</Card>
            </CardContainer>
          )}
        </Draggable>
      </>
    );
  },
);

const CardContainer = styled.div<{ isDragging: boolean }>`
  background-color: ${({ theme, isDragging }) =>
    isDragging ? theme.card.leave : theme.bgColor};
  border: 3px solid
    ${({ theme, isDragging }) => (isDragging ? theme.card.over : 'none')};
  box-shadow: ${({ theme, isDragging }) =>
    isDragging ? theme.shadow.box : 'none'};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Card = styled.span`
  ${({ theme }) => theme.TextEllipsis}
`;
