import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertFromRaw } from 'draft-js'
import { ReduxState } from '../../store/store'

const styles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(3, 0, 0, 0),
  },
}))
type OwnProps = {
  plantId: string
}

const mapStateToProps = (state: ReduxState) => ({
  plants: state.plantState.plants,
})
type Props = OwnProps & ReturnType<typeof mapStateToProps>

const PlantView: React.FC<Props> = ({ plantId, plants }: Props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const plant = plants.find(plantToCompare => plantToCompare.id === plantId)
  useEffect(() => {
    if (plant?.content) {
      const state = convertFromRaw(plant.content)
      setEditorState(EditorState.createWithContent(state))
    }
  }, [plant])
  const classes = styles()
  return plant ? (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {plant.name}
      </Typography>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={changedEditorState =>
          setEditorState(changedEditorState)
        }
      />
    </Paper>
  ) : (
    <div>No plant?</div>
  )
}

export default connect(mapStateToProps)(PlantView)
