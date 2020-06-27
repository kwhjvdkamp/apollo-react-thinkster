import React from "react";
import { useMutation, gql } from "@apollo/client";
import { HABITS_QUERY } from "./App";

const DELETE_HABIT_MUTATION = gql`
  mutation DELETE_HABIT_MUTATION($id: ID!) {
    deleteHabit(id: $id) {
      success
    }
  }
`;

function Habit({ habit }) {
  // hooks the function
  const [deleteHabit, { error, loading }] = useMutation(DELETE_HABIT_MUTATION, {
    refetchQueries: [{ query: HABITS_QUERY }],
  });
  return (
    <li style={{ color: error ? "red" : "black" }}>
      {error && (
        <>
          <span role="img" aria-label="warn emoji">
            ⚠️
          </span>{" "}
        </>
      )}
      {`${habit.description} (${habit.points} points)`}
      <button
        type="button"
        onClick={() => deleteHabit({ variables: { id: habit.id } })}
        disabled={loading}
      >
        Delete
      </button>
    </li>
  );
}

export default Habit;
