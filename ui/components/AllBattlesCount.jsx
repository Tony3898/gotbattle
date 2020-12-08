import React from "react";
import useAxios from "../services/useAxios";
import Loader from "./loader";
import _Empty from "./empty";
import Count from "./count";

export default function AllBattlesCount() {
  const {data: battles, error, loading} = useAxios('/api/battles.getAll')
  return loading ? (<Loader/>) : (battles && battles.length ? (
      <div className={'row'}>
        <div className={'col-sm-12'}>
          <div className={'card'}>
            <img src='../../public/assets/images/swords.png' className={'img-icon'}/>
            <br/>
            <h3 className={'error-text'}><Count duration={2} number={battles.length}/></h3>
            <h5 className={'error-text'}>Total Battles</h5>
          </div>
        </div>
      </div>) : (
      <_Empty
          description={error ? error : battles && battles.length === 0 ? 'No Battle' : 'Something went wrong'}/>))
}