import React from 'react'
import { cn } from '@/lib/utils'
import { Block } from '../personal/Block'
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd'

interface ListItemProps<T> {
  children: React.ReactNode
  actions: React.ReactNode[]
  className?: string
  dragHandleProps?: DraggableProvidedDragHandleProps
  onClick?: () => void
}

const EntityListItem = <T extends { id: string | number; created: string; updated: string }>({
  children,
  actions,
  className,
  dragHandleProps,
  onClick
}: ListItemProps<T>) => {
  return (
    <Block
      className={cn(
        "flex items-center justify-between",
        className
      )}
      {...dragHandleProps}
      onClick={onClick}
    >
      <div className='flex w-full items-center space-x-4'>
        {children}
      </div>

      <div className="flex w-fit justify-center">
        {actions}
      </div>

    </Block>
  )
}

export default EntityListItem