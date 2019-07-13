import styled from 'styled-components';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
} from '@material-ui/core';

export const Container = styled(Dialog).attrs({
  fullWidth: true,
  scroll: 'body',
  maxWidth: 'xs',
})``;

export const Title = styled(DialogTitle)`
  > h6 {
    display: flex;
    align-items: center;

    .MuiIcon-root {
      margin-right: 10px;
    }
  }
`;

export const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;

  > .MuiFormControl-root {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

// export const Input = styled(TextField).attrs({
//   fullWidth: true,
//   InputLabelProps: {
//     shrink: true,
//   },
// });

export const Footer = styled(DialogActions)`
  margin-top: 15px;
`;

export const CancelButton = styled(Button).attrs({
  color: 'secondary',
  size: 'small',
  variant: 'text',
})``;
