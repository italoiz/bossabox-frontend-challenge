import { produce } from 'immer';

const INITIAL_STATE = [];

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@tools/SET':
      return produce(state, () => action.payload.tools);
    case '@tools/ADD':
      return produce(state, draft => {
        const { tool } = action.payload;

        draft.push(tool);
      });
    case '@tools/REMOVE':
      return produce(state, draft => {
        const { tool: toolId } = action.payload;

        const idx = draft.findIndex(({ id }) => toolId === id);

        if (idx >= 0) {
          draft.splice(idx, 1);
        }
      });
    default:
      return state;
  }
}
