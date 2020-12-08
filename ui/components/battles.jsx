import React, {useState} from 'react'
import useAxios from "../services/useAxios";
import Loader from "./loader";
import _Empty from "./empty";
import AllBattleList from "./allBattleList";

export default function Battles(props) {
  let search = props.search
  const [filters, setFilters] = useState([])
  const {data: battles, error, loading} = useAxios('/api/battles.getAll', {
    project: {
      name: 1,
      _id: 1,
      year: 1,
      attacker_king: 1,
      defender_king: 1,
      battle_type: 1,
      attacker_size: 1,
      location: 1,
      defender_size: 1,
      attacker_commander: 1,
      defender_commander: 1,
      attacker_outcome: 1
    }
  })

  if (search === '-')
    search = ''
  let filterBattles = search && search.length && battles && battles.length ? battles.filter(b => Object.keys(b).some(k => b[k] ? b[k].toString().toLowerCase().includes(search.toLowerCase()) : false)) : battles;
  return loading ? (<Loader/>) : (filterBattles && filterBattles.length ? (
      <AllBattleList battles={filterBattles}/>) : (
      <_Empty
          description={error ? error : search && search.length ? 'No Battle Found' : battles && battles.length === 0 ? 'No Battle' : 'Something went wrong'}/>))
}