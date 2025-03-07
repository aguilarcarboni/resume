import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvidedDragHandleProps } from 'react-beautiful-dnd'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface ListProps {
  onDragEnd?: (result: DropResult) => void
  isDraggable?: boolean
  className?: string
  children: React.ReactNode
}

interface DraggableChildProps {
  dragHandleProps?: DraggableProvidedDragHandleProps;
  isDragging: boolean;
}

export function List({
  onDragEnd,
  isDraggable = false,
  className,
  children
}: ListProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && 'entity' in child.props) {
        const content = isDraggable ? (
          <Draggable key={child.props.entity.id.toString()} draggableId={child.props.entity.id.toString()} index={index}>
            {(provided, snapshot) => (
              <motion.div
                ref={provided.innerRef}
                {...provided.draggableProps}
                className={cn("w-full", snapshot.isDragging ? "opacity-50" : "")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {React.cloneElement(child, {
                  dragHandleProps: provided.dragHandleProps,
                  isDragging: snapshot.isDragging,
                } as DraggableChildProps)}
              </motion.div>
            )}
          </Draggable>
        ) : (
          <motion.div
            key={child.props.entity.id.toString()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {child}
          </motion.div>
        )

        return (
          <AnimatePresence key={child.props.entity.id.toString()}>
            {isLoaded && content}
          </AnimatePresence>
        )
      }
      return child
    })
  }

  const content = (
    <div className={cn("w-full", className)}>
      {renderChildren()}
    </div>
  )

  if (!isDraggable) {
    return content
  }

  return (
    <DragDropContext onDragEnd={onDragEnd!}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className={cn("w-full flex flex-col", className)}>
            {renderChildren()}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}