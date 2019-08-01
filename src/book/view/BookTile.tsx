import React from 'react';
import { Profile } from '../../application/model/Profile';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import { Book } from '../../book/model/Book';
import { IssuedBook } from '../../book/model/IssuedBook';


interface Props {
    title: string;
    author: string;
    isbn: string;
    image: string;
    description: string;
    genre: string;
    id: string;
    profile: Profile;
    copies: number;
    updateStatus: boolean;
    updateBook(book: Book): void;
    deleteBook(id: string):void;
    deleteStatus: boolean;
    issuedBookFlag: boolean;
    issueBook(issuedBook: IssuedBook): void;
    
}

interface InternalState{
    author: string;
    title: string;
    isbn: string;
    description: string;
    genre: string;
    id: string;
    profile: Profile;
    image: string;
    popUpOpen: boolean;
    type: string;
    copies: number;
    modalAuthor: string;
    modalTitle: string;
    modalDescription: string;
    modalGenre: string;
    modalCopies: number;
    //issuedBook: any;
    issuedDate: string;
    returnDate: string;
    issuedBookFlag: boolean;
}

class BookTile extends React.Component<Props, InternalState> {

    constructor(props: Props) {
    
        super(props);
        console.log('coming once');
        this.state = {
            author: props.author,
            title: props.title,
            isbn: props.isbn,
            description: props.description,
            genre: props.genre,
            id: props.id,
            profile: props.profile,
            image: props.image,
            popUpOpen: false,
            type: '',
            copies: props.copies,
            modalAuthor: props.author,
            modalTitle: props.title,
            modalDescription: props.description,
            modalGenre: props.genre,
            modalCopies: props.copies,
            issuedDate: '',
            returnDate: '',
            issuedBookFlag: props.issuedBookFlag
        }
        this.closeButton = this.closeButton.bind(this);
        
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
        this.handleCopies = this.handleCopies.bind(this);
        this.reset = this.reset.bind(this);
        this.updateBook=this.updateBook.bind(this);
        this.deleteBook=this.deleteBook.bind(this);
        this.cancelDelete=this.cancelDelete.bind(this);
        this.issueBook=this.issueBook.bind(this);
    }

    reset = () => {

        this.setState( {
            modalAuthor: '',
            modalTitle: '',
            modalDescription: '',
            modalGenre: '',
            modalCopies: 0
        });
    }


    handleAuthor(event: any) {
        this.setState( {
            modalAuthor: event.target.value
        });
    } 

    handleTitle(event: any) {
        this.setState( {
            modalTitle: event.target.value
        });
    } 

    handleDescription(event: any) {
        this.setState( {
            modalDescription: event.target.value
        });
    } 

    handleGenre(event: any) {
        this.setState( {
            modalGenre: event.target.value
        });
    } 

    handleCopies(event: any) {
        this.setState( {
            modalCopies: event.target.value
        });
    } 

    public closeButton() {
        this.setState ({
            popUpOpen: false,
            modalAuthor: this.state.author,
            modalTitle: this.state.title,
            modalDescription: this.state.description,
            modalGenre: this.state.genre,
            modalCopies: this.state.copies
        });
    }

    public openModalPopUp(type: string) {
        this.setState({
            popUpOpen: true,
            type
        })
    }

    updateBook = (event: any) => {
        event.preventDefault();
        const book: Book = {
            title: this.state.modalTitle,
            author: this.state.modalAuthor,
            copies: this.state.modalCopies,
            description: this.state.modalDescription,
            genre: this.state.modalGenre,
            isbn: this.state.isbn,
            id: this.state.id,
        }
        this.props.updateBook(book);
    }
    
    deleteBook = (event: any) =>{
        this.props.deleteBook(this.state.id);
    }
    
    cancelDelete(){
    this.setState({
            popUpOpen: false,
        })
    }
    
