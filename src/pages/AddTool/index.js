import React from 'react';
import { useModalGallery } from 'react-router-modal-gallery';
import { Button, Icon } from '@material-ui/core';
import { Form } from '@rocketseat/unform';
import { TextField } from 'unform-material-ui';
import * as Yup from 'yup';

import { Container, Title, Footer, CancelButton, Content } from './styles';

/** form validation */
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  link: Yup.string()
    .url('Please enter a valid link')
    .required('Link is required'),
  description: Yup.string()
    .min(10)
    .required('Must be at least 10 characters'),
  tags: Yup.string().required('Please enter at least one tag'),
});

export default function AddTool() {
  const { isModal, redirectToBack } = useModalGallery();

  /** handle save */
  function handleSave() {
    try {
      // close modal.
      redirectToBack();
    } catch (err) {
      // error.
    }
  }

  return (
    <Container
      open={isModal}
      onClose={redirectToBack}
      data-testid="dialog-addTool"
    >
      <Form onSubmit={handleSave} schema={validationSchema}>
        <Title>
          <Icon>add</Icon>
          Nova Ferramenta
        </Title>

        <Content>
          <TextField
            name="title"
            label="Tool name"
            placeholder="Ex. Jest or React"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            name="link"
            label="Tool link"
            placeholder="Ex. https://jestjs.io"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            name="description"
            label="Tool description"
            placeholder="Is a best tool of my life."
            InputLabelProps={{
              shrink: true,
            }}
            rows={3}
            multiline
            fullWidth
          />

          <TextField
            name="tags"
            label="Tags"
            placeholder="javascript frameworks"
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Tags must be separated by a space"
            fullWidth
          />
        </Content>

        <Footer>
          <CancelButton onClick={redirectToBack}>Cancel</CancelButton>

          <Button size="small" type="submit">
            <Icon>save</Icon>
            Add tool
          </Button>
        </Footer>
      </Form>
    </Container>
  );
}
