import React, { Component } from 'react';
import {Form, Icon, Button, Row, Col, Input} from 'antd';
import io  from 'socket.io-client';
import {connect } from 'react-redux'
import moment from 'moment';
import {getChats, afterPostMessage} from '../../../_actions/chat_actions'
import ChatCard from './Sections/ChatCard'
import Dropzone from 'react-dropzone'
import Axios from 'axios';


class chatPage extends Component {
    state={
        chatMessage: "",
    }
    componentDidUpdate(){
        this.messagesEnd.scrollIntoView({behavior: 'smooth'})
    }
    componentDidMount(){
        let server="https://secure-dusk-44145.herokuapp.com/";
        this.socket = io(server)
        this.props.dispatch(getChats())
        this.socket.on("Output Chat Message", messageFromBackEnd=>{
            //console.log(messageFromBackEnd);
            this.props.dispatch(afterPostMessage(messageFromBackEnd))
        })
    }

    handleSearchChange = (e)=>{
        this.setState({
            chatMessage: e.target.value
        })
    }

    renderCards = () => {
        //console.log(this.props.user);
        console.log(this.props.chats)
        //console.log(this.props.chats.chats);
        if(this.props.chats.chats){
            if(this.props.chats.chats.isAuth !== undefined)
                return;
            return this.props.chats.chats.map((chat)=> 
                <ChatCard key={chat._id} chat={chat} user={this.props.user.userData}/> 
            )
        }else{
            return;
        }
        
    }

    onDrop = (files) =>{
        console.log(files);
        let formData = new FormData;
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }

        formData.append("file", files[0])

        Axios.post('api/chat/uploadFiles', formData, config)
        .then(res=>{
            if(res.data.success){
                let chatMessage = res.data.url;
                let userId = this.props.user.userData._id;
                let userName = this.props.user.userData.name;
                let userImage = this.props.user.userData.image;
                let nowTime = moment();
                let type = 'VideoOrImage';

                this.socket.emit("Input Chat Message", {
                    chatMessage,
                    userId,
                    userName,
                    userImage,
                    nowTime,
                    type
                });
            }
        })
    }

    submitChatMessage = (e) => {
        e.preventDefault();
        let chatMessage = this.state.chatMessage;
        let userId = this.props.user.userData._id;
        let userName = this.props.user.userData.name;
        let userImage = this.props.user.userData.image;
        let nowTime = moment();
        let type = 'text';
        this.socket.emit("Input Chat Message", {
            chatMessage,
            userId,
            userName,
            userImage,
            nowTime,
            type
        })
        this.setState({chatMessage: ""})
    }

    render() {
        return (
            <>
            <div>
                <p style={{fontSize: '2rem', textAlign: 'center', }}>Real Time Chat</p>
            </div>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                <div className="infinite-container" style={{height:"500px", overflowY:"scroll"}}>
                    {
                        
                        this.props.chats && (
                        <div>{this.renderCards()}</div>
                        )
                    }
                    <div
                        ref={el=>{
                                this.messagesEnd = el;
                        }}
                        style={{float: 'left', clear: 'both'}}
                    />
                </div>
                <Row>
                    <Form layout="inline" margin='10px auto' onSubmit={this.submitChatMessage}>
                        <Col span={18}>
                            <Input 
                                id='message'
                                prefix={<Icon type="message" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Let's get Talking"
                                type="text"
                                value={this.state.chatMessage}
                                onChange={this.handleSearchChange}
                            />
                        </Col>
                        <Col span={3}>
                            <Dropzone onDrop={this.onDrop}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <Button>
                                            <Icon type="upload" />
                                        </Button>
                                    </div>
                                    </section>
                                )}
                            </Dropzone>
                        </Col>
                        <Col span={3}>
                            <Button type="primary" onClick={this.submitChatMessage} style={{width: '100%'}} htmlType="submit">
                                <Icon type="enter" />
                            </Button>
                        </Col>
                    </Form>
                </Row>
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        chats: state.chat
    }
}

export default connect(mapStateToProps)(chatPage);