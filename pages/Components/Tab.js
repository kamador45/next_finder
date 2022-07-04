import {Tabs} from "react-bootstrap";
import {useState, useEffect} from "react";
import fetch from "isomorphic-fetch";

const Tab = (props) => {

    //init state
    const [repos, setRepos] = useState([]);

    //life cycle
    useEffect(() => {
        const getRepo = async (url) => {
            let response = await fetch(url);
            let resJson = await response.json();

            //update states
            if (repos.length === 0) {
                setRepos(resJson);
            }
        }

        //Execute function
        getRepo(props.repos);
    },[])

    return(
        <Tabs defaultActiveKey={'Repo'} className={'mb-3'}>
            <Tab eventKey={'Repo'} title={'Repositories'}>
                <ul className={'list-group'}>
                    {
                        repos.map(x => (
                            <li key={x.id} className={'list-group-item'}>
                                <i className="fa-brands fa-github-alt"></i> {x.full_name}
                                <ul className={'list-group d-flex'}>
                                    <li className={'list-group-item'}>
                                        <i className="fa-solid fa-gear"></i> {x.language}
                                    </li>
                                    <li className={'list-group-item'}>
                                        <i className="fa-solid fa-earth-americas"></i> {x.visibility}
                                    </li>
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </Tab>
            <Tab eventKey={'Proj'} title={'Projects'}>
                <h1>Projects</h1>
            </Tab>
        </Tabs>
    )
}

export default Tab;