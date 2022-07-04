const Search = (props) => {
    return(
        <div className={'mt-3 input-group col-md-12'}>
            <form className={'form-group col'}>
                <input onChange={e => search(e.target.value)} type={'search'} className={'form-control'} placeholder={'Find users'} />
            </form>
        </div>
    )
}

export default Search;