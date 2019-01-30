import React from 'react';
import './addBook.css';
import { connect } from 'react-redux';
import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from '../../../Actions/actionTypes';
import MultiSelect from '../MultiSelect/MultiSelect';
import EmptyStateData from '../EmptyState/EmptyStateData';
import BookForm from './Book Form/BookForm';
import BookTable from '../BookTable/BookTable';
import PublisherTable from '../PublisherTable/PublisherTable';
import AuthorTable from '../AuthorTable/AuthorTable';
import FormSaveButtons from './FormSaveButtons/FormSaveButtons';
import FormUpdateButtons from './FormUpdateButtons/FormUpdateButtons';



const idGenerator = () => {
    return "BK-"+((Date.now().toString()).slice(8,13));
}


class AddBook extends React.Component {
    
    constructor(){
    super();
    this.state = { 
        isBookForm: false,
        isUpdate: false,
        isPublisher: false,
        isAuthor: false,
        multiSelectValue: 'None',
        bookId:'',
        bookName:'',
        author:'',
        publisher:'',
        date:'' 
        }
    }

    getPublisherAuthorTable = inputArray => {
        const arraySet = [...new Set(inputArray)];
        let counts = {}, i;

        for (i = 0; i < inputArray.length; i++) 
        {
          let num = inputArray[i];
          counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
    
        return arraySet.map((value) => { 
            return {
                name: value, 
                noOfBooks: counts[value]} 
            });
    }

    handleSaveBookData = () => {
        const { bookName, author, publisher, date } = this.state;
        const bookId =  idGenerator();
        if( bookName !== '' && author !== '' && publisher !== '' && date !== '' ) {
            this.props.dispatch({
                type: ADD_BOOK, 
                payload: {
                    bookId, 
                    bookName, 
                    author, 
                    publisher, 
                    date
                }
            });
            this.setState({
                bookName:'',
                author: '',
                publisher: '', 
                date: ''
            });
            alert("Data has been added succesfully");
        } else {
            console.log(this.refs.name);
            alert("Kindly add the required creadentials!");
        }
    }

    handleDeleteBook = value => {
        this.props.dispatch({
            type: DELETE_BOOK, 
            payload: value
        });
    }

    handleBookUpdate = () => {
        const { bookId, bookName, author, publisher, date } = this.state;

        if( bookName !== '' && author !== '' && publisher !== '' && date !== '' ) {
            this.props.dispatch({
                type: UPDATE_BOOK, 
                payload: {bookId, bookName, author, publisher, date}
            });
            this.setState({
                bookId: '',
                bookName:'', 
                author: '', 
                publisher: '', 
                date: ''
            });
            alert("Data has been updated succesfully");
        } else {
            alert("Kindly add the required creadentials!");
        }
    }
    
    handleMultiSelectValue = e => {
        switch(e.target.value)
        {
            case "Publisher":
            return this.setState({
                isPublisher: true, 
                isAuthor: false, 
                multiSelectValue: 'Publisher'
            });
            case "Author":
            return this.setState({
                isPublisher: false, 
                isAuthor: true, 
                multiSelectValue: 'Author'
            });
            case "None":
            return this.setState({
                isPublisher: false, 
                isAuthor: false, 
                multiSelectValue: 'None'
            });
            default:
            return;
        }
    }

    handeleGoBackFromMultiSelect = () => {
        this.setState({
            isPublisher: false, 
            isAuthor: false,
            multiSelectValue: 'None'
        });
    }

    handleInputBookName = e => {
        this.setState({
            bookName: e.target.value
        });
    }

    handleInputAuthor = e => {
        this.setState({
            author: e.target.value
        });
    }

    handleInputPublisher = e => {
        this.setState({
            publisher: e.target.value
        });
    }

    handleInputDate = e => {
        this.setState({
            date: e.target.value
        });
    }


    handleClickAddBook = () => {
        this.setState({
            isBookForm: true, 
            bookName:'', 
            author: '', 
            publisher: '', 
            date: ''
        });
    }

    handleUpdateBookClick = value => {
        this.setState({
            bookId: value.bookId, 
            bookName: value.bookName, 
            author: value.author, 
            publisher: value.publisher, 
            date: value.date, 
            isBookForm: true, 
            isUpdate: true
        });
    }

    handleGoBackClick = () => {
        this.setState({
            isBookForm:false, 
            isUpdate: false
        });
    }



    render() { 
        const publisherListTable = this.getPublisherAuthorTable(this.props.bookData.map(value => value.publisher));
        const authorListTable = this.getPublisherAuthorTable(this.props.bookData.map(value => value.author));
        return (   
        <React.Fragment>

            { 
            this.props.bookData.length < 1 && this.state.isBookForm === false &&
            <EmptyStateData 
                onClickAddEmptyState={this.handleClickAddBook} 
            />
            }
            
            {
            this.props.bookData.length >= 1  && this.state.isBookForm === false &&
            
            <div>
            <MultiSelect 
                onChangeMultiselectValue={this.handleMultiSelectValue}
                multiSelectValue={this.state.multiSelectValue}
            />
           { 
            !this.state.isPublisher && !this.state.isAuthor &&
            <BookTable
                isBookForm={this.state.isBookForm}
                bookData={this.props.bookData} 
                onAddClick={this.handleClickAddBook}
                onClickDelete={this.handleDeleteBook} 
                onClickUpdate={this.handleUpdateBookClick}
			/>
            }
            </div>
            
            }

            {
            publisherListTable.length>=1 && this.state.isPublisher && 
            <PublisherTable 
                publisherList={publisherListTable} 
                onGoBackClick={this.handeleGoBackFromMultiSelect}
            />
            }

            {
            authorListTable.length>=1 && this.state.isAuthor && 
            <AuthorTable  
                authorList={authorListTable} 
                onGoBackClick={this.handeleGoBackFromMultiSelect}
            />
            }
 
            {
            this.state.isBookForm === true && 
            <div className="Book-Form-Container">
                {this.state.isUpdate === false &&
                    <p className="Add-Book-Form-Title">Add Book</p>
                }
                {
                this.state.isUpdate && 
                    <p className="Upadte-Book-Form-Title">Update Book</p>
                }
                <br/>
                {
                <BookForm 
                    onChangeBookName={this.handleInputBookName}
                    onChangeAuthor={this.handleInputAuthor}
                    onChangePublisher={this.handleInputPublisher}
                    onChangeDate={this.handleInputDate}
                    bookNameValue={this.state.bookName}
                    authorValue={this.state.author}
                    publisherValue={this.state.publisher}
                    dateValue={this.state.date}
                />
                }

                {
                this.state.isUpdate === false && 
               <FormSaveButtons 
                    onClickSaveButton={this.handleSaveBookData}
                    onClickGoBackButton={this.handleGoBackClick}
               />
                }

                {
                this.state.isUpdate && 
                <FormUpdateButtons 
                    onClickUpdateButton={this.handleBookUpdate}
                    onClickGoBackButton={this.handleGoBackClick}
                />
                }
            </div>
            }

        </React.Fragment> );
    }
}

const mapStateToProps = state => {
    return{
        bookData: state.bookReducer.bookData
    }
}
 
export default connect(mapStateToProps, null)(AddBook);
