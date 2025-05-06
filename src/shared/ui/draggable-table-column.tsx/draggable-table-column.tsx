import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

interface DragItem {
  index: number;
  type: string;
}

interface DraggableHeaderCellProps
  extends React.HTMLAttributes<HTMLTableCellElement> {
  index: number;
  moveColumn: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
}

const type = "COLUMN";

export const DraggableTableColumn: React.FC<DraggableHeaderCellProps> = ({
  index,
  moveColumn,
  children,
  ...restProps
}) => {
  const ref = useRef<HTMLTableCellElement>(null);

  const [, drop] = useDrop<DragItem>({
    accept: type,
    hover: (item) => {
      if (item.index !== index) {
        moveColumn(item.index, index);
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <th
      ref={ref}
      {...restProps}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      {children}
    </th>
  );
};
