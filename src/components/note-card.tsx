import { X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface NoteCardProps {
  note: {
    id: string
    date: Date
    content: string
  }
  onNoteDelete: (id: string) => void
}

export function NoteCard({ note, onNoteDelete }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="relative flex flex-col gap-3 overflow-hidden rounded-md bg-slate-800 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(note.date, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-black/0" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 flex flex-col overflow-hidden bg-slate-700 outline-none md:inset-auto md:left-1/2 md:top-1/2 md:h-[60vh] md:w-full md:max-w-[640px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>

            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          </div>

          <button
            type="button"
            className="group w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none"
          >
            Deseja{' '}
            <button
              type="button"
              onClick={() => onNoteDelete(note.id)}
              className="text-red-400 group-hover:underline"
            >
              apagar essa nota
            </button>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}