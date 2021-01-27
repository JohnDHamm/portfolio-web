import React from 'react';
import {
  Page,
  AnimContainer,
  FixButton,
  FixMessage,
  Message,
  MessageBox,
  MessageContainer,
} from './NoRoutePage.styles';
import { Animated404 } from '../../components';
import { useHistory } from 'react-router-dom';

export const NoRoutePage: React.FC = () => {
  const history = useHistory();
  const [showMessage, setShowMessage] = React.useState<boolean>(false);
  const [phase, setPhase] = React.useState<Animated404Phase>('broken');

  const onAnimComplete = () => {
    phase === 'broken' ? setShowMessage(true) : history.push('/');
  };

  return (
    <Page>
      <AnimContainer>
        <Animated404 phase={phase} onComplete={onAnimComplete} />
      </AnimContainer>
      <MessageBox>
        {showMessage && (
          <MessageContainer>
            <Message>We're sorry, it looks like something went wrong!</Message>
            <FixButton onClick={() => setPhase('fixed')}>
              <FixMessage>let's fix it!</FixMessage>
            </FixButton>
          </MessageContainer>
        )}
      </MessageBox>
    </Page>
  );
};
