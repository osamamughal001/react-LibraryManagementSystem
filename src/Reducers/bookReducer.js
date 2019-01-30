import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from '../Actions/actionTypes';

const initialState= {
bookData:[]
}

const bookReducer = (state =initialState, action) => {
    switch(action.type)
    {
        case ADD_BOOK:
        // console.log(action.payload);
        return ({...state, bookData: state.bookData.concat(action.payload)});
        case DELETE_BOOK:
        // console.log(action.payload);
        // console.log("Clicked")
        return ({...state, bookData: state.bookData.filter(value => value.bookId !== action.payload )});
        case UPDATE_BOOK:
        return ({...state, bookData: state.bookData.map(value => 
           { if(value.bookId === action.payload.bookId)
            {
            return ({bookId: value.bookId, bookName: action.payload.bookName, author: action.payload.author, publisher: action.payload.publisher, date: action.payload.date })
            }
            else{
            return ({bookId: value.bookId, bookName: value.bookName, author: value.author, publisher: value.publisher, date: value.date})
            }
        })
        });
        default:
        return state;
    }
}
export default bookReducer;