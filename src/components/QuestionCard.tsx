import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import SyntaxHighlighter from 'react-syntax-highlighter'
import confetti from 'canvas-confetti'

import { type Question } from '../interfaces/Question'
import { useQuestionsStore } from '../store/questions'
import { useColorModeStore } from '../store/colorMode'

const getAnswerIcon = (info: Question, index: number): JSX.Element => {
  const { correctAnswer, selectedAnswer } = info

  if (selectedAnswer == null)
    return <RadioButtonUncheckedIcon color="disabled" />

  if (index === selectedAnswer && selectedAnswer !== correctAnswer)
    return <CancelIcon color="error" />

  if (correctAnswer === index) return <CheckCircleIcon color="success" />

  return <RadioButtonUncheckedIcon color="disabled" />
}

const QuestionCard = ({ info }: { info: Question }): JSX.Element => {
  const colorMode = useColorModeStore((state) => state.colorMode)

  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  const handleAnswerSelection = (answerIndex: number) => () => {
    if (info.selectedAnswer == null) {
      if (info.correctAnswer === answerIndex)
        void confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 1 },
          zIndex: 2000,
        })
      selectAnswer(info.id, answerIndex)
    }
  }

  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="stretch">
      <Typography variant="h5" align="center">
        {info.question}
      </Typography>

      <SyntaxHighlighter
        language="javascript"
        style={colorMode === 'dark' ? atomOneDark : atomOneLight}
        customStyle={{
          fontSize: '0.875rem',
          textAlign: info.code.includes('\n') ? 'start' : 'center',
        }}
      >
        {info.code}
      </SyntaxHighlighter>

      <Card variant="outlined">
        <List disablePadding>
          {info.answers.map((answer, index) => (
            <ListItem
              key={index}
              disablePadding
              alignItems="center"
              divider={index !== info.answers.length - 1}
            >
              <ListItemButton onClick={handleAnswerSelection(index)}>
                <ListItemIcon children={getAnswerIcon(info, index)} />
                <ListItemText
                  primary={answer}
                  primaryTypographyProps={{
                    fontFamily: 'monospace',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </Stack>
  )
}

export default QuestionCard
