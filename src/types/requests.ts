import { INoteContent } from './note.type';
import { FastifyRequest } from "fastify";
interface IIdQueryString {
    id: number;
}
export type NoteContentRequest = FastifyRequest<{
    Body: INoteContent;
}>

export type IdRequest = FastifyRequest<{
    Querystring: IIdQueryString;
}>
export type IdNoteContentRequest = FastifyRequest<{
    Body: INoteContent;
    Querystring: IIdQueryString;
}>