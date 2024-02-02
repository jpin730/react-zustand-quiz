import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { type Question } from '../interfaces/Question'
import { useQuestionsStore } from '../store/questions'

const QuestionCard = ({ info }: { info: Question }): JSX.Element => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <Card
      variant="outlined"
      sx={{
        p: 3,
        maxWidth: '100%',
      }}
    >
      <Typography variant="h5">{info.question}</Typography>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ textAlign: 'start' }}
      >
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={handleClick(index)}
            >
              <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default QuestionCard
