import express from 'express'
import noteUpload from '../middleware/note.upload.js'
import notesController from '../controller/notes.controller.js'
import activityUpload from '../middleware/activity.upload.js'
import activityController from '../controller/activity.controller.js'

const route = express.Router()
//note
route.post('/api/note', noteUpload.single('image'), notesController.postNote)
route.put('/api/note/:id', notesController.putNote)
route.get('/api/note', notesController.getNotes)
route.get('/api/note/hidden',notesController.getHiddenNotes)
route.get('/api/note/:id', notesController.findNote)
route.delete('/api/note/:id',notesController.destroyNote)
route.put('/api/note/hidden/:id', notesController.postNoteHidden)

//activity
route.post('/api/activity',activityUpload.single('image'), activityController.postActivity)
route.put('/api/activity/:id',activityController.putActivity)
route.get('/api/activity', activityController.getActivity)
route.get('/api/activity/hidden',activityController.getActivityHidden)
route.put('/api/activity/hidden/:id', activityController.postActivityHidden)
route.delete('/api/activity/:id', activityController.destroyActivity)
export default route