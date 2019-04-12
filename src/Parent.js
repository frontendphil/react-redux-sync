import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { getName } from "./context";

function Parent({ workflow, name, activity1, activity2, dispatchIncrement }) {
  const [parentActivity1, parentActivity2] = workflow.activities;

  console.log("Activity 1", activity1.executions, parentActivity1.executions);
  console.log("Activity 2", activity2.executions, parentActivity2.executions);

  return (
    <div>
      <h1>{name}</h1>
      <table>
        <tbody>
          <tr>
            <td>{activity1.name}</td>
            <td>{activity1.executions}</td>
          </tr>
          <tr>
            <td>{activity2.name}</td>
            <td>{activity2.executions}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>{activity1.name}</td>
            <td>
              <button onClick={() => dispatchIncrement(activity1.id)}>
                Execute
              </button>
            </td>
          </tr>
          <tr>
            <td>{activity2.name}</td>
            <td>
              <button onClick={() => dispatchIncrement(activity2.id)}>
                Execute
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const enhance = compose(
  connect(({ workflow }) => {
    const [activity1, activity2] = workflow.activities;

    return {
      activity1,
      activity2,
      workflow
    };
  }),
  getName,
  connect(
    ({ workflow }) => ({ workflow }),
    {
      dispatchIncrement: activityId => ({
        type: "INCREMENT",
        payload: { activityId }
      })
    }
  ),
  getName
);

export default enhance(Parent);
