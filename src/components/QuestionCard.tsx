import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { type Question } from '../interfaces/Question'
import { useQuestionsStore } from '../store/questions'
import { useColorModeStore } from '../store/colorMode'

const QuestionCard = ({ info }: { info: Question }): JSX.Element => {
  const colorMode = useColorModeStore((state) => state.colorMode)

  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
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
              divider={index !== info.answers.length - 1}
            >
              <ListItemButton
                disabled={info.userSelectedAnswer != null}
                onClick={handleClick(index)}
              >
                <ListItemText
                  primary={answer}
                  primaryTypographyProps={{
                    fontFamily: 'monospace',
                    textAlign: 'center',
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
