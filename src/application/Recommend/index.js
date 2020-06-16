import React,{useState,useRef,useEffect,createRef} from 'react';

import {Content} from './style';

import {connect} from 'react-redux';

import Slider from '../../components/slider/index';

import * as actionTypes  from './store/actionCreators';

import Scroll from '../../components/scroll/index';

import RecommendList from '../../components/list/index';

import {forceCheck} from "react-lazyload";

import Loading from "../../baseUI/loading/index";

function Recommend (props){

     //mock 数据

    const {bannerList,recommendList,enterLoading} = props;

    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

    useEffect (() => {

        if(!bannerList.size){

            getBannerDataDispatch ();

        }

       if(!recommendList.size){

        getRecommendListDataDispatch ();

       }
        
    }, []);

    const bannerListJS = bannerList ? bannerList.toJS () : [];

    const recommendListJS = recommendList ? recommendList.toJS () :[];


    return(

        <Content>

            <Scroll className="list" onScroll={forceCheck}>

                <div>

                    <Slider bannerList={bannerListJS}></Slider>

                    <RecommendList recommendList={recommendListJS}></RecommendList>

                </div>

            </Scroll>

            {

                enterLoading?

                <Loading></Loading> 

                :null

            }

           

        </Content>

    )

}

const mapStateToProps = (state) =>{

  return {

      bannerList: state.getIn (['recommend', 'bannerList']),

      recommendList: state.getIn (['recommend', 'recommendList']),

      enterLoading:state.getIn(['recomend','enterLoading'])

  }

};

// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {

    return {
        getBannerDataDispatch () {
            dispatch (actionTypes.getBannerList ());
        },
        getRecommendListDataDispatch () {
            dispatch (actionTypes.getRecommendList ());
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Recommend));