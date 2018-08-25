"use strict";
import { Redirect, RouteComponentProps } from "react-router";
import * as React from 'react';
import { Link } from "react-router-dom";
import { IAuthor } from "src/models/author";
import { AuthorApi } from "src/api/authorApi";


export interface IAuthorNewProps
  extends RouteComponentProps<any> {
  onSave: any

}

export interface IAuthorNewState {
  author: IAuthor;
  dirty: boolean;
  errors: any;
  redirect: boolean;
}


export class AuthorNew extends React.Component<IAuthorNewProps, IAuthorNewState> {
  private authorApi: AuthorApi;
  constructor(props: IAuthorNewProps) {
    super(props);
    this.authorApi = new AuthorApi();
    this.state = { author: { id: '', firstName: '', lastName: '' } as IAuthor, dirty: false, errors: {}, redirect: false };
    this.saveAuthor = this.saveAuthor.bind(this);
    this.authorFormIsValid = this.authorFormIsValid.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.setAuthorState = this.setAuthorState.bind(this);

  }

  async componentDidMount() {
    var id = this.props.match.params && this.props.match.params.id;
    const author = await this.authorApi.getAuthorById(id);

    this.setState({ author: author });
  }



  componentWillMount() {
    var authorName = this.props.match.params && this.props.match.params.name;

    if (authorName) {

      this.authorApi.getAuthorById(authorName).then((author: IAuthor) =>
        this.setState({ author: author })
      );
    }
  }
  setAuthorState(event: any): any {
    this.setState({ dirty: true });
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    this.setState({ author: this.state.author });
    return this.authorFormIsValid();
  }


  authorFormIsValid(): boolean {
    var formIsValid = true;
    this.setState({ errors: {} }); //borrar fallos anteriores.
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }
    else {
      this.state.errors.firstName = '';
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }
    else {
      this.state.errors.lastName = '';
    }

    this.setState({ errors: this.state.errors });
    return formIsValid;
  }

  onChangeFirstName(event: any) {
    const firstName = event.target.value;
    const author = this.state.author;
    author.firstName = firstName;
    this.setState({ author: author });
    debugger;
    this.authorFormIsValid();

  }

  onChangeLastName(event: any) {
    const lastName = event.target.value;
    const author = this.state.author;
    author.lastName = lastName;
    this.setState({ author: author });

  }

  saveAuthor(event: any): any {
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return;
    }

    this.authorApi.saveAuthor(this.state.author);
    this.setState({ dirty: false, redirect: true });
    toastr.success('Author saved.');

  }

  render(): JSX.Element {
    const author = this.state.author;
    return (
      <div id="author-new" >
        <h1>Author New Page</h1>
        {/* <td>{author.id}</td> */}
        <input onChange={this.onChangeFirstName} value={author.firstName}></input><br />
        <div>{this.state.errors.firtName}</div>
        <input onChange={this.onChangeLastName} value={author.lastName} ></input><br />
        <div>{this.state.errors.lastName}</div>
        <input type="submit" className="btn btn-default" value="Add" onClick={this.props.onSave} />
        {/* <td>{authorName}</td> */}


        <p><Link to="/authors">Back to Authors</Link></p>
      </div>
    );
  }

};




export default AuthorNew;