import React from 'react';
import styled, { css } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

interface DraggableProps {
  card: string;
  index: number;
}

export const DraggableCard = React.memo(({ card, index }: DraggableProps) => {
  return (
    <>
      <Draggable draggableId={card} index={index}>
        {(draggable, snapshot) => (
          <CardContainer
            ref={draggable.innerRef}
            isDragging={snapshot.isDragging}
            {...draggable.draggableProps}
            {...draggable.dragHandleProps}
          >
            <Card>{card}</Card>
          </CardContainer>
        )}
      </Draggable>
    </>
  );
});

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

const Card = styled.span``;
