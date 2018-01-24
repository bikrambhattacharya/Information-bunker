import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaBeer from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import { addEmail } from '../actions/Email';
import Modal from './modal';
import FaArrowCircleRight from
    "react-icons/lib/fa/arrow-circle-right";
class DisplayPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            showmodal: undefined
        };
    }
    facebook = this.props.blog.facebook;
    showmodal = false;
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email: email }))
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addEmail({ email: this.state.email }));
        this.setState(() => ({ showmodal: true }))
    }
    closeModal = () => {
        this.setState(() => ({ showmodal: undefined }))
    }
    render() {
        return (
            <div>
                <div className="displayPage">

                    <p className="display-page-box display-page-who ">{this.props.blog.title}</p>
                    <p className="display-page-box display-page-what">{this.props.blog.post}</p>
                    <div className="display-page-box">
                        <div className=" display-page-message">{this.props.blog.message}
                        </div>
                        <p>contact me:</p>
                        <div className="subcription-box-wrapper">
                            <div >
                                <form onSubmit={this.handleSubmit} className="subcription-box">
                                    <input type="email" size="26" className="subcription-box-email" onChange={this.onEmailChange} />
                                    <button className="subcription-button"><FaArrowCircleRight size={42} className="subcription-box-icon" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="follow-us">Follow me on:
            <a href={this.facebook} target="_blank"><FaBeer size={42} className="Fa" /></a>
                    <a href={this.props.blog.twitter} target="_blank"><FaTwitter size={42} className="Fa" /></a>
                </div>
                <Modal ShowModal={this.state.showmodal} closeModal={this.closeModal} />
            </div>
        );
    }
};
const mapStateToProps = (state, props) => {
    return {
        blog: state.blog.find((post) => post.id === props.match.params.id),
        email: state.email
    };
};
export default connect(mapStateToProps)(DisplayPost);