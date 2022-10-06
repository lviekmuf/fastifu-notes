import { Categories, INoteContent } from './../types/note.type'
import { INote } from '../types/note.type'
import notesRepository from "../repositories/notes.repository" 

class NotesService {
    async getAll() {
        return await notesRepository.getAll()
    }
    async getNoteById(id: number) {
        return await notesRepository.getNoteById(id)
    }
    async createNote({ name, category, content }: INoteContent) {
        return await notesRepository.createNote({ name, category, content })
    }
    async updateNote({_id, name, category, content, isActive}: INote): Promise<any> {
        return await notesRepository.updateNote({_id, name, category, content, isActive })
    }
    async deleteNote(id: number) {
        return await notesRepository.deleteNote(id)
    }
    async getStats() {
        return await Promise.all(
            Object.values(Categories).map(async category => {
            const active = await notesRepository.getNotesCount(category, true)
            const archive = await notesRepository.getNotesCount(category, false)
            return { active, archive }
        }))
    }
}
export default new NotesService()
