import { Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export const OtherTips = ({ otherTips }: { otherTips?: string }) => {
  return (
    <>
      {otherTips ? (
        <Tooltip title={otherTips} arrow>
          <InfoIcon sx={{ color: '#888', cursor: 'pointer', fontSize: 18, ml: 1 }} />
        </Tooltip>
      ) : null}
    </>
  );
};
