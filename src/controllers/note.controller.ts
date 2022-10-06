import { INoteContent } from './../types/note.type';
import { FastifyReply, FastifyRequest } from "fastify"
import notesService from "../services/notes.service"
import { IdNoteContentRequest, IdRequest, NoteContentRequest } from '../types/requests';

export const createNote = async (request: NoteContentRequest, reply: FastifyReply) => {
    try{
        const { name, category, content }: INoteContent = request.body
        return await notesService.createNote({ name, category, content })
    }
    catch (error) {
        reply.send(error)
    }
}

export const getAllNotes = async (request: FastifyRequest, reply: FastifyReply) => {
    try{
        return await notesService.getAll()
    }
    catch (error) {
        reply.send(error)
    }
}

export const getNoteById = async (request: IdRequest, reply: FastifyReply) => {
    try{
        const {id} =  JSON.parse(JSON.stringify(request.query))
        return await notesService.getNoteById(id)
    }
    catch (error) {
        reply.send(error)
    }
}

export const deleteNote = async (request: IdRequest, reply: FastifyReply) => {
    try{
        const {id} =  JSON.parse(JSON.stringify(request.query))
        return await notesService.deleteNote(id)
    }
    catch (error) {
        reply.send(error)
    }
}

export const updateNote = async (request: IdNoteContentRequest, reply: FastifyReply) => {
    try{
        const { id } = JSON.parse(JSON.stringify(request.query))
        const { name, category, content }: INoteContent = request.body
        return await notesService.updateNote({ _id: id, name, category, content})
    }
    catch (error) {
        reply.send(error)
    }
}

export const getStats = async (request: FastifyRequest, reply: FastifyReply) => {
    try{
        return await notesService.getStats()
    }
    catch (error) {
        reply.send(error)
    }
}

