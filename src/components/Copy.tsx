import React, { useState, VFC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LaunchIcon from '@mui/icons-material/Launch';
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  IconButton,
  Snackbar,
  Slide,
} from '@mui/material';

import { CommonProps } from './types';

export type CopyProps = BoxProps &
  CommonProps & {
    value: string;
    external?: boolean;
    onClick?: () => void;
    buttonProps?: ButtonProps;
    buttonLabel?: string;
    multiLine?: boolean;
    area?: boolean;
    showValue?: boolean;
  };

const App: VFC<CopyProps> = ({
  sx,
  value,
  external = false,
  children,
  buttonProps,
  buttonLabel,
  area = true,
  showValue = true,
  multiLine = false,
}) => {
  const [state, setState] = useState({
    open: false,
    Transition: Slide,
  });

  const handleClick = (Transition: any) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  value = String(value) || '';
  const needMultiLine = multiLine || value.split('\n').length > 3;
  const link =
    value && (value.startsWith('http') || value.startsWith('mailto'));

  return (
    <Box
      sx={{
        display: needMultiLine ? 'block' : 'flex',
        backgroundColor: area && 'action.hover',
        border: area && '1px solid #ccc',
        ...sx,
      }}
    >
      <CopyToClipboard text={String(value) || ''} onCopy={handleClick(Slide)}>
        {needMultiLine ? (
          <Button
            sx={{
              width: '100%',
              ...buttonProps?.sx,
            }}
            variant={buttonProps?.variant || 'contained'}
            {...buttonProps}
          >
            <ContentCopyIcon
              sx={{
                mr: 1,
                fontSize: '1rem',
              }}
            />{' '}
            {buttonLabel || 'コピー'}
          </Button>
        ) : (
          <IconButton>
            <ContentCopyIcon />
          </IconButton>
        )}
      </CopyToClipboard>
      {showValue && (
        <Box
          sx={{
            flex: 1,
            my: 'auto',
            p: needMultiLine ? 1 : 0,
            'white-space': 'pre-line',
            'overflow-wrap': 'anywhere',
          }}
        >
          {children || value}
        </Box>
      )}
      {link && showValue && (
        <IconButton
          sx={{
            ml: 1,
          }}
          href={value}
          target="_blank"
        >
          <LaunchIcon />
        </IconButton>
      )}
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={`コピーしました: ${value}`}
        key={state.Transition.name}
      />
    </Box>
  );
};

import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const Copy = (props: CopyProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App {...props} />
  </ThemeProvider>
);
