import { Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Flex } from '../flex';
import React from 'react';

export const OtherTips = ({ otherTips, needHidePrice, price }: { otherTips?: string, needHidePrice?: boolean, price: React.ReactNode }) => {
  return (
    <Flex alignItems="center" justifyContent="flex-end">
      {
        needHidePrice ? (
          <>
            {
              otherTips ? (
                <div dangerouslySetInnerHTML={{ __html: otherTips }} />
              ) : <></>
            }
          </>
        ): (
          <>
            {price}
            { otherTips ? (
              <Tooltip title={<div dangerouslySetInnerHTML={{ __html: otherTips }} />} arrow>
                <InfoIcon sx={{ color: '#888', cursor: 'pointer', fontSize: 18, ml: 1 }} />
              </Tooltip>
            ) : null }
          </>
        )
      }
    </Flex>
  );
};
