import fetch from 'isomorphic-fetch';
import Container from "./Components/Container";
import Search from "./Components/Search";
import Collection from "./Components/Collection";
import {useEffect, useState} from "react";


const Index = (props) => {
    const [Search, setSearch] = useState('');

    const search = async () => {
        let url = `https://api.github.com/users/${Search}/`;
        let response = await fetch(url);
        let final = await response.json();

        console.log(final);
    }

  return(
      <Container>
          <h3 className={'mt-4'}>Finder</h3>
          <div className={'mt-3 input-group col-md-12'}>
              <form className={'form-group col'}>
                  <input onChange={e => search(e.target.value)} type={'search'} className={'form-control'} placeholder={'Find users'} />
              </form>
          </div>
          <Collection collection={props.users}/>
      </Container>
  )
}


Index.getInitialProps = async (ctx) => {
    let url = 'https://api.github.com/users';
    let response = await fetch(url);
    let final = await response.json();

    return {
        users:final,
    }
}

export default Index;