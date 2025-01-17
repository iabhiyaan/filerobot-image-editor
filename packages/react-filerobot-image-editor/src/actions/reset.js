/** Internal Dependencies */
import extractCurrentDesignState from 'utils/extractCurrentDesignState';

export const RESET = 'RESET';

const reset = (state) => {
  const resettedDesignState = extractCurrentDesignState({
    imgSrc: state.imgSrc,
  });

  return {
    ...state,
    ...resettedDesignState,
    selectionsIds: [],
    isResetted: true,
    pastDesignStates: [],
    futureDesignStates: [],
    hasUndo: false,
    hasRedo: false,
    haveNotSavedChanges: false,
  };
};

export default reset;
