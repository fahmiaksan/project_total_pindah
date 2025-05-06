interface FormState {
  data: {
    author: string[];
    ratings: number[];
    reviews: string[];
  };
  rating: number;
  hover: number;
  feedback: string;
  loading: boolean;
  disabled: boolean;
  error: string;
}

type FormAction =
  | { type: 'SET_DATA'; payload: FormState['data'] }
  | { type: 'SET_RATING'; payload: number }
  | { type: 'SET_HOVER'; payload: number }
  | { type: 'SET_FEEDBACK'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_DISABLED'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'RESET_FORM' };

export const initialState: FormState = {
  data: {
    author: [],
    ratings: [],
    reviews: [],
  },
  rating: 0,
  hover: 0,
  feedback: '',
  loading: false,
  disabled: false,
  error: '',
};

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    case 'SET_HOVER':
      return { ...state, hover: action.payload };
    case 'SET_FEEDBACK':
      return { ...state, feedback: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_DISABLED':
      return { ...state, disabled: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
} 