    componentDidMount(){
    this.setState({
            //todayDate: new Date(),
            issuedDate: new Date().toISOString().substr(0, 10),
            returnDate: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+14).toISOString().substr(0, 10)
        })
    
            
    }
    issueBook=(event: any) =>{
        event.preventDefault();
        const issuedBook: IssuedBook = {
            issuedDate: this.state.issuedDate,
            returnDate: this.state.returnDate,
            id: this.state.id,
            userId: this.state.profile.id!
        }
        this.props.issueBook(issuedBook);
    }
    render() {

        const {author, title, isbn, description, genre, id, profile, image, popUpOpen, type, issuedBookFlag } = this.state;
        const showAdminButtons: boolean = typeof profile !== 'undefined' && profile.role ==='ADMIN' ? true: false;
        return (
             <>
                <div style={{minHeight: '20vh', display:'flex', justifyContent:'center' }}>
                    <div style = {{display:'flex', borderRadius: '20px', boxShadow: '0 0 12px #b3cccc', marginTop: '10px', marginBottom: '10px'}}>
                        <div style={{flex:'2'}}>Book thumbnail here</div>
                        <div style={{flex:'4', display:'flex', flexDirection:'column', marginTop: '10px' }}>
                            <div style={{flex:'1', fontSize: '23px'}}>
                                <span>{title}</span>
                            </div>
                            <div style={{flex:'1', fontSize: '18px'}}>
                                <span>{author}</span>
                            </div>
                            <div style={{flex:'4', fontSize: '14px'}}>
                                <span>{description}</span>
                            </div>
                        </div>
                        <div style={{flex:'3', display:'flex', flexDirection: 'column'}}>
                            <div style={{flex:'1', display:'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'center'}}>
                                {showAdminButtons &&
                                        <div>
                                            <img style={{width: '45px', height: '45px', cursor: 'pointer'}} 
                                                src={process.env.PUBLIC_URL + '/images/editBook.png'} 
                                                title='Edit Book'
                                                onClick={() => this.openModalPopUp('Edit')}
                                            />
                                        </div>
                                }
                                {showAdminButtons &&
                                        <div>
                                            <img 
                                                style={{width: '45px', height: '45px', cursor: 'pointer'}} 
                                                src={process.env.PUBLIC_URL + '/images/deleteBook.jpg'} 
                                                title='Delete Book' 
                                                onClick={() => this.openModalPopUp('Delete')}
                                            />
                                        </div>
                                }
                                {!issuedBookFlag && <div>
                                    <img style={{width: '45px', height: '45px', cursor: 'pointer'}} 
                                        src={process.env.PUBLIC_URL + '/images/addBook.png'} 
                                        title='Issue Book'
                                        onClick={() => this.openModalPopUp('Issue')}
                                    />
                                </div>}
                               {issuedBookFlag && <div>
                                    <img 
                                        style={{width: '45px', height: '45px', cursor: 'pointer'}} 
                                        src={process.env.PUBLIC_URL + '/images/reIssue.png'} 
                                        title='Renew Book'
                                        onClick={() => this.openModalPopUp('Renew')}
                                    />
                                </div>}
                                {issuedBookFlag && <div>
                                    <img 
                                        style={{width: '45px', height: '45px', cursor: 'pointer'}} 
                                        src={process.env.PUBLIC_URL + '/images/returnBook.png'} 
                                        title='Return Book'
                                        onClick={() => this.openModalPopUp('Return')}
                                    />
                                </div>}
                            </div>
                            <div style={{flex:'1'}}>ISBN image here</div>
                        </div>
                    </div>
                </div>
                { popUpOpen && <div>
                    <Modal 
                            show= {this.state.popUpOpen} 
                            onHide={this.closeButton}
                            size="xl"
                            aria-labelledby="contained-modal-title-vcenter"
                            dialogClassName=''
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>{type} Book</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                { type === 'Edit' && 
                                    <div style={{display: 'flex', justifyContent:'center'}}>
                                        <div style={{paddingTop:'20px', paddingBottom:'20px',paddingRight:'5px'}}>
                                            <div className={''}><span>Title</span></div>
                                            <div><span>Author</span></div>
                                            <div><span>Genre</span></div>
                                            <div><span>Copies</span></div>
                                            <div><span>Description</span></div>
                                            
                                        </div>
                                        <div style={{paddingTop:'20px',paddingBottom:'20px',paddingLeft:'5px'}}>
                                            <div>
                                                <input type="text" value={this.state.modalTitle} onChange={this.handleTitle}/>
                                            </div>
                                            <div>
                                                <input type="text" value={this.state.modalAuthor} onChange={this.handleAuthor}/>
                                            </div>
                                            <div>
                                                <input type="text" value={this.state.modalGenre} onChange={this.handleGenre}/>
                                            </div>
                                            <div>
                                                <input type="number" value={this.state.modalCopies} onChange={this.handleCopies}/>
                                            </div>
                                            <div>
                                                <textarea value={this.state.modalDescription} onChange={this.handleDescription}  />
                                            </div>

                                        </div>
                                    </div>                          
                            
                                }
                                { type === 'Delete' && 
                                <div>
                                <span>Are you sure you want to delete the book and the copies</span>
                                
                                
                                </div>}
                                { type === 'Issue' && 
                                <div>
                                <span>{this.state.modalTitle}</span>
                                <div>
                                <div><span>IssueDate</span></div>
                                <div><input disabled type="date" min={this.state.issuedDate} value={this.state.issuedDate} max={this.state.issuedDate}/></div>
                                </div>
                                <div>
                                <div><span>ReturnDate</span></div>
                                <div><input disabled  type="date" min={this.state.returnDate} value={this.state.returnDate} max={this.state.returnDate}/></div>
                                </div>
                                
                                
                                </div>}
                                { type === 'Return' && <span>Are you sure to return the book?</span>}
                            </Modal.Body>

                            <Modal.Footer>
                                { type === 'Edit' &&
                                <div>
                                    <input 
                                type="button" 
                                value="Update" 
                                style={{ 
                                    height: '50px', 
                                    width: '90px', 
                                    fontSize: '18px', 
                                    color:'white', 
                                    backgroundColor:'#33adff',
                                    border: 'none', 
                                    borderRadius: '10px'
                                }}
                                onClick={this.updateBook}
                                />
                            <input 
                                type="button" 
                                value="Reset" 
                                style={{ 
                                    height: '50px', 
                                    width: '90px', 
                                    fontSize: '18px', 
                                    color:'white', 
                                    backgroundColor:'red', 
                                    backgroundImage: 'linear-gradient(red,lightred)',
                                    borderRadius: '10px',
                                    border:'none',
                                    fontWeight: 140
                                }}
                                onClick={this.reset} 
                            />

                                </div>
                                }
                                { type === 'Delete' &&
                                
                                    <div>
                                        <input 
                                            type= "button"
                                            value="Yes"
                                            style={{
                                                height: '50px',
                                                width: '90px',
                                                fontSize: '18px',
                                                color: 'white',
                                                backgroundColor: '#33adff',
                                                border: 'none',
                                                borderRadius: '10px'
                                        }}
                                        onClick={this.deleteBook}
                                        />
                                        <input 
                                type="button" 
                                value="cancel" 
                                style={{ 
                                    height: '50px', 
                                    width: '90px', 
                                    fontSize: '18px', 
                                    color:'white', 
                                    backgroundColor:'#33adff', 
                                    borderRadius: '10px',
                                    border:'none',
                                }}
                                onClick={this.cancelDelete} 
                            />
                                    </div>
                                }
                                { type === 'Issue' &&
                                <div>
                                    <input 
                                type="button" 
                                value="Issue" 
                                style={{ 
                                    height: '50px', 
                                    width: '90px', 
                                    fontSize: '18px', 
                                    color:'white', 
                                    backgroundColor:'#33adff',
                                    border: 'none', 
                                    borderRadius: '10px'
                                }}
                                onClick={this.issueBook}
                                />
                                </div>
                                }
                            </Modal.Footer>
                    </Modal>
                </div>}
            </>

        )
    }
    
    componentDidUpdate(prevProps: Props) {
        console.log('entering here with ' + prevProps.issuedBookFlag + '->' + this.props.issuedBookFlag);
        const prev = prevProps;
        const current = this.props;
        const popUpOpenStatus = prev.updateStatus !== current.updateStatus;
        const flag = _.isEqual(prev, current);
        if(!flag) {
            this.setState({
                author: this.props.author,
                title: this.props.title,
                isbn: this.props.isbn,
                description: this.props.description,
                genre: this.props.genre,
                id: this.props.id,
                image: this.props.image,
                copies: this.props.copies,
                popUpOpen: false,
                modalAuthor: this.props.author,
                modalTitle: this.props.title,
                modalDescription: this.props.description,
                modalGenre: this.props.genre,
                modalCopies: this.props.copies,
                issuedBookFlag: this.props.issuedBookFlag
            });
        }
    }
    
    
}
export default BookTile;
