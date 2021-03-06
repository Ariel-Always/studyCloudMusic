import React from 'react';

import { 
    ListWrapper,
    ListItem,
    List
  } from './style';

import { getCount } from '../../api/utils'; 

import lazyload from 'react-lazyload';


function RecommendList(props){

    const { recommendList } = props;

    return(

        <ListWrapper>

            <h1 className="title">推荐歌单</h1>

            <List>

                {

                    recommendList.map((item,index)=>{

                        return(

                            <ListItem key={index}>
                                <div className="img_wrapper">
                                <div className="decorate"></div>
                                    {/* 加此参数可以减小请求的图片资源大小 */}

                                    <lazyload placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="图片"></img>}>

                                        <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>

                                    </lazyload>        

                                
                                <div className="play_count">
                                    <i className="iconfont play">&#xe885;</i>
                                    <span className="count">{getCount (item.playCount)}</span>
                                </div>
                                </div>
                                <div className="desc">{item.name}</div>
                            </ListItem>

                        )

                    })

                }
                
            </List>    

        </ListWrapper>     

    );

}

export default RecommendList;