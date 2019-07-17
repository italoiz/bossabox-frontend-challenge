export function addTool(tool) {
  return {
    type: '@tools/ADD',
    payload: { tool },
  };
}

export function deleteTool(tool) {
  return {
    type: '@tools/REMOVE',
    payload: { tool },
  };
}

export function setTools(tools) {
  return {
    type: '@tools/SET',
    payload: { tools },
  };
}
