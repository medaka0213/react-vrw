import React, { useState, VFC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  IconButton,
  Snackbar,
  Slide,
  Typography,
} from '@mui/material';

import { Link } from './Link';
import { CommonProps } from './types';

export type CopyProps = BoxProps &
  CommonProps & {
    value: string;
    external?: boolean;
    onClick?: () => void;
    buttonProps?: ButtonProps;
    buttonLabel?: string;
    multiLine?: boolean;
  };

export const Copy: VFC<CopyProps> = ({
  sx,
  value,
  external = false,
  children,
  buttonProps,
  buttonLabel,
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
  const multiLine = value.split('\n').length > 3;
  const link =
    value && (value.startsWith('http') || value.startsWith('mailto'));

  return (
    <Box
      sx={{
        display: multiLine ? 'block' : 'flex',
        ...sx,
      }}
    >
      <CopyToClipboard text={String(value) || ''} onCopy={handleClick(Slide)}>
        {multiLine ? (
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
      <Typography
        component="p"
        sx={{
          flex: 1,
          my: 'auto',
          whiteSpace: 'pre',
          p: multiLine ? 1 : 0,
          border: multiLine ? '1px solid #ccc' : 'none',
        }}
      >
        {link ? (
          <Link href={value} external={external}>
            {children || value}
          </Link>
        ) : (
          children || value
        )}
      </Typography>
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