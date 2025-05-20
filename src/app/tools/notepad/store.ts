import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface NotePadState {
    content: string;
    setContent: (content: string) => void;
}

export const useNotePadStore = create<NotePadState>()(
    persist(
        (set) => ({
            content: '',
            setContent: (content) => set({ content })
        }),
        {
            name: 'notepad-storage', // unique name
        }
    )
);


