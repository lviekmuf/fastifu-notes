export enum Categories {
    task = "Task",
    categories = "Categories",
    idea = "Idea",
    randomThought = "Random Thought"
}
export interface INoteContent {
    name: string;
    category: string;
    content: string;
    isActive?: boolean;
}
export interface INote extends INoteContent {
    _id: number;
}