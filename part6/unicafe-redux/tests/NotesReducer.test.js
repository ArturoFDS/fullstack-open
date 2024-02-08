// import { describe, it, expect } from "vitest";
// import deepFreeze from "deep-freeze";
// import { noteReducer } from "../store/notesReducer";
// import deepFreeze from "deep-freeze";

// describe("noteReducer", () => {
//   it("returns new state with action NEW_NOTE", () => {
//     const state = [];
//     const action = {
//       type: "NEW_NOTE",
//       payload: {
//         content: "the app state is in redux store",
//         important: true,
//         id: 1,
//       },
//     };

//     deepFreeze(state);
//     const newState = noteReducer(state, action);

//     expect(newState).toHaveLength(1);
//     expect(newState).toContainEqual(action.payload);
//   });
//   it("Shold change the importance of the note", () => {
//     const state = [
//       {
//         content: "the app state is in redux store",
//         important: true,
//         id: 1,
//       },
//       {
//         content: "state changes are made with actions",
//         important: false,
//         id: 2,
//       },
//     ];

//     const action = {
//       type: "CHANGE_IMPORTANCE",
//       payload: {
//         id: 2,
//       },
//     };

//     deepFreeze(state);
//     const newState = noteReducer(state, action);

//     expect(newState).toHaveLength(2);

//     expect(newState).toContainEqual(state[0]);

//     expect(newState).toContainEqual({
//       content: "state changes are made with actions",
//       important: true,
//       id: 2,
//     });
//   });
// });
