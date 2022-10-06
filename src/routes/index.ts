import {
    createNote,
    getAllNotes, 
    getNoteById,
    deleteNote, 
    updateNote,
    getStats
} from "../controllers/note.controller";
import { createSchema, PostNotesBody, PutNotesBody, ResponseNotesSchema } from "../schemas/notes";

const notes = (fastify: any, _:any, done:any) => {  
    fastify.post(
        "/",
        createSchema(PostNotesBody, ResponseNotesSchema),
        createNote
    );

    fastify.put(
        "/:id",
        createSchema(PutNotesBody, ResponseNotesSchema),
        updateNote
    );

    fastify.get("/:id", getNoteById);
    fastify.delete("/:id", deleteNote);
    fastify.get("/", getAllNotes);
    fastify.get("/stats", getStats);
    done();
  };
export default notes