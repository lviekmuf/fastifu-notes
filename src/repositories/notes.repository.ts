import { INote, INoteContent } from './../types/note.type';
import Note from "../models/note"

class NotesRepository {
    async getAll() {
        return await Note.find()
    }
    async getNoteById(id: number) {
        return await Note.findById(id)
    }
    async getNewId() {
        const notes = await this.getAll()
        const id = notes[notes.length - 1]._id
        return id ? id + 1 : 1
    }
    async createNote({ name, category, content }:INoteContent) {
        const _id = await this.getNewId()
        const note = new Note({ _id, name, category, content })
        return await note.save()
    }
    async updateNote({_id, name, category, content }:INote) {
        return await Note.findOneAndUpdate({_id},{_id, name, category, content } )
    }
    async deleteNote(id: any) {
        return await Note.findByIdAndDelete(id)
    }
    async getNotesCount(category:string, isActive:boolean) { 
        return await Note.count({category, isActive}) 
    }
}
export default new NotesRepository();
