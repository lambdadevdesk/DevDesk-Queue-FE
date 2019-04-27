import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  ADD_TICKET_START,
  ADD_TICKET_SUCCESS,
  ADD_TICKET_FAIL,
  EDIT_TICKET_START,
  EDIT_TICKET_SUCCESS,
  EDIT_TICKET_FAIL,
  DELETE_TICKET_START,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_FAIL,
  ADD_TEST_TICKET,
  CREATE_TEST_TICKET,
  VIEW_TEST_TICKETS,
  DELETE_TEST_TICKET_SUCCESS,
  UPDATE_TEST_TICKET,
  TOGGLE_ADMIN,
  RESOLVE_TICKET,
  ASSIGN_TICKET
} from "../actions";

const initialState = {
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false,
  creatingTicket: false,
  updatingTicket: false,
  resolvingTicket: false,
  deletingTicket: false,
  status: null,
  error: null,
  student: {
    id: 1337,
    name: "Mace Windu",
    email: "Mace.Windu@2ez.gg",
    cohort: "FSWPT - 4",
    isAdmin: false,
    openedTickets: []
  },
  admin: {
    id: 1007,
    name: "Admin",
    email: "Admin@example.com",
    isAdmin: true,
    myTickets: []
  },
  tickets: [
    {
      id: 0,
      title: "Reduce method not working",
      description:
        "words.reduce( word => word....) Doesn't work. Please explain reduce to me",
      category: "JavaScript",
      comments: [],
      resolved: false,
      assigned: false,
      createdBY: {
        id: 1337
      }
    },
    {
      id: 1,
      title: "I can't deploy to Netlify",
      description:
        "Netlify Keeps giving me an error message when I go to deploy my react Application. Please Help",
      category: "React",
      comments: [],
      resolved: false,
      assigned: false,
      createdBY: {
        id: 1337
      }
    }
  ],
  categories: ["None", "React", "JavaScript", "HTML", "CSS"],
  isAdmin: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingData: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        tickets: action.payload
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    case ADD_TICKET_START:
      return {
        ...state,
        error: "",
        creatingTicket: true
      };
    case ADD_TICKET_SUCCESS:
      return {
        ...state,
        creatingTicket: false,
        tickets: action.payload
      };
    case ADD_TICKET_FAIL:
      return {
        ...state,
        creatingTicket: false,
        error: action.payload
      };
    case DELETE_TICKET_START:
      return {
        ...state,
        error: "",
        deletingTicket: true
      };
    case DELETE_TICKET_SUCCESS:
      return {
        ...state,
        deletingTicket: false,
        tickets: action.payload
      };
    case DELETE_TICKET_FAIL:
      return {
        ...state,
        deletingTicket: false,
        error: action.payload
      };
    case EDIT_TICKET_START:
      return {
        ...state,
        error: "",
        updatingTicket: true
      };
    case EDIT_TICKET_SUCCESS:
      return {
        ...state,
        updatingTicket: false,
        tickets: action.payload
      };
    case EDIT_TICKET_FAIL:
      return {
        ...state,
        updatingTicket: false,
        error: action.payload
      };
    // Test Reducers to testing form functionality
    case ADD_TEST_TICKET:
      return {
        ...state,
        error: "",
        tickets: [...state.tickets, action.payload],
        creatingTicket: false
      };
    case CREATE_TEST_TICKET:
      return {
        ...state,
        creatingTicket: true
      };
    case VIEW_TEST_TICKETS:
      return {
        ...state,
        creatingTicket: false
      };
    // Testing Delete
    case DELETE_TEST_TICKET_SUCCESS:
      return {
        ...state,
        tickets: state.tickets.filter(ticket => ticket.id !== action.payload)
      };
    case UPDATE_TEST_TICKET:
      return {
        ...state
      };
    case TOGGLE_ADMIN:
      return {
        ...state,
        isAdmin: !state.isAdmin
      };
    case RESOLVE_TICKET:
      return {
        ...state,
        tickets: state.tickets.map(ticket => {
          if (Number(ticket.id) === Number(action.id)) {
            ticket.resolved = !ticket.resolved;
          }
          return ticket;
        })
      };
    case ASSIGN_TICKET:
      return {
        ...state,
        tickets: state.tickets.map(ticket => {
          if (Number(ticket.id) === Number(action.id)) {
            ticket.assigned = !ticket.assigned;
          }
          return ticket;
        })
      };

    default:
      return state;
  }
};

export default reducers;

// const alteredList = state.tickets.map(ticket => {
//   if (Number(ticket.id) === Number(action.id)) {
//     ticket.resolved = !ticket.resolved;
//   }
//   return ticket;
// });
// return {
//   ...state,
//   tickets: alteredList
// };
