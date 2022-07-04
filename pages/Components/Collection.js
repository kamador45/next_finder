import {useEffect, useState} from "react";
import Link from "next/link";
import Router from "next/router";

const Collection = (props) => {
    //Define empty state
    const [list, setList] = useState([]);

    //Attempt to update state using UseEffect
    useEffect(() => {
        setList(props);
    },[list]);

    //Check if statate is empty
    if (list.length === 0) {
        return (
            <h1 className={'text-center'}>Empty</h1>
        )
    } else {
        return (
            <div className={'container'}>
                <div className={'row'}>
                    {
                        list.collection.map(x => (
                            <div key={x.id} className={'mt-5 card col-md-3'}>
                                <div className={'card-head'}>
                                    <div className={'text-center'}>
                                        <img width={200} className={'img-fluid img-thumbnail rounded-circle'} src={x.avatar_url} alt={x.login} />
                                    </div>
                                </div>
                                <div className={'card-body'}>
                                    <div className={'text-center'}>
                                        <h2>{x.login}</h2>
                                    </div>
                                </div>
                                <div className={'card-footer'}>
                                    <div className={'text-center'}>
                                        <Link href={'#'}>
                                            <a onClick={e => Router.push('/collections/[id]', `/collections/${x.login}`)} className={'btn btn-primary'}>More...</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Collection;