import {GET_PROGRESS_SUCCESS, GET_PROGRESS_FAILURE, UPDATE_PROGRESS} from '../constants/progress';

import {COMPLETE_LESSON_SUCCESS, COMPLETE_LESSON_FAILURE, UPDATE_EXERCISE_SUCCESS } from '../constants/practice';

import {findNotCompleted, getTotal, getCompleted,} from '../../ulits';

const initialState = {
  data: {
    next: "0-natural-numbers-designation",
    total: 175,
    completed: 0,
    subjects: {}
  },
  error: null
};

const progress = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRESS_SUCCESS:
      {
        return {
          ...state,
          data: {
            ...state.data,
            subjects: action.payload,
            total: getTotal(action.payload),
            completed: getCompleted(action.payload),
            next: findNotCompleted(action.payload)
          },
        };
      }
    case GET_PROGRESS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case COMPLETE_LESSON_SUCCESS:
      {
        const {lesson, subject} = action.payload;
        return {
          ...state,
          data: {
            ...state.data,
            subjects: {
              ...state.data.subjects,
              [subject]: {
                ...state.data.subjects[subject],
                [lesson]: {
                  ...state.data.subjects[subject][lesson],
                  completed: true
                }
              }
            }
          }
        }
      }
    case UPDATE_PROGRESS:
      return {
        ...state,
        data: {
          ...state.data,
          completed: getCompleted(state.data.subjects),
          next: findNotCompleted(state.data.subjects)
        }
      }
    case UPDATE_EXERCISE_SUCCESS: {
      const { lesson, subject, id } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          subjects: {
            ...state.data.subjects,
            [subject]: {
              ...state.data.subjects[subject],
              [lesson]: {
                ...state.data.subjects[subject][lesson],
                [id]: {
                  ...state.data.subjects[subject][lesson][id],
                  completed: true
                }
              }
            }
          }
        }
      }
    }
    default:
      return state;
  }

}

export default progress;
