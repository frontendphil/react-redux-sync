import { combineReducers } from "redux";

const defaultState = {
  name: "My workflow",
  activities: [
    {
      id: 1,
      name: "Activity 1",
      executions: 0
    },
    {
      id: 2,
      name: "Activity 2",
      executions: 1
    }
  ]
};

function workflowReducer(workflow = defaultState, action) {
  switch (action.type) {
    case "INCREMENT": {
      const { activityId } = action.payload;

      const updatedActivities = workflow.activities.map(activity => {
        if (activity.id !== activityId) {
          return activity;
        }

        return {
          ...activity,
          executions: activity.executions + 1
        };
      });

      return {
        ...workflow,
        activities: updatedActivities
      };
    }
    default: {
      return workflow;
    }
  }
}

export default combineReducers({
  workflow: workflowReducer
});
