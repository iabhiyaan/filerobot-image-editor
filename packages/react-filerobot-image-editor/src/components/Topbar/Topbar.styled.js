/** External Dependencies */
import styled from 'styled-components';
import Button from '@scaleflex/ui/core/button';
import IconButton from '@scaleflex/ui/core/icon-button';
import Input from '@scaleflex/ui/core/input';
import Label from '@scaleflex/ui/core/label';
import Select from '@scaleflex/ui/core/select';

const StyledTopbar = styled.div`
  position: relative;
  height: 38px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  ${({ reverseDirection }) =>
    reverseDirection ? 'flex-direction: row-reverse' : ''};
`;

const StyledHistoryButton = styled(IconButton)`
  margin: ${({ margin }) => margin ?? '0 4px'};

  :first-of-type {
    margin: ${({ margin }) => margin ?? '0 4px 0 8px'};
  }
  width: 23px;
  height: 23px;
  padding: 4px;

  :disabled {
    cursor: not-allowed;
  }
`;

const StyledSmallButton = styled(IconButton)`
  width: 20px;
  height: 20px;
  margin: 0 ${(props) => props.horizontalMargin ?? '4px'};
  padding: 4px;
`;

const StyledFlexCenterAlignedContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ reverseDirection }) =>
    reverseDirection ? 'flex-direction: row-reverse' : ''};
`;

const StyledZoomPercentageLabel = styled(Label)`
  cursor: pointer;
`;

const StyledBackButtonLabel = styled.span`
  font-size: 11px;
  line-height: 12px;
`;

const StyledCloseOrBackButton = styled(IconButton)`
  padding: 0;
  z-index: 111;
`;

const StyledSaveButton = styled(Button)`
  padding: 4px 12px;
`;

const StyledFileNameInput = styled(Input)`
  width: 200px;
`;

const StyledFileExtensionSelect = styled(Select)`
  width: 60px;
  margin-left: 4px;
`;

const StyledQualityWrapper = styled.div`
  width: 100%;
  margin-top: 16px;

  input {
    max-width: 100%;
  }
`;

export {
  StyledTopbar,
  StyledFlexCenterAlignedContainer,
  StyledHistoryButton,
  StyledSmallButton,
  StyledZoomPercentageLabel,
  StyledBackButtonLabel,
  StyledCloseOrBackButton,
  StyledSaveButton,
  StyledFileNameInput,
  StyledFileExtensionSelect,
  StyledQualityWrapper,
};