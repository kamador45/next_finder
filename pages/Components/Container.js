import Head from "next/head";

const Container = (props) => {
    return(
        <section className={'container-fluid'}>
            <Head>
                <title>GitHub Finder</title>
                <link rel={'stylesheet'} href={'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'}/>
                <link rel={'stylesheet'} href={'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'}/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
            </Head>
            <div className={'container'}>
                {props.children}
            </div>
        </section>
    )
}

export default Container;