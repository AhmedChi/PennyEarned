export const CREATE_GOAL = 'CREATE_GOAL';
export const createGoal = goal => ({
    type: CREATE_GOAL,
    payload: { goal },
});

export const REMOVE_GOAL = 'REMOVE_GOAL';
export const removeGoal = id => ({
    type: REMOVE_GOAL,
    payload: { id },
});

export const LOAD_GOALS_PIE = 'LOAD_GOALS_PIE';
export const loadGoalsPie = data => ({
    type: LOAD_GOALS_PIE,
    payload: { data },
});

export const LOAD_GOALS_IN_PROGRESS = 'LOAD_GOALS_IN_PROGRESS';
export const loadGoalsInProgress = () => ({
    type: LOAD_GOALS_IN_PROGRESS,
});

export const LOAD_GOALS_SUCCESS = 'LOAD_GOALS_SUCCESS';
export const loadGoalsSuccess = goals => ({
    type: LOAD_GOALS_SUCCESS,
    payload: { goals },
});

export const LOAD_GOALS_FAILURE = 'LOAD_GOALS_FAILURE';
export const loadGoalsFailure = () => ({
    type: LOAD_GOALS_FAILURE,
});