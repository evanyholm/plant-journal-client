import React, { useState } from 'react'
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
} from '@material-ui/core'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Editor } from 'react-draft-wysiwyg'
import { convertToRaw, EditorState } from 'draft-js'
import { connect, ConnectedProps } from 'react-redux'
import { addPlant, ping } from '../../store/plant/actions'
import { Plant } from './types'

const mapDispatchToProps = {
  addPlant,
  ping,
}

const connector = connect(null, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

const AddPlantView = (props: Props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [nameInput, setNameInput] = useState('Enter plant name')
  const submitForm = () => {
    const content = convertToRaw(editorState.getCurrentContent())
    const newPlant: Plant = { name: nameInput, content }
    props.addPlant(newPlant)
  }
  return (
    <Paper>
      <FormControl>
        <InputLabel htmlFor="plant-title">Enter plant name</InputLabel>
        <Input
          onChange={input => setNameInput(input.target.value)}
          id="plant-title"
          aria-describedby="my-helper-text"
        />

        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={changedEditorState =>
            setEditorState(changedEditorState)
          }
        />
        <Button variant="contained" color="primary" onClick={submitForm}>
          <Typography color="textPrimary">Lisää kasvi</Typography>
        </Button>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.ping()
        }}
      >
        <Typography color="textPrimary">PING</Typography>
      </Button>
    </Paper>
  )
}

export default connector(AddPlantView)
