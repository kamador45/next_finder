import Container from "../Components/Container";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-fetch";
import Tab from "../Components/Tab";

const Profile = ({profile}) => {
    return(
        <Container>
            <Head>
                <title>Profile</title>
            </Head>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-3 mt-5 shadow py-2'}>
                        <div className={'rounded-circle text-center'}>
                            <img width={200} className={'img-fluid img-thumbnail rounded-circle'} src={profile.avatar_url} alt={profile.login} />
                        </div>
                        <div className={'mt-3 text-center'}>
                            <h3>{profile.name}</h3>
                            {profile.bio ? <h6>{profile.bio}</h6>:<h6>Add bio</h6>}
                            <a className={'btn btn-primary'}>Follow</a>
                        </div>
                        <div className={'mt3 d-flex'}>
                            <div className={'col-md-6 text-center mt-3'}>
                                <h6>Followers</h6>
                                <span>{profile.followers}</span>
                            </div>
                            <div className={'col-md-6 text-center mt-3'}>
                                <h6>Following</h6>
                                <span>{profile.following}</span>
                            </div>
                        </div>
                        <div className={'mt-3 d-flex'}>
                            <div className={'col-md-6 text-center'}>
                                {profile.location === null ? "":<i className="fa-solid fa-compass"></i>}
                                {profile.location === null ? "":<h6>{profile.location}</h6>}
                            </div>
                            <div className={'col-md-6 text-center'}>
                                <i className="fa-solid fa-link"></i>
                                <Link href={profile.blog}>
                                    <a>{profile.blog.substring(10,20)}</a>
                                </Link>
                            </div>
                        </div>
                        <div className={'mt-3 d-flex'}>
                            <div className={'col-md-6 text-center'}>
                                {profile.company === null ? "":<i className="fa-solid fa-briefcase"></i>}
                                {profile.company === null ? "":<h6>{profile.company}</h6>}
                            </div>
                        </div>
                        <div className={'mt-3 d-flex'}>
                            <div className={'col-md-6 text-center'}>
                                {profile.twitter_username === null ? "":<i className="fa-brands fa-twitter"></i>}
                                {profile.twitter_username === null ? "":<h6>{profile.twitter_username}</h6>}
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-9 mt-5'}>
                        <div className={'container shadow py-2'}>
                            <Tab repos={profile.repos_url}/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}


Profile.getInitialProps = async (ctx) => {
    //Settings to api call
    let url = `https://api.github.com/users/${ctx.query.id}`;
    let response = await fetch(url);
    let respJson = await response.json();

    return {
        profile: respJson,
    }
}



export default Profile;