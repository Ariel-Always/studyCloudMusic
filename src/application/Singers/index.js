import React,{useState} from 'react';

import Horizen  from '../../baseUI/horizen-item/index';

import { categoryTypes,alphaTypes } from '../../api/config';

import { NavContainer,ListContainer,List,ListItem } from './style';

import Scroll from '../../components/scroll/index';


function Singers (){

    const [category, setCategory] = useState('');

    const [alpha, setAlpha] = useState('');
  
    const handleUpdateAlpha = (val) => {
      setAlpha (val);
    }
  
    const handleUpdateCatetory = (val) => {
      setCategory (val);
    }

    const singerList = [1, 2,3, 4,5,6,7,8,9,10,11,12].map (item => {
        return {
          picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
          name: "隔壁老樊",
          accountId: 277313426,
        }
    }); 
      

    const renderSingerList = () => {
        return (
          <List>
            {
              singerList.map ((item, index) => {
                return (
                  <ListItem key={item.accountId+""+index}>
                    <div className="img_wrapper">
                      <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"/>
                    </div>
                    <span className="name">{item.name}</span>
                  </ListItem>
                )
              })
            }
          </List>
        )
    };


    return (

        <div>

        <NavContainer>

            <Horizen handleClick={handleUpdateCatetory} oldVal={category} list={categoryTypes} title={'分类(默认热门)'}></Horizen>

            <Horizen handleClick={handleUpdateAlpha} oldVal={alpha} list={alphaTypes} title={'字母:'}></Horizen>

        </NavContainer> 

        <ListContainer>

            <Scroll>

                {renderSingerList()}
                
            </Scroll>  

        </ListContainer> 

        </div>       

)
    
    
      

}

export default React.memo(Singers);