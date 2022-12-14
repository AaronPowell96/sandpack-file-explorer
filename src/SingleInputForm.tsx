import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { SandpackBundlerFiles } from './types';

export const SingleInputForm = ({
  onSubmit,
  onBlur,
  isDirectory,
  files,
  currentPath = '/',
}: {
  currentPath?: string;
  files: SandpackBundlerFiles;
  isDirectory?: boolean;
  onBlur: () => void;
  onSubmit: (value: string) => void;
}) => {
  const [value, setValue] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (value) {
      if (
        files[`${currentPath}/${value}`] ||
        files[`${currentPath}/${value}/`]
      ) {
        setError(true);
        // a file or dir with "value" already exists, do not add it
      } else {
        setError(false);
      }
    } else {
      setError(false);
    }
  }, [value]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleBlur = () => {
    if (value) {
      let valueOverride = value;
      if (isDirectory && !value.endsWith('/')) {
        valueOverride = `${value}/`;
      } else if (value.endsWith('/')) {
        valueOverride = value.substring(0, -1);
      }
      onSubmit(valueOverride);
      setValue('');
    } else {
      onBlur();
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (error) {
      return;
    }
    let valueOverride = value;
    if (isDirectory && !value.endsWith('/')) {
      valueOverride = `${value}/`;
    } else if (value.endsWith('/')) {
      valueOverride = value.substring(0, -1);
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit(valueOverride);
      setValue('');
    }
    if (event.key === 'Escape') {
      event.preventDefault();

      handleBlur();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>
        <input
          style={{
            maxWidth: '100%',
            border: `1px solid ${error ? 'red' : 'inherit'}`,
          }}
          onBlur={handleBlur}
          maxLength={35}
          autoFocus={true}
          placeholder={`${isDirectory ? 'Directory name' : 'File name'}`}
          name="name"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>
      {error ? (
        <span
          style={{
            display: 'block',

            maxWidth: '100%',
            background: 'var(--sp-colors-errorSurface)',
            color: 'var(--sp-colors-error)',
            borderRadius: '3px',
          }}
        >
          File or Directory already exists
        </span>
      ) : null}
    </form>
  );
};
