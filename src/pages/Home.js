import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import InfiniteScroll from "react-infinite-scroll-component"

import Card from "../components/Card"
import Skeleton from "../components/Skeleton"
import Spinner from "../components/Spinner"

import { get_users, get_users_by_page } from '../controllers/user';

const Home = () => {

    let navigate = useNavigate();

    let [users, setUsers] = useState([]);
    let [page, setPage] = useState(1);

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login");
        }
        else {
            get_users().then(data => setUsers(data));
        }
    }, [])

    const fetchData = () => {
        let arr = users;
        get_users_by_page(page + 1).then(data => {
            for (let i of data) {
                arr.push(i);
            }
            setPage(page + 1);
            setUsers(arr);
        })
    }

    return (<>


        <div className='container p-3 mb-5'>
            <InfiniteScroll
                dataLength={users.length}
                next={fetchData}
                hasMore={true}
                loader={<Skeleton />}
                // loader={<div className='text-center container'><Spinner /></div>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>You are all caught up !!</b>
                    </p>
                }
            >
                {users.map(user => <>
                    <Card user={user} />
                </>
                )}

            </InfiniteScroll>
        </div>
    </>
    )
}

export default Home