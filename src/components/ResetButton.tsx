import { IconButton } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

import { useQuestionsStore } from '../store/questions'

function ResetButton(): JSX.Element {
  const questions = useQuestionsStore((state) => state.questions)
  const reset = useQuestionsStore((state) => state.reset)

  if (questions.length === 0) {
    return <></>
  }

  return (
    <IconButton onClick={reset} color="inherit" size="large">
      <RestartAltIcon />
    </IconButton>
  )
}

export default ResetButton
