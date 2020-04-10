import React from 'react'

import {renderRoutes} from 'react-router-config';

import {NavLink} from 'react-router-dom';

import {Top,Tab,TabItem} from './style'



function Home (props){

    const { route } = props;

    const linkList = [

        { link:'/recommend',title:'推荐' },

        { link:'/singers',title:'歌手' },

        { link:'/rank',title:'排行榜' }

    ];

    return (<div>
        
            <Top>

             <span className="iconfont menu">&#xe65c;</span>
             
             <span className="title">WebApp</span>
             
             <span className="iconfont search">&#xe62b;</span>    
                
            </Top>

            <Tab>

                {linkList.map((i,k)=>{

                return <NavLink key={k} to={i.link} activeClassName="selected"><TabItem><span>{i.title}</span></TabItem></NavLink>    

                })}
                
            </Tab> 

            {renderRoutes(route.routes)}   

        </div>)

}

export default React.memo(Home);