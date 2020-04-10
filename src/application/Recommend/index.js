import React,{useState,useRef,useEffect,createRef} from 'react';

import {Content} from './style';

import {connect} from 'react-redux';

import Slider from '../../components/slider/index';

import * as actionTypes  from './store/actionCreators';

import Scroll from '../../components/scroll/index';

import RecommendList from '../../components/list/index';

function Recommend (props){

     //mock 数据

    const {bannerList,recommendList} = props;

    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

    useEffect (() => {
        getBannerDataDispatch ();


        getRecommendListDataDispatch ();
        //eslint-disable-next-line
    }, []);

    const bannerListJS = bannerList ? bannerList.toJS () : [];

    const recommendListJS = recommendList ? recommendList.toJS () :[];


    return(

        <Content>

            <Scroll className="list">

                <div>

                    <Slider bannerList={bannerListJS}></Slider>

                    <RecommendList recommendList={recommendListJS}></RecommendList>

                </div>

            </Scroll>

        </Content>

    )

}

const mapStateToProps = (state) =>{

  return {

      bannerList: state.getIn (['recommend', 'bannerList']),

      recommendList: state.getIn (['recommend', 'recommendList'])

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