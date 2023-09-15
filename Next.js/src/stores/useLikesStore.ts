import {create} from 'zustand';

type LikesStore = {
    likes: number;
    increaseLikes: () => void;
}

const useLikesStore = create<LikesStore>((set)=>({
    likes: 0,
    increaseLikes: () => set((state)=>({likes: state.likes + 1}))
}))

export default useLikesStore;