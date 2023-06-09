import React from 'react';
import Style from './BiliMessage.less';

interface BiliMessageProps {
    content: string;
}

function bignum(num: any){
    if (num<10000){
        num = num + '';
    }else if (num<100000){
        num = (num / 10000).toFixed(1) + 'W'
    }else if (num<10000000){
        num = (num / 10000).toFixed(0) + 'W'
    }else{
        num = (num / 10000000).toFixed(0) + 'KW'
    }
    return num;
}


function BiliMessage(props: BiliMessageProps) {
    // eslint-disable-next-line react/destructuring-assignment
    const jsc = JSON.parse(props.content);
    const blink = `https://www.bilibili.com/video/${jsc.bvid}`;

    const face = `https://ttkai.top/bpi${/hdslb.com(.*)/.exec(jsc.owner.face)[1]}@20h_!web-comment-note.webp`
    const cover= `https://ttkai.top/bpi${/hdslb.com(.*)/.exec(jsc.pic       )[1]}@200w_!web-comment-note.webp`


    return (
        <div className={Style.biliMessage}>
            <div>

                <div className={Style.title}>{jsc.title}</div>
                <hr />

                <div className={Style.clo}>
                    <img src={face} className={Style.face}/>
                    <div className={Style.upname}>{jsc.owner.name}</div>
                    <div className={Style.up}>UP主</div>
                </div>

                

                <a href={blink} target="_blank" className={Style.blink}>
                    <img src={cover}/>
                </a>

                <div className={Style.st}>
                    <div>{bignum(jsc.stat.view)}播放</div>
                    <div>{bignum(jsc.stat.like)}点赞</div>
                    <div>{bignum(jsc.stat.danmaku)}弹幕</div>
                </div>
            </div>
        </div>
    );
}

export default BiliMessage;
