import { loadGoalsFailure, loadGoalsInProgress, loadGoalsSuccess, loadGoalsPie } from './actions';

export const loadGoals = () => async (dispatch, getState) => {
    try {
        dispatch(loadGoalsInProgress());

        const response = await fetch('https://localhost:44337/goals');
        const goals = await response.json();
    
        dispatch(loadGoalsSuccess(goals));
    } catch (e) {
        dispatch(loadGoalsFailure());
    }
}

export const loadGoalsPieData = () => async (dispatch, getState) => {
    try {
        const response = await fetch('https://localhost:44337/goals/GetPieChartData');
        const goals = await response.json();
    
        dispatch(loadGoalsPie(goals));
    } catch (e) {

    }
}

export const displayAlert = text => () => {
    alert(text);
};