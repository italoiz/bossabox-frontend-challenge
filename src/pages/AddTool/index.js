import React, { useState } from 'react';
import { useModalGallery } from 'react-router-modal-gallery';
import { Button, Icon, Snackbar, IconButton } from '@material-ui/core';
import { Form } from '@rocketseat/unform';
import { TextField } from 'unform-material-ui';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addTool } from '../../store/modules/tools/actions';
import { api } from '../../services';
import { Container, Title, Footer, CancelButton, Content } from './styles';

/** form validation */
const validationSchema = Yup.object().shape({
  title: Yup.string().required('O titulo é obrigatório'),
  link: Yup.string()
    .url('Por favor, entre com uma URL válida')
    .required('Uma URL é obrigatória'),
  description: Yup.string()
    .min(10)
    .required('A descrição deve ter pelo menos 10 caracteres'),
  tags: Yup.string().required('Por favor, digite pelo menos uma tag'),
});

export default function AddTool() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { isModal, redirectToBack } = useModalGallery();

  /** handle save */
  async function handleSave({ tags, ...rest }) {
    try {
      const tags2arr = String(tags)
        .trim()
        .split(' ');

      const { data: tool } = await api.post('/tools', {
        ...rest,
        tags: tags2arr,
      });

      // add tool to list
      dispatch(addTool(tool));

      // close modal.
      redirectToBack();
    } catch ({ response: { data } }) {
      let message = 'Desculpe, estamos com algum problema. Tente novamente!';

      /* istanbul ignore next */
      if (data.message) {
        const { message: errorMessage } = data;
        message = errorMessage;
      }

      setError(message);
    }
  }

  function handleResetError() {
    setError(null);
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
            label="Titulo"
            placeholder="Ex. Jest ou React"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            name="link"
            label="URL"
            placeholder="Ex. https://jestjs.io"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            name="description"
            label="Descrição"
            placeholder="Uma ferramenta para gerenciar meu tempo."
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
            helperText="Tags devem ser separadas por um espaço"
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

      <Snackbar
        open={!!error}
        message={error}
        action={[
          <IconButton
            key="close"
            aria-label="Fechar"
            color="inherit"
            onClick={handleResetError}
            data-testid="snackbar-close"
          >
            <Icon>close</Icon>
          </IconButton>,
        ]}
      />
    </Container>
  );
}

AddTool.propTypes = {
  location: PropTypes.shape({
    refreshTools: PropTypes.func,
  }).isRequired,
};
