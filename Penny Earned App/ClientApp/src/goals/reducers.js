import {
    CREATE_GOAL,
    REMOVE_GOAL,
    LOAD_GOALS_IN_PROGRESS,
    LOAD_GOALS_SUCCESS,
    LOAD_GOALS_FAILURE,
    LOAD_GOALS_PIE
} from './actions';

import {
    LOGOUT
} from '../login/actions';
import { StaticRouter } from 'react-router';

export const isLoadingGoals = (state = false, action) => {
    const { type } = action;

    switch (type) {
    case LOAD_GOALS_IN_PROGRESS:
        return true;
    case LOAD_GOALS_SUCCESS:
    case LOAD_GOALS_FAILURE:
        return false;
    default:
        return state;
    }
}

export const goalsPieData = (state = [["", ""]], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_GOALS_PIE: {
            const { data } = payload;
            return data;
        }
        case LOGOUT: {
            return state = [["", ""]];
        }
        default: {
            return state;
        }
    }
}

export const goals = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_GOAL: {
            const { goal } = payload;
            const newGoal = {
                id: 0,
                desc: goal.desc,
                amount: 0,
                isCompleted: false,
            };
            return state.concat(newGoal);
        }
        case REMOVE_GOAL: {
            const { id } = payload;
            return state.filter(goal => goal.id !== id);
        }
        case LOAD_GOALS_SUCCESS: {
            const { goals } = payload;
            return goals;
        }
        case LOGOUT: {
            return state = [];
        }
        case LOAD_GOALS_IN_PROGRESS:
        case LOAD_GOALS_FAILURE:
        default: {
            return state;
        }
    }
}