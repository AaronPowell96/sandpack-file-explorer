import React from 'react';
import { useRef } from 'react';

export const SingleInputForm = ({
  onSubmit,
  onBlur,
  isDirectory,
}: {
  isDirectory?: boolean;
  onBlur: () => void;
  onSubmit: (value: string) => void;
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
    // onSubmit((event.form.input.value);
    // Validate form data and submit to server...
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    let name = (event.target as HTMLInputElement).value;
    if (isDirectory && !name.endsWith('/')) {
      name = `${name}/`;
    } else if (name.endsWith('/')) {
      name = name.substring(0, -1);
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit(name);
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      console.log((event.target as HTMLInputElement).value);
      onBlur();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label style={{ width: '100%' }}>
        <input
          onBlur={onBlur}
          style={{ width: '100%' }}
          autoFocus={true}
          placeholder={`${isDirectory ? 'Directory name' : 'File name'}`}
          name="name"
          type="text"
          onKeyDown={handleKeyDown}
        />
      </label>
    </form>
  );
};
