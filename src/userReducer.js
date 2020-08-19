export const userReducer = (state, action) => {
  switch (action.type) {
    case "EDIT_PERSON":
      return [
        {
          firstName: action.person.firstName,
          lastName: action.person.lastName,
          email: action.person.email,
          color: action.person.color
        }
      ];
    default:
      return state;
  }
};
