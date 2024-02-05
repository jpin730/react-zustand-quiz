import { Container, Paper, Stack, Typography } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HelpIcon from '@mui/icons-material/Help'

import { useQuestionsData } from '../hooks/useQuestionData'

function Footer(): JSX.Element {
  const { correct, incorrect, unanswered } = useQuestionsData()

  return (
    <footer>
      <Paper elevation={5}>
        <Container>
          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            gap={{
              xs: 1,
              sm: 4,
            }}
            alignItems="center"
            justifyContent="center"
            py={2}
          >
            <Stack direction="row" gap={1}>
              <CheckCircleIcon color="success" />
              <Typography children={<strong>{correct} correct</strong>} />
            </Stack>
            <Stack direction="row" gap={1}>
              <CancelIcon color="error" />
              <Typography children={<strong>{incorrect} incorrect</strong>} />
            </Stack>
            <Stack direction="row" gap={1}>
              <HelpIcon color="action" />
              <Typography children={<strong>{unanswered} unanswered</strong>} />
            </Stack>
          </Stack>
        </Container>
      </Paper>
    </footer>
  )
}

export default Footer
