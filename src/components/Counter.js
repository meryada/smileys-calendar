import React from 'react';

const Counter = props => {
  const { allStatus } = props;
  if (allStatus.length === 1) {
    return (
      <p>Has guardado {allStatus.length} estado de ánimo!</p>
    )
  } else {
    return (
      <p>Has guardado {allStatus.length} estados de ánimo!</p>
    )
  }
}

export { Counter }