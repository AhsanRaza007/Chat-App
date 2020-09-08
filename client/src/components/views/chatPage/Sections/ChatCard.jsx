import React from "react";
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';

function ChatCard(props) {
    //console.log(props);
    //console.log(chatRightAlign);
    const chatRightAlign = false;
        if(props.user._id)
            chatRightAlign = props.user._id === props.chat.sender._id;
    return (
        
        <div style={{ width: '100%', display: 'flex', justifyContent: chatRightAlign?'flex-end':'flex-start'}}>
            <Comment
                author={props.chat.sender.name}
                avatar={
                    <Avatar
                        src={props.chat.sender.image} alt={props.chat.sender.name}
                    />
                }
                content={
                    props.chat.message.substring(0, 7) === "uploads" ?
                        // this will be either video or image 

                        props.chat.message.substring(props.chat.message.length - 3, props.chat.message.length) === 'mp4' ?
                            <video
                                style={{ maxWidth: '300px' }}
                                //src={`http://localhost:5000/${props.chat.message}`}
                                src={`https://secure-dusk-44145.herokuapp.com/${props.chat.message}`}
                                alt="video"
                                type="video/mp4" controls
                            />
                            :
                            <img
                                style={{ maxWidth: '300px' }}
                                src={`https://secure-dusk-44145.herokuapp.com/${props.chat.message}`}
                                alt="img"
                            />
                        :
                        <p>
                            {props.chat.message}
                        </p>
                }
                datetime={
                    <Tooltip title={moment(props.chat.updatedAt).format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment(props.chat.updatedAt).fromNow()}</span>
                    </Tooltip>
                }
            />
        </div>
    )
}

export default ChatCard;