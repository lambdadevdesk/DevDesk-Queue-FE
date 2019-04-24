import {} from "../actions";

const initialState = {
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false,
  creatingTicket: false,
  updatingTicket: false,
  resolvingTicket: false,
  status: null,
  error: null,
  students: [
    {
      id: "",
      name: "",
      email: "",
      cohort: "",
      isStudent: true,
      openedTickets: []
    }
  ],
  admins: [
    {
      id: "",
      name: "",
      email: "",
      isAdmin: true,
      myTickets: []
    }
  ],
  tickets: [
    {
      id: "",
      title: "",
      shortDescription: "",
      description: "",
      category: [],
      comments: [],
      resolved: false,
      assigned: false
    }
  ]
};

const reducers = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default reducers;
